import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import jwt_decode, {JwtPayload} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token:string){
    // localStorage.setItem('token', token);
    setCookie('token', token, {expires:365, path:'/'});

  }

  getToken(){
    // const token = localStorage.getItem('token');
    const token = getCookie('token');
    return token;
  }

  removeToken(){
    // localStorage.removeItem('token');
    removeCookie('token');  
  }

  isValidToken(){
    const token = this.getToken();
    if(!token){
      return false;
    }
    //j
    const decodedToken = jwt_decode<JwtPayload>(token);
    if(decodedToken && decodedToken.exp){
      const tokenDate = new Date(0);
      tokenDate.setUTCSeconds(decodedToken.exp);
      const today = new Date();
      return tokenDate.getTime() > today.getTime();
    }

    return false;
  }

  saveRefreshToken(token:string){
    // localStorage.setItem('token', token);
    setCookie('refresh-token', token, {expires:365, path:'/'});

  }

  getRefreshToken(){
    // const token = localStorage.getItem('token');
    const token = getCookie('refresh-token');
    return token;
  }

  removeRefreshToken(){
    // localStorage.removeItem('token');
    removeCookie('refresh-token');  
  }

  isValidRefreshToken(){
    const token = this.getRefreshToken();
    if(!token){
      return false;
    }
    //j
    const decodedToken = jwt_decode<JwtPayload>(token);
    if(decodedToken && decodedToken.exp){
      const tokenDate = new Date(0);
      tokenDate.setUTCSeconds(decodedToken.exp);
      const today = new Date();
      return tokenDate.getTime() > today.getTime();
    }

    return false;
  }
}
