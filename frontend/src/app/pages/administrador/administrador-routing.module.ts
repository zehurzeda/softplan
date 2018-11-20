import { CadastroComponent } from './opcoes-side/cadastro/cadastro.component';
import { AdministradorComponent } from './administrador.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './opcoes-side/editar/editar.component';

const routes: Routes = [
  {
    path: '',
    component: AdministradorComponent,
    children: [
      { path: 'cadastro', component: CadastroComponent },
      { path: 'editar/:id', component: EditarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule {}
