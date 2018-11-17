import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { FormControl } from '@angular/forms';
import { BotaoAcaoModel } from '../model/botaoAcao.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SideNavService } from '../service/side-nav.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {
  @ViewChild('snav')
  public sidenav: MatSidenav;

  mode = new FormControl('side');

  acoes: BotaoAcaoModel[] = [];

  isMobile: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private sideNavService: SideNavService
  ) {
    if (window.screen.width < 1000) {
      this.mode.setValue('over');
      if (!this.isMobile) {
        this.acoes.push(
          new BotaoAcaoModel('add', 'cadastro', 'Cadastrar Usuário')
        );
      }
      this.isMobile = true;
    } else {
      this.mode.setValue('side');
      this.acoes = [];
      this.isMobile = false;
    }
  }

  ngOnInit() {
    this.sideNavService.setSidenav(this.sidenav);
    this.sideNavService.setRootRoute(this.route);
  }

  fecharSideBarAcoes() {
    this.sideNavService.close();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 1000) {
      this.mode.setValue('over');
      if (!this.isMobile) {
        this.acoes.push(
          new BotaoAcaoModel('add', 'cadastro', 'Cadastrar Usuário')
        );
      }
      this.isMobile = true;
    }
    if (event.target.innerWidth > 1000) {
      this.mode.setValue('side');
      if (this.isMobile) {
        this.acoes = [];
      }
      this.isMobile = false;
    }
  }
}
