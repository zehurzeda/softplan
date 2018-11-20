import { Directive, ElementRef } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Directive({
  selector: '[appHideIfUnauthenticated]'
})
export class HideIfUnauthenticatedDirective {
  constructor(
    private el: ElementRef,
    private authServer: AuthenticationService
  ) {}
  ngOnInit() {
    if (!this.authServer.isLoggedIn()) {
      this.el.nativeElement.style.display = 'none';
    }
  }
}
