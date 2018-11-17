import { SideNavService } from './../../../service/side-nav.service';
import { Component, OnInit, Input } from '@angular/core';
import { BotaoAcaoModel } from 'src/app/model/botaoAcao.model';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.scss']
})
export class AcaoComponent implements OnInit {

  @Input()
  botoes: BotaoAcaoModel[];

	constructor(private sideNavService: SideNavService) {}

  ngOnInit() {}
  
  onClickAcao(){
    this.sideNavService.open();
  }

}
