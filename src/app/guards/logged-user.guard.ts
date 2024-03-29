import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const LoggedUserGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken != null) {
    router.navigate(['home']);
    return false;
  } else {
    return true;
  }
};
