import { AuthGuard } from './_guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'administrador', loadChildren: './administrador/administrador.module#AdministradorModule', canActivate: [AuthGuard]
  },
  {
    path: 'usuario-triador', loadChildren: './usuario-triador/usuario-triador.module#UsuarioTriadorModule', canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
