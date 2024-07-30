import {Component, inject} from '@angular/core';
import {AbstractControl, FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";
import {CustomValidators} from "../custom-validators";

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  // frm = new FormGroup({
  //   id: new FormControl('',
  //     [
  //       Validators.required,
  //       Validators.pattern(/^C\d{3}$/)
  //     ]),
  //   name: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern(/^[A-Za-z ]+$/),
  //     Validators.minLength(3)
  //   ]),
  //   contact: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern(/^\d{3}-\d{7}$/)
  //   ])
  // });

  fb = inject(FormBuilder);
  frm = this.fb.group({
    id: ['', [
      Validators.required,
      Validators.pattern(/^C\d{3}$/)]],
    name: ['', [CustomValidators.Name()]],
    contact: ['', [
      Validators.required,
      Validators.pattern(/^\d{3}-\d{7}$/)]]
  });

  // constructor(private fb: FormBuilder) {
  // }

  get id() {
    return this.frm.get('id')!;
  }

  get name() {
    return this.frm.get('name')!;
  }

  get contact() {
    return this.frm.get('contact')!;
  }

  getCSSClasses(control: AbstractControl) {
    return {
      'is-valid': control.touched && control.valid,
      'is-invalid': control.touched && control.invalid
    };
  }

  save() {
    this.frm.markAllAsTouched();
    if (this.frm.valid) {
      alert("Valid");
      console.log(this.frm.value);
      this.frm.reset();
    } else {
      alert("Invalid");
    }
  }
}
