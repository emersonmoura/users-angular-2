import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppContentComponent } from './app-content.component';

describe('AppContentComponent', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContentComponent ],
      imports : [RouterTestingModule]
    })
    .compileComponents();
  }));


  it('should create', () => {
    const fixture = TestBed.createComponent(AppContentComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  
});
