import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChildComponent} from "./child/child.component";
import {HelloMaterialComponent} from "./hello-material/hello-material.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, HelloMaterialComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-material';
}
