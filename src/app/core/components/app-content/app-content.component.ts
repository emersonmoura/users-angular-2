import { Component } from '@angular/core';
import { dispatch, select } from '@angular-redux/store';

@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent {
  
  @select(state => state.session.logged) logged;
  @select(state => state.session.user.lastName) lastName;
  @select(state => state.session.user.firstName) firstName;

  @dispatch() login = () => ({ type: 'LOGIN' });

  @dispatch() logout = () => ({ type: 'LOGOUT' });

}
