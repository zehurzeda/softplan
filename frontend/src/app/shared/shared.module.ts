import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTooltipModule,
  MatDialogModule
} from '@angular/material';
import { AcoesSidenavComponent } from './components/acoes-sidenav/acoes-sidenav.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcaoComponent } from './components/acao/acao.component';
import { SideNavService } from '../service/side-nav.service';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { HideIfUnauthenticatedDirective } from './directives/hide-if-unauthenticated.directive';

@NgModule({
  declarations: [
    AcoesSidenavComponent,
    AcaoComponent,
    LoadingSpinnerComponent,
    HideIfUnauthenticatedDirective
  ],
  exports: [
    AcoesSidenavComponent,
    AcaoComponent,
    LoadingSpinnerComponent,
    HideIfUnauthenticatedDirective
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [SideNavService]
})
export class SharedModule {}
