import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {NgIfComponent} from "./ng-if/ng-if.component";
import {NgForComponent} from "./ng-for/ng-for.component";
import {NgSwitchComponent} from "./ng-switch/ng-switch.component";

export const routes: Routes = [
  {
    path: 'ng-if',
    component: NgIfComponent
  },
  {
    path: 'ng-for',
    component: NgForComponent
  },
  {
    path: 'ng-switch',
    component: NgSwitchComponent
  }
];
