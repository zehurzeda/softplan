import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParecerRoutingModule } from './parecer-routing.module';
import { ParecerComponent } from './parecer.component';
import { ListaProcessosPendentesComponent } from './lista-processos-pendentes/lista-processos-pendentes.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CadastroComponent } from './opcoes-side/cadastro/cadastro.component';
import { VisualizarComponent } from './opcoes-side/visualizar/visualizar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParecerComponent, ListaProcessosPendentesComponent, CadastroComponent, VisualizarComponent],
  imports: [
    CommonModule,
    ParecerRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ParecerModule { }
