import { Routes } from '@angular/router';
import {LandingPageComponent} from './public/pages/landing-page/landing-page.component';
import {NotFoundComponent} from './public/pages/not-found/not-found.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'model3',
    loadChildren: () => import('./public/pages/model-3/model3.routes'),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export default APP_ROUTES;
