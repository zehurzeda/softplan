import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class SideNavService {
  private sidenav: MatSidenav;
  private rootRoute: ActivatedRoute;

  constructor(private router: Router) {}

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public setRootRoute(route: ActivatedRoute) {
    this.rootRoute = route;
  }

  public open() {
    return this.sidenav.open();
  }

  public close() {
    this.router.navigate(['./'], { relativeTo: this.rootRoute });
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }
}
