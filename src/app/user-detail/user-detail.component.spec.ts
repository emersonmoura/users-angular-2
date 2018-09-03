import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {MockNgRedux, NgReduxTestingModule} from '@angular-redux/store/lib/testing';
import { AppService } from '../core/services/app.service';
import { UserDetailComponent } from './user-detail.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from '../core/models/user.model';
import { ActivatedRoute } from '@angular/router';

class MockAppService {

  users : Observable<User[]> =  of(new Array<User>());

  getUsers(): Observable<User[]> {
    return this.users;
  }
}

class MockRouteParam {
    params = of({});
}

const user = (uuid: string = ''): User => {
  return {
    firstName: 'Wilbert',
    lastName: 'Ayaz',
    uuid: uuid,
    login: 'login'
  }
}

describe('UserDetailComponent', () => {

  let appServiceMock = new MockAppService();
  let routeParamMock = new MockRouteParam();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailComponent ],
      imports: [RouterTestingModule, NgReduxTestingModule],
      providers: [MockNgRedux]
    })

    TestBed.overrideComponent(UserDetailComponent, {
      set: {
        providers: [
          { provide: AppService, useValue: appServiceMock },
          { provide: ActivatedRoute, useValue: routeParamMock }
        ]
      }
    });

    MockNgRedux.reset();
    
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(UserDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  it('given a user without uuid when init component should load user from list', done => {
    const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    const fixture = TestBed.createComponent(UserDetailComponent);
    const app = fixture.debugElement.componentInstance;
    let uuid = '9e2d6e63-08d1-4020-a570-8e2b2e2e1ce5'
    let expectUser = user(uuid)
    routeParamMock.params = of({id: uuid})
    appServiceMock.users = of([expectUser])

    const selectorStub = MockNgRedux.getSelectorStub(['currentUser']);
    selectorStub.next(null);
    selectorStub.complete();

    app.ngOnInit()
        
    expect(spy).toHaveBeenCalledWith({
      type: 'CURRENT_USER',
      payload: expectUser,
    });
  });

  it('select name data from the currentUser', done => {
    const fixture = TestBed.createComponent(UserDetailComponent);
    const app = fixture.debugElement.componentInstance;
    let service = new MockAppService();
    app.appService = service;

    const selectorStub = MockNgRedux.getSelectorStub(['currentUser']);
    selectorStub.next(user());
    selectorStub.complete();

    app.currentUser$.subscribe(current => {
      expect(current.firstName).toEqual('Wilbert');
    }, null, done);
  });


});
