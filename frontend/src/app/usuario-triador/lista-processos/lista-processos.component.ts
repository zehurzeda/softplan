import { ProcessoModel } from './../../model/processo.model';
import { ProcessoService } from './../../service/processo.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'src/app/service/dialog.service';
import { SideNavService } from 'src/app/service/side-nav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-processos',
  templateUrl: './lista-processos.component.html',
  styleUrls: ['./lista-processos.component.scss']
})
export class ListaProcessosComponent implements OnInit, OnDestroy {

  @Input()
  private isMobile: boolean;

  private processos: ProcessoModel[] = []

  private subscription: Subscription;

  constructor(
    private processoService: ProcessoService,
    private toastr: ToastrService,
    private dialogService: DialogService,
    private sideNavService: SideNavService
  ) {}

  ngOnInit() {
    this.subscription = this.processoService.processosAtualizados$.subscribe(() => {
      this.getProcessos();
    });
    this.processoService.atualizarProcessos();
  }
  
  openSideNav() {
    this.sideNavService.open();
  }

  getProcessos() {
    this.processoService.getAllProcessos().subscribe(res => {
      this.processos = res;
    }, error => {
      console.log(error);
      this.toastr.error("Erro ao buscar processos!!");
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
