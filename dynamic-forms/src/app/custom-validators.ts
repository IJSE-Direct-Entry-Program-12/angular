import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class CustomValidators /* implements Validator */ {

  public static get isBlank(): ValidatorFn {
    return function validate(control: AbstractControl): ValidationErrors | null {
      const value = control.value;
      const errors: ValidationErrors = {};
      if (!value || value && !value.trim().length) {
        errors['blank'] = true;
      }
      return errors;
    }
  }
}
