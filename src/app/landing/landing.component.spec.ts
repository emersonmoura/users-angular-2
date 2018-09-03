import { async, TestBed } from '@angular/core/testing';
import { AppService } from '../core/services/app.service';
import { LandingComponent } from './landing.component';
import { MockAppService } from '../test.mocking'

describe('LandingComponent', () => {

  beforeEach(async(() => {
    configureTestingModule()
    configureMock()
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(LandingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

const configureTestingModule = () => {
  TestBed.configureTestingModule({
    declarations: [ LandingComponent ]
  })
}

const configureMock = () => {
  TestBed.overrideComponent(LandingComponent, {
    set: {
      providers: [
        { provide: AppService, useClass: MockAppService }
      ]
    }
  });
}
