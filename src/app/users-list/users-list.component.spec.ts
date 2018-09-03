import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppService } from '../core/services/app.service';
import { UsersListComponent } from './users-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/observable/of';
import { createUser } from '../test.fixtures'
import { MockAppService } from '../test.mocking'

describe('UsersListComponent', () => {
  let appServiceMock = new MockAppService();

  beforeEach(async(() => {
    configureTestingModule()
    configureMocks(appServiceMock)
  }));


  it('should initialize user list when init', () => {
    const fixture = TestBed.createComponent(UsersListComponent);
    const app = fixture.debugElement.componentInstance;
    const expectedUsers = [createUser()]
    appServiceMock.users = of(expectedUsers)
    
    app.ngOnInit()
    
    expect(app.users).toBe(expectedUsers);
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(UsersListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

const configureTestingModule = () => {
  TestBed.configureTestingModule({
    declarations: [ UsersListComponent ],
    imports : [RouterTestingModule]
  })
}

const configureMocks = (appServiceMock) => {
  TestBed.overrideComponent(UsersListComponent, {
    set: {
      providers: [
        { provide: AppService, useValue: appServiceMock },
      ]
    }
  });
}


