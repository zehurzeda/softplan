import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioTriadorRoutingModule } from './usuario-triador-routing.module';
import { UsuarioTriadorComponent } from './usuario-triador.component';

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
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaProcessosComponent } from './lista-processos/lista-processos.component';
import { CadastroProcessoComponent } from './opcoes-side/cadastro-processo/cadastro-processo.component';
import { VincularUsuarioComponent } from './opcoes-side/vincular-usuario/vincular-usuario.component';
import { DesvincularUsuarioComponent } from './opcoes-side/desvincular-usuario/desvincular-usuario.component';

@NgModule({
  declarations: [UsuarioTriadorComponent, ListaProcessosComponent, CadastroProcessoComponent, VincularUsuarioComponent, DesvincularUsuarioComponent],
  imports: [
    CommonModule,
    UsuarioTriadorRoutingModule,
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
  ]
})
export class UsuarioTriadorModule { }
