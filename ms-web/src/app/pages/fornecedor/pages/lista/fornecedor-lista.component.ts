import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromptService } from '@appcomponents/prompt/prompt.service';
import { RoutesEnum } from '@appenums/routes.enum';
import { FornecedorService } from '@apppages/fornecedor/fornecedor.service';
import { Fornecedor } from '@apppages/fornecedor/interfaces/fornecedor.interface';
import { TabelaDataModel } from '@components/tabela/models/tabela-data.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-fornecedor-lista',
  templateUrl: './fornecedor-lista.component.html'
})
export class FornecedorListaComponent implements OnInit {

  public faPlus = faPlus;

  @Input() public tableData: TabelaDataModel = new TabelaDataModel({
    columns: [
      {key: '_id', viewName: 'id', hidden: true},
      {key: 'uid', viewName: 'Uuid'},
      {key: 'nome', viewName: 'Nome'},
      {key: 'email', viewName: 'E-mail'},
      {key: 'uf', viewName: 'UF'}
    ],
    data: []
  });

  public loadingData = true;

  constructor(
    private readonly fornecedorService: FornecedorService,
    private readonly promptService: PromptService,
    private readonly router: Router
  ) { }

  public ngOnInit(): void {
    this._getFornecedores();
  }

  private _getFornecedores() {
    this.loadingData = true;
    this.tableData.data = [];
    this.fornecedorService.getFornecedores()
      .pipe(
        finalize(() => this.loadingData = false)
      )
      .subscribe(fornecedores => fornecedores.forEach(fornecedor => this._constructTableItem(fornecedor)));
  }

  private _constructTableItem(fornecedor: Fornecedor){
    this.tableData.data.push(
      {...fornecedor, uf: fornecedor.endereco.uf}
    );
  }

  public goToFornecedorData(fornecedorOnTable: {_id: string}) {
    this.router.navigate([RoutesEnum.FORNECEDOR, fornecedorOnTable._id]);
  }

  public goToNewFornecedor() {
    this.router.navigate([RoutesEnum.FORNECEDOR, RoutesEnum.CADASTRAR]);
  }

  public editData(fornecedorId: string): void {
    this.router.navigate([RoutesEnum.FORNECEDOR, fornecedorId, RoutesEnum.EDITAR]);
  }

  public deleteData(fornecedorId: string, fornecedorNome: string): void {
    this.promptService.confirm(`Deseja mesmo excluir o Fornecedor ${fornecedorNome}?`).subscribe(res => {
      if (res) {
        this.fornecedorService.deleteFornecedor(fornecedorId).subscribe(_ => {
          this.promptService.alert('Fornecedor excluído com sucesso!').subscribe(_ => this._getFornecedores());
        });
      }
    });
  }

}
