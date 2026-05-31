import { Routes } from '@angular/router';
import { LoginComponent } from '../features/login/login';
import { UserCreateComponent } from '../features/users/user-create';
import { DashboardComponent } from '../features/dashboard/dashboard';
import { UserListComponent } from '../features/user-list/user-list';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'users/create',
    component: UserCreateComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
  path: 'users',
  component: UserListComponent,
  },
];