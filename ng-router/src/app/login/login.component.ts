import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private routerService: Router = inject(Router);

  login(txtUsername: HTMLInputElement,
        txtPassword: HTMLInputElement) {
    const username = txtUsername.value;
    const password = txtPassword.value;
    if (username === 'admin' && password === 'admin') {
      this.routerService.navigateByUrl('/main');
      localStorage.setItem("logged", "true");
    } else {
      localStorage.removeItem("logged");
      alert("Invalid username or password");
      txtUsername.focus();
      txtUsername.select();
    }
  }
}
