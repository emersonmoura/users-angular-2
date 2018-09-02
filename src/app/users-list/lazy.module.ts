import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent }   from './users-list.component';
import { routing } from './lazy.routing';

@NgModule({
  imports: [routing, CommonModule, RouterModule, HttpClientModule],
  declarations: [UsersListComponent]
})
export class LazyModule {}