import { AuthenticationService } from './../service/authentication.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthGroup } from '../model/authorization.types';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    if (this.authService.isLoggedIn()) {
      if(route.data['auth']) {
        return this.hasRequiredPermission(route.data['auth'])
      } else {
        return true;
      }
    } else {
      this.authService.logout();
      this.router.navigate(['login']);

      return false;
    }
  }

  protected hasRequiredPermission(authGroup: AuthGroup): Promise<boolean> | boolean {

    if (authGroup) {
      return (this.authService.hasPermission(authGroup));
    } else {
      return (this.authService.hasPermission(null));
    }
    
  }
}
