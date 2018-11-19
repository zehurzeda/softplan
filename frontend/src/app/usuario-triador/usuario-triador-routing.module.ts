import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioTriadorComponent } from './usuario-triador.component';
import { CadastroProcessoComponent } from './opcoes-side/cadastro-processo/cadastro-processo.component';

const routes: Routes = [
  {
    path: '', component: UsuarioTriadorComponent, children: [
      {path: 'cadastro', component: CadastroProcessoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioTriadorRoutingModule { }
