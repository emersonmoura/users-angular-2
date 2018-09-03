import { async, TestBed } from '@angular/core/testing';
import { AppContentComponent } from '../core/components/app-content/app-content.component'
import { AppHeaderComponent } from '../core/components/app-header/app-header.component'
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

  beforeEach(async(() => {
    configureTestingModule();
  }));


  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

const configureTestingModule = () => {
  TestBed.configureTestingModule({
    declarations: [ HomeComponent, AppContentComponent, AppHeaderComponent ],
    imports: [RouterTestingModule]
  })
}
