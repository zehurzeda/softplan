import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioTriadorRoutingModule } from './usuario-triador-routing.module';
import { UsuarioTriadorComponent } from './usuario-triador.component';

import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListaProcessosComponent } from './lista-processos/lista-processos.component';
import { CadastroProcessoComponent } from './opcoes-side/cadastro-processo/cadastro-processo.component';
import { VincularUsuarioComponent } from './opcoes-side/vincular-usuario/vincular-usuario.component';
import { DesvincularUsuarioComponent } from './opcoes-side/desvincular-usuario/desvincular-usuario.component';
import { MaterialModule } from '../material/material.module';
import { SideNavService } from '../service/side-nav.service';
import { UsuarioService } from '../service/usuario.service';
import { EditarComponent } from './opcoes-side/editar/editar.component';

@NgModule({
  declarations: [UsuarioTriadorComponent, ListaProcessosComponent, CadastroProcessoComponent, VincularUsuarioComponent, DesvincularUsuarioComponent, EditarComponent],
  imports: [
    CommonModule,
    UsuarioTriadorRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SideNavService, UsuarioService]
})
export class UsuarioTriadorModule { }
