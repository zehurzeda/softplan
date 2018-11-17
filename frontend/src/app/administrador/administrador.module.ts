import { UsuarioService } from './../service/usuario.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador.component';
import {
  MatButtonModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';
import { CadastroComponent } from './opcoes-side/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './opcoes-side/editar/editar.component';
import { SideNavService } from '../service/side-nav.service';

@NgModule({
  declarations: [AdministradorComponent, ListaDeUsuariosComponent, CadastroComponent, EditarComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuarioService, SideNavService
  ]
})
export class AdministradorModule {}
