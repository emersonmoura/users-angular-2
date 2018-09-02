import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import tasks, { Task } from '../tasks/tasks';
import { User } from '../models/user.model';
import {  Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AppService {
  constructor(private sanitizer: DomSanitizer, private client: HttpClient) { }

  /**
   * @author Ahsan Ayaz
   * @desc Returns an array of tasks to be done as exercise
   */
  getTasks(): Array<Task> {
    return tasks.map((task) => {
      const updatedTask: Task = {description: ''};
      if (task.links && task.links.length) {
        for (const link of task.links) {
          updatedTask.description = task.description.replace('{{link}}', `<a href='${link}'>${link}</a>`);
        }
      } else if (task.routerLinks && task.routerLinks.length) {
        for (const link of task.routerLinks) {
          updatedTask.description = task.description.replace('{{link}}', `<a href='#/${link}' routerLink="${link}">'${link} route'</a>`);
        }
      }
      updatedTask.description = this.sanitizer.bypassSecurityTrustHtml(updatedTask.description) as string;
      return Object.assign({}, task, updatedTask);
    });
  }

  getUsers(): Observable<User[]> {
    return this.client.get("https://randomuser.me/api?page=1&results=20&seed=modus")
    .map((response: Response) => response["results"]
    .map((user: User) => new User().deserialize(user)));
    
  }
}
