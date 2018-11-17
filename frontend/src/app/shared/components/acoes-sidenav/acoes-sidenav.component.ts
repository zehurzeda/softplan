import { SideNavService } from './../../../service/side-nav.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'acoes-sidenav',
  templateUrl: './acoes-sidenav.component.html',
  styleUrls: ['./acoes-sidenav.component.scss']
})
export class AcoesSidenavComponent implements OnInit {

  @Input()
  private isMobile: boolean;

  constructor(private sideNavService: SideNavService) {}

  ngOnInit() {}

  fecharSideBarAcoes() {
    this.sideNavService.close();
  }
}
