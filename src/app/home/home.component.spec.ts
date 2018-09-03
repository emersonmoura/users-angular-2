import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppContentComponent } from '../core/components/app-content/app-content.component'
import { AppHeaderComponent } from '../core/components/app-header/app-header.component'
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, AppContentComponent, AppHeaderComponent ],
      imports: [RouterTestingModule]
    })
  }));


  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
