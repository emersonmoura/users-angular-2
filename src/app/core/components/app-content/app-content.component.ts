import { Component } from '@angular/core';
import { dispatch, select } from '@angular-redux/store';
import { SESSION_TYPES } from '../../../store/model'

@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent {
  
  @select(state => state.session.logged) logged;
  @select(state => state.session.user) user;

  @dispatch() login = () => ({ type: SESSION_TYPES.LOGIN });

  @dispatch() logout = () => ({ type: SESSION_TYPES.LOGOUT });

}
