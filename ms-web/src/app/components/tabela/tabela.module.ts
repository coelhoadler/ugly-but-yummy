import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabelaComponent } from './tabela.component';

@NgModule({
  declarations: [TabelaComponent],
  exports: [TabelaComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    FontAwesomeModule
  ]
})
export class TabelaModule { }
