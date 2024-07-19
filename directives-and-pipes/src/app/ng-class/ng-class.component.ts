import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {update} from "immutable";

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p class="text-center" [class]="strClasses">
      Let's see how ngClass work with a string <br>
      <button (click)="strClasses = strClasses + ' second third'">Change the String</button>
      <button (click)="strClasses = ''">Clear String</button>
    </p>
    <hr>
    <p class="text-center" [class]="classesArray">
      Let's see how ngClass work with an array <br>
    </p>
    <hr>
    <p class="text-center" [class]="classesObj">
      Let's see how ngClass work with an object <br>
      <button (click)="flagFirst = !flagFirst;updateClassesObj();">First</button>
      <button (click)="flagSecond = !flagSecond;updateClassesObj()">Second</button>
      <button (click)="flagThird = !flagThird; updateClassesObj()">Third</button>
    </p>
    <hr>
    <p [class.text-center]="true" [class.first]="flagFirst"
        [class.second]="flagSecond" [class.third]="flagThird">
      Let's see how ngClass work with single class <br>
      <button (click)="flagFirst = !flagFirst">First</button>
      <button (click)="flagSecond = !flagSecond">Second</button>
      <button (click)="flagThird = !flagThird">Third</button>
    </p>
  `,
  styles: `
    .first{ color: red; }
    .second{ background-color: yellow; }
    .third{ border: 3px solid red; }
  `
})
export class NgClassComponent {
  strClasses = 'first';
  classesArray: string[] = ['first', 'second', 'third'];
  flagFirst = true; flagSecond = false; flagThird = true;
  classesObj = {
    first: this.flagFirst,
    second: this.flagSecond,
    third: this.flagThird
  };

  updateClassesObj(){
    this.classesObj = {
      first: this.flagFirst,
      second: this.flagSecond,
      third: this.flagThird
    };
  }
}
