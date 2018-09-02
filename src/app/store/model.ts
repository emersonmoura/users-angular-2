import { Session } from '../core/models/session.model';
import { User } from '../core/models/user.model';

export interface AppState {
  session?: Session;
  currentUser?: User;
}