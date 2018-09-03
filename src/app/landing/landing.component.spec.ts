import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppService } from '../core/services/app.service';
import { Observable } from 'rxjs/Observable';
import { LandingComponent } from './landing.component';
import { User } from '../core/models/user.model';

class MockAppService {
  getUsers(): Observable<User[]> {
    return Observable.of(new Array<User>());
  }
}

describe('LandingComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingComponent ]
    })
    TestBed.overrideComponent(LandingComponent, {
      set: {
        providers: [
          { provide: AppService, useClass: MockAppService }
        ]
      }
    });
    
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(LandingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
