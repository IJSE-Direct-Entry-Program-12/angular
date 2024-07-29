import {Component, inject} from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private routerService: Router = inject(Router);

  login(txtUsername: HTMLInputElement,
        txtPassword: HTMLInputElement) {
    const username = txtUsername.value;
    const password = txtPassword.value;
    if (username === "admin" && password === "admin") {
      localStorage.setItem("logged", "true");
      this.routerService.navigateByUrl('/main');
    }else{
      localStorage.removeItem("logged")
      alert("Invalid login credentials");
      txtUsername.focus();
      txtUsername.select();
    }
  }
}
