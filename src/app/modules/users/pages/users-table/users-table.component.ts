import { Component, OnInit } from '@angular/core';

import { DataSourceUser } from './data-source';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit {

  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];

  constructor(private userService:UserService) {
    
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users=> {
      this.dataSource.init(users);
    })
  }

}
