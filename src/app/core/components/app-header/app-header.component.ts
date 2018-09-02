import { Component } from '@angular/core';
import { dispatch, select } from '@angular-redux/store';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  @select(state => state.session.logged) logged;
  @select(state => state.session.user) user;

  @dispatch() login = () => ({ type: 'LOGIN' });
  @dispatch() signup = () => ({ type: 'LOGIN' });

  @dispatch() logout = () => ({ type: 'LOGOUT' });

}
