import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (localStorage.getItem('eToken') != null) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
