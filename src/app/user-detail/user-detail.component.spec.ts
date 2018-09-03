import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {MockNgRedux, NgReduxTestingModule} from '@angular-redux/store/lib/testing';
import { AppService } from '../core/services/app.service';
import { UserDetailComponent } from './user-detail.component';
import { of } from 'rxjs/observable/of';
import { ActivatedRoute } from '@angular/router';
import { USER_TYPES } from '../store/model'
import { createUser } from '../test.fixtures'
import { MockAppService, MockRouteParam } from '../test.mocking'


describe('UserDetailComponent', () => {

  let appServiceMock = new MockAppService();
  let routeParamMock = new MockRouteParam();
  let fixture: ComponentFixture<UserDetailComponent>;
  let app: UserDetailComponent;
  const uuid = '9e2d6e63-08d1-4020-a570-8e2b2e2e1ce5'

  beforeEach(async(() => {
    configureTestingModule()
    configureMocks(appServiceMock, routeParamMock);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(app).toBeTruthy();
  });


  it('given a know user without uuid when init component should load user from list', () => {
    const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    let expectUser = createUser(uuid)
    routeParamMock.params = of({id: uuid})
    appServiceMock.users = of([expectUser])

    const selectorStub = MockNgRedux.getSelectorStub(['currentUser']);
    selectorStub.next(createUser(null));
    selectorStub.complete();

    app.ngOnInit()
        
    expect(spy).toHaveBeenCalledWith({
      type: USER_TYPES.CURRENT_USER,
      user: expectUser,
    });
  });

  it('given a unknow user when init component should load user from list', () => {
    const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
      
    let expectUser = createUser(uuid)
    routeParamMock.params = of({id: uuid})
    appServiceMock.users = of([expectUser])

    const selectorStub = MockNgRedux.getSelectorStub(['currentUser']);
    selectorStub.next(null);
    selectorStub.complete();

    app.ngOnInit()
        
    expect(spy).toHaveBeenCalledWith({
      type: USER_TYPES.CURRENT_USER,
      user: expectUser,
    });
  });

  it('given a unknow user and a list with invalid user when init component should not load user from list', () => {
    const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    routeParamMock.params = of({id: uuid})
    appServiceMock.users = of([null])

    const selectorStub = MockNgRedux.getSelectorStub(['currentUser']);
    selectorStub.next(null);
    selectorStub.complete();

    app.ngOnInit()
        
    expect(spy).toHaveBeenCalledTimes(0);
  });


  it('given a unknow user and a invalid url id when init component should not load user from list', () => {
    const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    routeParamMock.params = of({id: null})
    appServiceMock.users = of([createUser(uuid)])

    const selectorStub = MockNgRedux.getSelectorStub(['currentUser']);
    selectorStub.next(null);
    selectorStub.complete();

    app.ngOnInit()
        
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should select name data from the currentUser', done => {
    const selectorStub = MockNgRedux.getSelectorStub(['currentUser']);
    selectorStub.next(createUser());
    selectorStub.complete();

    app.currentUser$.subscribe(current => {
      expect(current.firstName).toEqual('Wilbert');
    }, null, done);
  });


});

const configureTestingModule = () => {
  TestBed.configureTestingModule({
    declarations: [ UserDetailComponent ],
    imports: [RouterTestingModule, NgReduxTestingModule],
    providers: [MockNgRedux]
  })
}

const configureMocks = (appServiceMock, routeParamMock) => {
  TestBed.overrideComponent(UserDetailComponent, {
    set: {
      providers: [
        { provide: AppService, useValue: appServiceMock },
        { provide: ActivatedRoute, useValue: routeParamMock }
      ]
    }
  });
  MockNgRedux.reset();
}

