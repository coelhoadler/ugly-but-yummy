import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CadastroModule } from '@components/cadastro/cadastro.module';
import { TabelaModule } from '@components/tabela/tabela.module';
import { ConsumidorRoutingModule } from './consumidor.routes';
import { ConsumidorCadastroComponent } from './pages/cadastro/consumidor-cadastro.component';
import { ConsumidorListaComponent } from './pages/lista/consumidor-lista.component';

@NgModule({
  declarations: [ConsumidorCadastroComponent, ConsumidorListaComponent],
  exports: [ConsumidorCadastroComponent, ConsumidorListaComponent],
  imports: [
    CommonModule,
    ConsumidorRoutingModule,
    CadastroModule,
    TabelaModule
  ]
})
export class ConsumidorModule { }
