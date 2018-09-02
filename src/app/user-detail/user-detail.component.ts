import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store/model';
import { AppService } from '../core/services/app.service';
import { User } from '../core/models/user.model';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private ngRedux: NgRedux<AppState>,
              private appService: AppService) { }

  id: string;
  private subOne: any;
  private subTwo: any;

  ngOnInit() {
    this.subOne = this.currentUser.subscribe(user => {
      if(!user.login){
        this.subTwo = this.loadUserWhenRequired();
      }
    });
  }

  private loadUserWhenRequired = () => {
    this.subTwo = this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.appService.getUsers().subscribe((users: Array<User>) => {
        var user = users.find((user: User)=>  user.uuid == this.id);
        if(user){
          this.ngRedux.dispatch({ type: 'CURRENT_USER', user });
        }
      });
   });
  }

  @select(state => state.currentUser) currentUser;

  ngOnDestroy() {
    if(this.subOne) this.subOne.unsubscribe();
    if(this.subTwo) this.subTwo.unsubscribe();
  }

}
