import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('snav')
  public sidenav: MatSidenav;

  mode = new FormControl('side');

  title = 'softplan';

  constructor() {
    if (window.screen.width < 1000) {
      this.mode.setValue('over');
    } else {
      this.mode.setValue('side');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 1000) {
      this.mode.setValue('over');
    }
    if (event.target.innerWidth > 1000) {
      this.mode.setValue('side');
    }
  }

  toogleSidenav() {
    this.sidenav.toggle();
  }

}
