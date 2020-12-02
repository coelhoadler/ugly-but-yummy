import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TabelaModule } from '@appcomponents/tabela/tabela.module';
import { FloatToDecimalPipe } from '@apppipes/float-to-decimal.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule } from 'ngx-mask';
import { ProdutoCadastroComponent } from './pages/cadastro/produto-cadastro.component';
import { ProdutoListaComponent } from './pages/lista/produto-lista.component';
import { ProdutoRoutingModule } from './produto.routes';
import { ProdutoService } from './produto.service';

@NgModule({
  declarations: [ProdutoCadastroComponent, ProdutoListaComponent],
  exports: [ProdutoCadastroComponent, ProdutoListaComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot({ validation: true }),
    TabelaModule
  ],
  providers: [ProdutoService, DatePipe, FloatToDecimalPipe]
})
export class ProdutoModule { }
