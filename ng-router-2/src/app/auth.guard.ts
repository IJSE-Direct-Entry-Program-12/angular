import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const routerService = inject(Router);
  const logged = !!localStorage.getItem("logged");
  if (logged) {
    return true;
  }else{
    return routerService.parseUrl('/login');
  }
};
