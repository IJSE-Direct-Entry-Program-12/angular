import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[customerName]',
  standalone: true,
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NameValidatorDirective,
    multi: true
  }]
})
export class NameValidatorDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    const customerName = control.value.trim();
    const errors: ValidationErrors = {};
    if (!customerName.length){
      errors['required'] = true;
    }
    if (!/^[A-Za-z ]+$/.test(customerName)){
      errors['pattern'] = true;
    }
    if (customerName.length < 3){
      errors['minlength'] = true;
    }
    return errors;
  }

  registerOnValidatorChange?(fn: () => void): void {
    // throw new Error('Method not implemented.');
  }

}
