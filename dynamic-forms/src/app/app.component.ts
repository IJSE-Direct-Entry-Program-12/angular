import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    nic: ['123456789V'],
    name: ['Kasun Sampath'],
    gender: ['male'],
    subjects: this.fb.array([
      this.fb.group({
        name: ['Operating Systems'],
        marks: ['80']
      }),
      this.fb.group({
        name: ['DBMS'],
        marks: ['95']
      })
    ])
  });
}
