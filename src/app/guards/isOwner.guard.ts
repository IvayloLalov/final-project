import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const IsOwnerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const userId = localStorage.getItem('userId');

  const ownerId = localStorage.getItem('ownerId');
  const isTheOwner = ownerId === userId;
  console.log('ownerId', ownerId);
  console.log('userId', userId);

  console.log('isOwner', isTheOwner);

  if (!isTheOwner) {
    router.navigate(['home']);
    return false;
  } else {
    return true;
  }
};
