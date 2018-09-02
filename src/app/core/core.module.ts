import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { RouterModule } from '@angular/router';
import { AppService } from './services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from '../users-list/users-list.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [AppHeaderComponent, AppContentComponent,UsersListComponent, UserDetailComponent],
  exports: [AppHeaderComponent, AppContentComponent],
  providers: [
    AppService
  ]
})
export class CoreModule { }
