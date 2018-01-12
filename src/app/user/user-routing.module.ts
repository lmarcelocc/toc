import { AuthGuard, RoleGuard } from '../_guards/';
import { UserComponent } from './index';
import { ProfileComponent } from './profile/index';

// Resolvers
import { RoleResolve } from '../resolvers/index';

export const userRoutes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivate: [RoleGuard],
        children: [
          {
            path: 'profile',
            component: ProfileComponent,
            data: {
              title: 'Profile',
              roles: ['admin', 'user']
            }
          }
        ],
      },
    ],
  }
];
