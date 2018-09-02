import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent }   from './users-list.component';

const routes: Routes = [
  { path: '', component: UsersListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);