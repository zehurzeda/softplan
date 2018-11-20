import { CadastroComponent } from './opcoes-side/cadastro/cadastro.component';
import { ParecerComponent } from './parecer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualizarComponent } from './opcoes-side/visualizar/visualizar.component';

const routes: Routes = [
  {
    path: '',
    component: ParecerComponent,
    children: [
      { path: 'cadastrar-parecer/:id', component: CadastroComponent },
      { path: 'visualizar-pareceres/:id', component: VisualizarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParecerRoutingModule {}
