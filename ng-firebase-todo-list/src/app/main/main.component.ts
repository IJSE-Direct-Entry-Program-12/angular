import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {AppBarComponent} from "../app-bar/app-bar.component";
import {Task, TaskService} from "../service/task.service";
import {AuthService} from "../service/auth.service";

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

  taskList: Array<Task> = [];

  constructor(titleService: Title,
              authService: AuthService,
              private taskService: TaskService) {
    titleService.setTitle("To-do List App");
    taskService.getTasks(authService.getPrincipal()?.email!)
      .subscribe(taskList =>
        this.taskList = taskList);
  }
}
