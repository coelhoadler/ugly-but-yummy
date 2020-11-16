import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CadastroModule } from '@appcomponents/cadastro/cadastro.module';
import { ConsumidorComponent } from './consumidor.component';
import { ConsumidorRoutingModule } from './consumidor.routes';

@NgModule({
  declarations: [ConsumidorComponent],
  exports: [ConsumidorComponent],
  imports: [
    CommonModule,
    ConsumidorRoutingModule,
    CadastroModule
  ]
})
export class ConsumidorModule { }
