import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioTriadorComponent } from './usuario-triador.component';
import { CadastroProcessoComponent } from './opcoes-side/cadastro-processo/cadastro-processo.component';
import { DesvincularUsuarioComponent } from './opcoes-side/desvincular-usuario/desvincular-usuario.component';
import { VincularUsuarioComponent } from './opcoes-side/vincular-usuario/vincular-usuario.component';
import { EditarComponent } from './opcoes-side/editar/editar.component';

const routes: Routes = [
  {
    path: '', component: UsuarioTriadorComponent, children: [
      {path: 'cadastro', component: CadastroProcessoComponent},
      {path: 'vincular/:id', component: VincularUsuarioComponent},
      {path: 'desvincular/:id', component: DesvincularUsuarioComponent},
      {path: 'editar/:id', component: EditarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioTriadorRoutingModule { }
