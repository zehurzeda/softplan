import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guard/auth.guard';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'administrador',
        data: { auth: 'ROLE_ADMIN' },
        loadChildren:
          './administrador/administrador.module#AdministradorModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'usuario-triador',
        data: { auth: 'ROLE_TRIADOR' },
        loadChildren:
          './usuario-triador/usuario-triador.module#UsuarioTriadorModule',
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
