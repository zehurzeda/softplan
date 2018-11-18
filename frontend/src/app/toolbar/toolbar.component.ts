import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output()
  private toogleSidenav = new EventEmitter();

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onClickMenu() {
    this.toogleSidenav.emit();
  }

  logout() {
    this.authenticationService.logout();
  }

}
