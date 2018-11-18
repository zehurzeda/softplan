import { UsuarioService } from './../service/usuario.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador.component';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';
import { CadastroComponent } from './opcoes-side/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './opcoes-side/editar/editar.component';
import { SideNavService } from '../service/side-nav.service';
import { MaterialModule } from '../material/material.module';

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
