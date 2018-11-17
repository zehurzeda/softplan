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

@NgModule({
  declarations: [
    AcoesSidenavComponent,
    AcaoComponent,
  ],
  exports: [
    AcoesSidenavComponent,
    AcaoComponent
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
