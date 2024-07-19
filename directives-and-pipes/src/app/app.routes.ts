import { Routes } from '@angular/router';
import {NgClassComponent} from "./ng-class/ng-class.component";
import {NgStyle} from "@angular/common";
import {PipeComponent} from "./pipe/pipe.component";
import {NgStyleComponent} from "./ng-style/ng-style.component";

export const routes: Routes = [
  {
    path: 'ng-class',
    component: NgClassComponent
  },
  {
    path: 'ng-style',
    component: NgStyleComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  }
];
