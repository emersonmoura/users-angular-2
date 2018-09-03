import { Session } from '../core/models/session.model';
import { User } from '../core/models/user.model';

export const SESSION_TYPES = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

export const USER_TYPES = {
  CURRENT_USER: 'CURRENT_USER',
  RESET: 'RESET',
};

export interface AppState {
  session?: Session;
  currentUser?: User;
}