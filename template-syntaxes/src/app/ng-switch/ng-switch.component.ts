import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <ng-container [ngSwitch]="day">
      <div *ngSwitchCase="'Monday'">Monday is awesome</div>
      <div *ngSwitchCase="'Tuesday'">Tuesday is kinda okay</div>
      <div *ngSwitchCase="'Wednesday'">Wednesday is not bad</div>
      <div *ngSwitchCase="'Thursday'">Thursday is tikak amarui</div>
      <div *ngSwitchCase="'Friday'">Friday gedara yanna oni</div>
      <div *ngSwitchDefault>Weekend is full of fun</div>
    </ng-container>
    <hr>
    @switch (day){
      @case ('Monday'){
        <div>Monday is awesome</div>
      }
      @case ('Tuesday'){
        <div>Tuesday is kinda okay</div>
      }
      @case ('Wednesday'){
        <div>Wednesday is not bad</div>
      }
      @case ('Thursday'){
        <div>Thursday is tikak amarui</div>
      }
      @case ('Friday'){
        <div>Friday gedara yanna oni</div>
      }
      @default {
        <div>Weekend is full of fun</div>
      }
    }
  `,
  styles: ``
})
export class NgSwitchComponent {
  day = 'Friday'
}
