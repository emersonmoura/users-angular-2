import { combineReducers, Action } from 'redux';
import { Session } from '../core/models/session.model';
import { User } from '../core/models/user.model';

const DEFAULT_USER: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz',
    uuid: ''
}

const INITIAL_STATE: Session = {
    logged: false,
    user: DEFAULT_USER
  };


export function session(state: Session = INITIAL_STATE, action: Action) : Session {
  switch (action.type) {
    case 'LOGIN':
    return {
        user: DEFAULT_USER,
        logged: true
      };

    case 'LOGOUT':
      return {
        user: DEFAULT_USER,
        logged: false
      };;

    default:
      return state;
  }
}

export function currentUser(state: User = DEFAULT_USER, action: Action & { user }) : User {
  switch (action.type) {
    case 'CURRENT_USER':
      return action.user;
    case 'RESET':
      return DEFAULT_USER;

    default:
      return state;
  }
}
  
export const rootReducer =  combineReducers({session, currentUser});


