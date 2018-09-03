import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from './core/models/user.model';

export class MockAppService {

    users : Observable<User[]> =  of(new Array<User>());

    getUsers(): Observable<User[]> {
        return this.users;
    }
}
  
export class MockRouteParam {
    params = of({});
}