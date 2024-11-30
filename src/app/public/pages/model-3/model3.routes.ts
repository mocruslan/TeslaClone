import {Routes} from '@angular/router';
import {Model3Component} from './model-3/model-3.component';
import {Model3DesignComponent} from './model-3-design/model-3-design.component';

const MODEL3_ROUTES: Routes = [
  {
    path: '',
    component: Model3Component,
  },
  {
    path: 'design',
    component: Model3DesignComponent,
  }
];

export default MODEL3_ROUTES;
