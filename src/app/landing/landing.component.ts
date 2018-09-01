import { Component, OnInit } from '@angular/core';
import { AppService } from '../core/services/app.service';
import { Task } from '../core/tasks/tasks';
import { User } from '../core/models/user.model';

@Component({
  selector: 'ng-e-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  exerciseTasks: Array<Task>;
  users: Array<User>;
  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getUsers().subscribe((users: Array<User>) => {
      this.users = users
    });

    this.exerciseTasks = this.appService.getTasks();
  }

}
