import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListComponent } from './users-list/users-list.component';


const routes: Routes = [{
  path: 'landing',
  component: LandingComponent
}, {
  path: 'home',
  component: HomeComponent,
  children: [
    {
      path: 'user-list',
      component: UsersListComponent
    },{
      path: 'user-list/user-detail/:id',
      component: UserDetailComponent
   
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
