import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioTriadorComponent } from './usuario-triador.component';

const routes: Routes = [
  {
    path: '', component: UsuarioTriadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioTriadorRoutingModule { }
