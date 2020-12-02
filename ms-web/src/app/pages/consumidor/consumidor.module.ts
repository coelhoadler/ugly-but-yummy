import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TabelaModule } from '@components/tabela/tabela.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule } from 'ngx-mask';
import { ConsumidorRoutingModule } from './consumidor.routes';
import { ConsumidorService } from './consumidor.service';
import { ConsumidorCadastroComponent } from './pages/cadastro/consumidor-cadastro.component';
import { ConsumidorListaComponent } from './pages/lista/consumidor-lista.component';

@NgModule({
  declarations: [ConsumidorCadastroComponent, ConsumidorListaComponent],
  exports: [ConsumidorCadastroComponent, ConsumidorListaComponent],
  imports: [
    CommonModule,
    ConsumidorRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot({ validation: true }),
    TabelaModule
  ],
  providers: [ConsumidorService]
})
export class ConsumidorModule { }
