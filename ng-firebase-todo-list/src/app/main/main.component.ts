import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {AppBarComponent} from "../app-bar/app-bar.component";
import {Task, TaskService} from "../service/task.service";
import {AuthService} from "../service/auth.service";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AppBarComponent,
    MatCheckbox,
    MatIcon,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    FormsModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  taskList: Array<Task> = [];
  description = "";

  constructor(titleService: Title,
              private authService: AuthService,
              protected taskService: TaskService) {
    titleService.setTitle("To-do List App");
    taskService.getTasks(authService.getPrincipalEmail()!)
      .subscribe(taskList =>{
        console.log(taskList);
        this.taskList = taskList;
      });
  }

  async addTask(txt: HTMLInputElement) {
    if (!this.description.trim().length){
      txt.select();
      txt.focus();
      return;
    }else{
      try {
        await this.taskService.createNewTask(this.description,
          this.authService.getPrincipalEmail()!);
        this.description = "";
        txt.focus();
      }catch(e){
        console.log(e);
        alert("Failed to save the task, try again");
      }
    }
  }
}
