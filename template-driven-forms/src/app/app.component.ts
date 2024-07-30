import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TemplateFormComponent} from "./template-form/template-form.component";
import {CustomerFormComponent} from "./customer-form/customer-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateFormComponent, CustomerFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myInput = '';
  isInputDirty = false;

  isInputValid(): boolean {
    return /^[A-Za-z0-9 ]+$/.test(this.myInput);
  }

  validate() {
    this.isInputDirty = true;
    if (this.isInputValid()) {
      alert("Valid");
    } else {
      alert("Invalid");
    }
  }
}
