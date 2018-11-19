import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'src/app/service/dialog.service';
import { SideNavService } from 'src/app/service/side-nav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.scss']
})
export class ListaDeUsuariosComponent implements OnInit, OnDestroy {

  @Input()
  private isMobile: boolean;

  private usuarios: UsuarioModel[] = [];

  private subscription: Subscription;

  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private dialogService: DialogService,
    private sideNavService: SideNavService
  ) {}

  ngOnInit() {
    this.subscription = this.usuarioService.usuariosAtualizados$.subscribe(() => {
      this.getUsuarios();
    });
    this.usuarioService.atualizarUsuarios();
  }

  openSideNav() {
    this.sideNavService.open();
  }

  getUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe(res => {
      this.usuarios = res;
    });
  }

  deleteUsuario(id) {
    this.dialogService.openConfirmDialog('Tem certeza que deseja excluir este usuário?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.usuarioService.deletarUsuario(id).subscribe(res => {
          this.usuarioService.atualizarUsuarios();
          this.toastr.success("Usuário removido com sucesso!");
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
