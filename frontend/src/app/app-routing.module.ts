import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'administrador', loadChildren: './administrador/administrador.module#AdministradorModule'
  },
  {
    path: 'usuario-triador', loadChildren: './usuario-triador/usuario-triador.module#UsuarioTriadorModule'
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
