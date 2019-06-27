import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (state.url.indexOf('/student/home')>=0) {
      const currentUser = sessionStorage.getItem('token');
      if (currentUser) {
        return true;
      }
      this.router.navigate(['/student/login'], { queryParams: { returnUrl: state.url } });
      return false;
    } else if (state.url.indexOf('/teacher/home')>=0) {
      const currentUser = sessionStorage.getItem('teacherToken');
      if (currentUser) {
        return true;
      }
      this.router.navigate(['/teacher/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }

  }

  constructor(private router: Router) { }

}
