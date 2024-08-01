import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {AppBarComponent} from "../app-bar/app-bar.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AppBarComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(titleService: Title) {
    titleService.setTitle("To-do List App");
  }
}
