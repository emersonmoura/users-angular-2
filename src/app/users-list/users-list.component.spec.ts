import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppService } from '../core/services/app.service';
import { UsersListComponent } from './users-list.component';
import { Observable } from 'rxjs/Observable';
import { User } from '../core/models/user.model';
import { RouterTestingModule } from '@angular/router/testing';



class MockAppService {
  getUsers(): Observable<User[]> {
    return Observable.of(new Array<User>());
  }
}

describe('UsersListComponent', () => {
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListComponent ],
      imports : [RouterTestingModule]
    })
    TestBed.overrideComponent(UsersListComponent, {
      set: {
        providers: [
          { provide: AppService, useClass: MockAppService }
        ]
      }
    });
  
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(UsersListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
