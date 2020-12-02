import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromptService } from '@appcomponents/prompt/prompt.service';
import { RoutesEnum } from '@appenums/routes.enum';
import { Produto } from '@apppages/produto/interfaces/produto.interface';
import { ProdutoService } from '@apppages/produto/produto.service';
import { FloatToDecimalPipe } from '@apppipes/float-to-decimal.pipe';
import { TabelaDataModel } from '@components/tabela/models/tabela-data.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html'
})
export class ProdutoListaComponent implements OnInit {

  public faPlus = faPlus;

  @Input() public tableData: TabelaDataModel = new TabelaDataModel({
    columns: [
      { key: 'id', viewName: 'id', hidden: true },
      { key: 'sku', viewName: 'SKU' },
      { key: 'nome', viewName: 'Nome' },
      { key: 'preco', viewName: 'Preço' },
      { key: 'createdAt', viewName: 'Criado em' }
    ],
    data: []
  });

  public loadingData = true;

  constructor(
    private readonly produtoService: ProdutoService,
    private readonly router: Router,
    private readonly datePipe: DatePipe,
    private readonly promptService: PromptService,
    private readonly floatToDecimalPipe: FloatToDecimalPipe
  ) { }

  public ngOnInit(): void {
    this._getProdutos();
  }

  private _getProdutos() {
    this.loadingData = true;
    this.tableData.data = [];
    this.produtoService.getProdutoes()
      .pipe(
        finalize(() => this.loadingData = false)
      )
      .subscribe(produtoes => produtoes.forEach(produto => this._constructTableItem(produto)));
  }

  private _constructTableItem(produto: Produto) {
    this.tableData.data.push({
      ...produto,
      ...{
        preco: `R$ ${this.floatToDecimalPipe.transform(produto.preco, 2)}`,
        createdAt: this.datePipe.transform(produto.createdAt, 'dd/MM/yyyy')
      }
    });
  }

  public goToProdutoData(produtoOnTable: { id: string }) {
    this.router.navigate([RoutesEnum.PRODUTO, produtoOnTable.id]);
  }

  public goToNewProduto() {
    this.router.navigate([RoutesEnum.PRODUTO, RoutesEnum.CADASTRAR]);
  }

  public editData(produtoId: string): void {
    console.log(produtoId);
    this.router.navigate([RoutesEnum.PRODUTO, produtoId, RoutesEnum.EDITAR]);
  }

  public deleteData(produtoId: string, produtoNome: string): void {
    this.promptService.confirm(`Deseja mesmo excluir o Produto ${produtoNome}?`).subscribe(res => {
      if (res) {
        this.produtoService.deleteProduto(produtoId).subscribe(_ => {
          this.promptService.alert('Produto excluído com sucesso!').subscribe(_ => this._getProdutos());
        });
      }
    });
  }

}
