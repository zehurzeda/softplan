import { AuthGuard } from './_guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pages',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
