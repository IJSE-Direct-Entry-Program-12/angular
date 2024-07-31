import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule, MatHint, MatLabel} from "@angular/material/form-field";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButtonModule, MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-hello-material',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './hello-material.component.html',
  styleUrl: './hello-material.component.css'
})
export class HelloMaterialComponent {

}
