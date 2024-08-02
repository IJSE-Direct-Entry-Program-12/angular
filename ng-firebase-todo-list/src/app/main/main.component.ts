import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {AppBarComponent} from "../app-bar/app-bar.component";
import {Task, TaskService} from "../service/task.service";
import {AuthService} from "../service/auth.service";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AppBarComponent,
    MatCheckbox,
    MatIcon
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  taskList: Array<Task> = [];

  constructor(titleService: Title,
              authService: AuthService,
              protected taskService: TaskService) {
    titleService.setTitle("To-do List App");
    taskService.getTasks(authService.getPrincipalEmail()!)
      .subscribe(taskList =>{
        console.log(taskList);
        this.taskList = taskList;
      });
  }
}
