import {AfterViewInit, Component, ElementRef, inject, ViewChild} from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MatFormFieldModule, MatInput, MatIcon, MatButton, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent{

  private routerService: Router = inject(Router);

  constructor(titleService: Title) {
    titleService.setTitle("Sign In - SmartPOS")
  }

  signIn(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.routerService.navigateByUrl('/dashboard');
    } else {
      alert("Invalid user");
    }
  }
}
