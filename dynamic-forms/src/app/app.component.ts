import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";

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
    nic: ['', [Validators.required,
      Validators.pattern(/^\d{9}[Vv]$/)]],
    name: ['', [Validators.required,
      Validators.pattern(/^[A-Za-z ]+$/)]],
    gender: ['', [Validators.required]],
    subjects: this.fb.array([
      this.createSubjectGroup(),
      this.createSubjectGroup(),
      this.createSubjectGroup()
    ])
  });

  getCssClasses(formControlName: string) {
    const control =
      this.form.get(formControlName)!;
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    }
  }

  addNewSubject() {
    this.form.controls.subjects.push(this.createSubjectGroup());
  }

  createSubjectGroup(){
    return this.fb.group({
      name: [''],
      marks: ['']
    });
  }
}
