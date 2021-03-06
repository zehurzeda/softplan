import { ActivatedRoute } from '@angular/router';
import { BotaoAcaoModel } from './../../model/botaoAcao.model';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { SideNavService } from 'src/app/service/side-nav.service';

@Component({
  selector: 'app-parecer',
  templateUrl: './parecer.component.html',
  styleUrls: ['./parecer.component.scss']
})
export class ParecerComponent implements OnInit {
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
      this.isMobile = true;
    } else {
      this.mode.setValue('side');
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
      this.isMobile = true;
    }
    if (event.target.innerWidth > 1000) {
      this.mode.setValue('side');
      this.isMobile = false;
    }
  }

}
