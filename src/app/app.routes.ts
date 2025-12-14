import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Panel } from './panel/panel';
import { Dashboard } from './panel/sidebar/dashboard/dashboard';
import { Services } from './panel/sidebar/services/services';
import { Order } from './panel/sidebar/order/order';
import { Pricing } from './panel/sidebar/pricing/pricing';
import { Api } from './panel/sidebar/api/api';
import { Support } from './panel/sidebar/support/support';
import { Wallet } from './panel/sidebar/wallet/wallet';
import { Profile } from './panel/sidebar/profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'panel',
    component: Panel,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'services', component: Services },
      { path: 'new-order', component: Order },
      { path: 'pricing', component: Pricing },
      { path: 'api', component: Api },
      { path: 'support', component: Support },
      { path: 'wallet', component: Wallet },
      { path: 'profile', component: Profile },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
