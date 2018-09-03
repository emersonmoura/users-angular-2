import { async, TestBed } from '@angular/core/testing';

import { AppHeaderComponent } from './app-header.component';

describe('AppHeaderComponent', () => {
  
  beforeEach(async(() => {
    configureTestingModule();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(AppHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

const configureTestingModule = () => {
  TestBed.configureTestingModule({
    declarations: [ AppHeaderComponent ]
  })
  .compileComponents();
}
