import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {MockNgRedux, NgReduxTestingModule} from '@angular-redux/store/lib/testing';
import { AppService } from '../core/services/app.service';
import { UserDetailComponent } from './user-detail.component';
import { Observable } from 'rxjs/Observable';
import { User } from '../core/models/user.model';

class MockAppService {
  getUsers(): Observable<User[]> {
    return Observable.of(new Array<User>());
  }
}

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailComponent ],
      imports: [RouterTestingModule, NgReduxTestingModule],
      providers: [MockNgRedux]
    })

    TestBed.overrideComponent(UserDetailComponent, {
      set: {
        providers: [
          { provide: AppService, useClass: MockAppService }
        ]
      }
    });
    
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(UserDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
