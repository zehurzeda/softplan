import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/service/side-nav.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';
import { UsuarioParecerProcessoService } from 'src/app/service/usuario-parecer-processo.service';

@Component({
  selector: 'app-vincular-usuario',
  templateUrl: './vincular-usuario.component.html',
  styleUrls: ['./vincular-usuario.component.scss']
})
export class VincularUsuarioComponent implements OnInit {
  public selectedOptions: UsuarioModel[] = [];

  private usuarios: UsuarioModel[] = [];

  private idProcesso;

  private loading: boolean = true;

  constructor(
    private sidenavService: SideNavService,
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private usuarioParecerProcessoService: UsuarioParecerProcessoService
  ) {}

  ngOnInit() {
    this.sidenavService.open();

    this.route.params.subscribe(routeParams => {
      this.idProcesso = routeParams.id;
      this.getUsuariosNaoVinculadosAoProcesso();
    });
  }

  getUsuariosNaoVinculadosAoProcesso() {
    this.loading = true;
    this.usuarioService
      .getAllUsuariosFinalizadoresNaoVinculadosAoProcesso(this.idProcesso)
      .subscribe(
        res => {
          this.usuarios = res;
          this.loading = false;
        },
        error => {
          if (error.status != 403) {
            this.toastr.error('Erro ao buscar o usuário para edição!');
          }
        }
      );
  }

  onClick() {
    this.usuarioParecerProcessoService
      .vincularUsuarioProcesso(this.idProcesso, this.selectedOptions)
      .subscribe(
        res => {
          this.toastr.success('Usuários vinculados com sucesso!');
          this.sidenavService.close();
        },
        error => {
          this.toastr.error('Erro ao vincular usuários!');
        }
      );
  }
}
