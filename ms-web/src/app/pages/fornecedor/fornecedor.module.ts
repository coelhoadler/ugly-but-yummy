import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TabelaModule } from '@appcomponents/tabela/tabela.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule } from 'ngx-mask';
import { FornecedorRoutingModule } from './fornecedor.routes';
import { FornecedorService } from './fornecedor.service';
import { FornecedorCadastroComponent } from './pages/cadastro/fornecedor-cadastro.component';
import { FornecedorListaComponent } from './pages/lista/fornecedor-lista.component';

@NgModule({
  declarations: [FornecedorCadastroComponent, FornecedorListaComponent],
  exports: [FornecedorCadastroComponent, FornecedorListaComponent],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot({ validation: true }),
    TabelaModule
  ],
  providers: [FornecedorService]
})
export class FornecedorModule { }
