import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TabelaComponent } from './tabela.component';

@NgModule({
  declarations: [TabelaComponent],
  exports: [TabelaComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class TabelaModule { }
