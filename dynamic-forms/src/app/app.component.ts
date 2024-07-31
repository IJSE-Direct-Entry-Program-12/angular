import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CustomValidators} from "./custom-validators";

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
    name: ['', [CustomValidators.isBlank,
      Validators.pattern(/^[A-Za-z ]+$/)]],
    gender: ['', [Validators.required]],
    subjects: this.fb.array([
      this.createSubjectGroup(),
      this.createSubjectGroup(),
      this.createSubjectGroup()
    ])
  });

  createSubjectGroup(){
    return this.fb.group({
      name: ['', [CustomValidators.isBlank]],
      marks: ['', [Validators.required]]
    });
  }

  getCssClasses(formControlName: string,
                formGroup: FormGroup = this.form) {
    const control =
      formGroup.get(formControlName)!;
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    }
  }

  addNewSubject() {
    this.form.controls.subjects.push(this.createSubjectGroup());
  }
}
