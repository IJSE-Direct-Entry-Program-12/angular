import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {PercentPipe} from "@angular/common";
import {ValueService} from "./service/value.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, SecondComponent, PercentPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  value = 75;

  constructor(private valueService: ValueService) {
    valueService.getValue().subscribe(
      value => this.value = value);
  }
}
