import { Component, OnInit } from '@angular/core';
import { AppService } from '../core/services/app.service';
import { User } from '../core/models/user.model';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: Array<User>;
  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getUsers().subscribe((users: Array<User>) => {
      this.users = users
    });
  }

}
