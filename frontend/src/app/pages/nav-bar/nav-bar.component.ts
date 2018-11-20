import { AuthGroup } from 'src/app/model/authorization.types';
import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit } from '@angular/core';

export class Link {
  constructor(
    public label: string,
    public path: string,
    public role: AuthGroup
  ) {}
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private links: Link[] = [
    new Link('Administrador', 'admin', 'ROLE_ADMIN'),
    new Link('Triagem', 'triagem', 'ROLE_TRIADOR'),
    new Link('Parecer', 'parecer', 'ROLE_FINALIZADOR')
  ];

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

  getDisabled(role: AuthGroup) {
    return !this.authService.hasPermission(role);
  }
}
