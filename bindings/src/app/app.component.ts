import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {FormsModule} from "@angular/forms";
import {ThirdComponent} from "./third/third.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent,
    SecondComponent, FormsModule, ThirdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  flag: boolean = true;
  str1 = "Hello";
  str2 = "World";
  inputStr = "Enter something";
  childInput = "";
  twoWayBinding = "Hello";

  isFlag(): boolean {
    return this.flag;
  }

  updateInputText(e: Event){
    this.inputStr = (e.target as HTMLInputElement).value;
    this.inputStr = (<HTMLInputElement>(e.target)).value;
  }

  parentValue: number = 50;

  updateValue(value: number){
    this.parentValue  = value;
  }
}
