import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConsumidorComponent } from './consumidor.component';

@NgModule({
  declarations: [ConsumidorComponent],
  exports: [ConsumidorComponent],
  imports: [
    CommonModule
  ]
})
export class ConsumidorModule { }
