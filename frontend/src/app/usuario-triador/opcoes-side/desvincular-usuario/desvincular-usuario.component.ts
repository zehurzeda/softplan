import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/service/side-nav.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioParecerProcessoModel } from 'src/app/model/usuario-parecer-service.model';
import { UsuarioParecerProcessoService } from 'src/app/service/usuario-parecer-processo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desvincular-usuario',
  templateUrl: './desvincular-usuario.component.html',
  styleUrls: ['./desvincular-usuario.component.scss']
})
export class DesvincularUsuarioComponent implements OnInit {
  public selectedOptions: UsuarioParecerProcessoModel[] = [];

  public usuariosParecer: UsuarioParecerProcessoModel[] = [];

  private idProcesso;

  private loading: boolean = true;

  constructor(
    private sidenavService: SideNavService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private usuarioParecerProcessoService: UsuarioParecerProcessoService
  ) {}

  ngOnInit() {
    this.sidenavService.open();

    this.route.params.subscribe(routeParams => {
      this.idProcesso = routeParams.id;
      this.getUsuariosVinculadosAoProcesso();
    });
  }

  getUsuariosVinculadosAoProcesso() {
    this.loading = true;
    this.usuarioParecerProcessoService
      .getAllByIdProcesso(this.idProcesso)
      .subscribe(
        res => {
          this.usuariosParecer = res;
          this.loading = false;
        },
        error => {
          this.toastr.error(
            'Erro ao buscar os usuários vinculados ao processo!'
          );
        }
      );
  }

  onClick() {
    this.usuarioParecerProcessoService
      .desvincularUsuariosProcesso(this.idProcesso, this.selectedOptions)
      .subscribe(
        () => {
          this.toastr.success('Usuários desvinculados com sucesso!!');
          this.sidenavService.close();
        },
        () => {
          this.toastr.error('Erro ao desvincular usuários!!');
        }
      );
  }
}
