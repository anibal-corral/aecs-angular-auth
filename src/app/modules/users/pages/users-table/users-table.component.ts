import { Component, OnInit } from '@angular/core';

import { DataSourceUser } from './data-source';
import { UserService } from '../../../../services/user.service';
import { User } from '@models/user.model';
import { AuthGuard } from '../../../../guards/auth.guard';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit {
user:User | null = null;
  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];

  constructor(private userService:UserService, private authService:AuthService) {
    
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users=> {
      this.dataSource.init(users);
    })
    this.authService.user$.subscribe((user)=> this.user=user);
  }

}
