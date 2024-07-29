import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  private routerService: Router = inject(Router);

  logout() {
    localStorage.removeItem("logged");
    this.routerService.navigateByUrl('/login');
  }
}
