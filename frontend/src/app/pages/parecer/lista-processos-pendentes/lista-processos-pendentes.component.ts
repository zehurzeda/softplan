import { UsuarioParecerProcessoModel } from 'src/app/model/usuario-parecer-service.model';
import { UsuarioParecerProcessoService } from './../../../service/usuario-parecer-processo.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SideNavService } from 'src/app/service/side-nav.service';

@Component({
  selector: 'app-lista-processos-pendentes',
  templateUrl: './lista-processos-pendentes.component.html',
  styleUrls: ['./lista-processos-pendentes.component.scss']
})
export class ListaProcessosPendentesComponent implements OnInit, OnDestroy {
  @Input()
  private isMobile: boolean;

  private processosPendentes: UsuarioParecerProcessoModel[] = [];

  private subscription: Subscription;

  private loading: boolean = true;

  constructor(
    private usuarioParecerProcessoService: UsuarioParecerProcessoService,
    private toastr: ToastrService,
    private sideNavService: SideNavService
  ) {}

  ngOnInit() {
    this.subscription = this.usuarioParecerProcessoService.processosPendentesAtualizados$.subscribe(
      () => {
        this.getProcessosPendentes();
      }
    );
    this.usuarioParecerProcessoService.atualizarProcessosPendentes();
  }

  openSideNav() {
    this.sideNavService.open();
  }

  getProcessosPendentes() {
    this.loading = true;
    this.usuarioParecerProcessoService
      .getAllPendentesByUsuarioLogado()
      .subscribe(
        res => {
          this.processosPendentes = res;
          this.loading = false;
        },
        error => {
          console.log(error);
          this.toastr.error('Erro ao buscar processos!!');
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
