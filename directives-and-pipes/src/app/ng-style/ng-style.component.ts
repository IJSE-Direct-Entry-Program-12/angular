import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {style} from "@angular/animations";

@Component({
  selector: 'app-ng-style',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p class="text-center"
       [style]="strStyles">
      Let's see how ngStyle works with a string<br>
      <button (click)="updateStyle()">Update Style</button>
      <button (click)="resetStyle()">Reset Style</button>
    </p>
    <hr>
    <p class="text-center" [style]="styleObject">
      Let's see how ngStyle works with an object <br>
      <button (click)="colorFlag = !colorFlag;updateStyleObj()">Color</button>
      <button (click)="bgColorFlag = !bgColorFlag; updateStyleObj()">Background Color</button>
    </p>
    <hr>
    <p [style.fontSize]=" (10 + 20) + 'px'"
       [style.background-color]="bgColorFlag ? 'yellow': 'initial'">
      Let's see how to deal with a single style <br>
      <button (click)="bgColorFlag = !bgColorFlag">Background Color</button>
    </p>
    <hr>
    <p style="{{strStyles}}">Don't do this</p>
    <h1 [attr.title]="strTooltip">Hover me</h1>
    <button (click)="changeTooltipText()">Change Tooltip Text</button>
    <h1 [class]="'first'">Do not do this</h1>
    <hr>
    <p ngNonBindable>
        {{str}}
        <button>{{str}}</button>
    </p>
  `,
  styles: `
    .first {
      color: red;
    }
    .second {
      border: 10px solid black;
    }
  `
})
export class NgStyleComponent {
  str = "Hello";
  strTooltip = 'Hello Tooltip Text';

  changeTooltipText(){
    this.strTooltip = "I changed the text";
  }

  strStyles = 'color: white; background-color: lime;';
  colorFlag = true;
  bgColorFlag = false;
  styleObject = {
    color: this.colorFlag ? 'red' : 'initial',
    backgroundColor: this.bgColorFlag ? 'yellow' : 'initial'
  }

  updateStyleObj() {
    this.styleObject = {
      color: this.colorFlag ? 'red' : 'initial',
      backgroundColor: this.bgColorFlag ? 'yellow' : 'initial'
    }
  }

  updateStyle() {
    this.strStyles = 'border: 2px solid black';
  }

  resetStyle() {
    this.strStyles = 'color: white; background-color: blue;';
  }

  protected readonly style = style;
}
