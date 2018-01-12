import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './auth/login/index';
import { RegisterComponent } from './auth/register/index';
import { PasswordResetComponent } from './auth/password-reset/index';
import { AuthGuard } from './_guards/index';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Authentication'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register'
    }
  },
  {
    path: 'password/reset',
    component: PasswordResetComponent,
    data: {
      title: 'Password reset'
    }
  },
  {
    path: 'password/reset/:token',
    component: PasswordResetComponent,
    data: {
      title: 'Password reset - Choose your new password'
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Dashboard'
    }
  },
  /**
   * User module
   */
  {
    path: 'user',
    loadChildren: 'app/user/user.module#UserModule'
  },
];
