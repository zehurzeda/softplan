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
        path: 'admin',
        data: { auth: 'ROLE_ADMIN' },
        loadChildren:
          './administrador/administrador.module#AdministradorModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'triagem',
        data: { auth: 'ROLE_TRIADOR' },
        loadChildren:
          './usuario-triador/usuario-triador.module#UsuarioTriadorModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'parecer',
        data: { auth: 'ROLE_FINALIZADOR' },
        loadChildren: './parecer/parecer.module#ParecerModule',
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
