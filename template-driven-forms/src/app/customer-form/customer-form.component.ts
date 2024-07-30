import {Component} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NameValidatorDirective} from "../name-validator.directive";

type Customer = {
  id: string,
  name: string,
  contact: string
}

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [FormsModule, NameValidatorDirective],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
  customer: Customer = {
    id: '',
    name: '',
    contact: ''
  }

  saveCustomer(frmModel: NgForm) {
    frmModel.control.markAllAsTouched();
    if (frmModel.invalid) {
      alert("Invalid");
    } else {
      alert("Valid");
      console.log(frmModel.value);
      frmModel.resetForm();
    }
  }
}
