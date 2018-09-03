import { Component } from '@angular/core';
import { dispatch, select } from '@angular-redux/store';
import { SESSION_TYPES } from '../../../store/model'

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  @select(state => state.session.logged) logged;
  @select(state => state.session.user) user;

  @dispatch() login = () => ({ type: SESSION_TYPES.LOGIN });
  @dispatch() signup = () => ({ type: SESSION_TYPES.LOGIN });

  @dispatch() logout = () => ({ type: SESSION_TYPES.LOGOUT });

}
