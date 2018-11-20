import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador.component';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';
import { CadastroComponent } from './opcoes-side/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './opcoes-side/editar/editar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { UsuarioService } from 'src/app/service/usuario.service';
import { SideNavService } from 'src/app/service/side-nav.service';

@NgModule({
  declarations: [AdministradorComponent, ListaDeUsuariosComponent, CadastroComponent, EditarComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuarioService, SideNavService
  ]
})
export class AdministradorModule {}
