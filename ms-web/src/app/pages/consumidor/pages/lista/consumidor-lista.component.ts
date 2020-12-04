import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesEnum } from '@appenums/routes.enum';
import { PromptService } from '@components/prompt/prompt.service';
import { TabelaDataModel } from '@components/tabela/models/tabela-data.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { finalize } from 'rxjs/operators';
import { ConsumidorService } from './../../consumidor.service';
import { Consumidor } from './../../interfaces/consumidor.interface';

@Component({
  selector: 'app-consumidor-lista',
  templateUrl: './consumidor-lista.component.html'
})
export class ConsumidorListaComponent implements OnInit {

  public faPlus = faPlus;

  @Input() public tableData: TabelaDataModel = new TabelaDataModel({
    columns: [
      { key: '_id', viewName: 'id', hidden: true },
      { key: 'uid', viewName: 'Uuid' },
      { key: 'nome', viewName: 'Nome' },
      { key: 'email', viewName: 'E-mail' },
      { key: 'uf', viewName: 'UF' }
    ],
    data: []
  });

  public loadingData = true;

  constructor(
    private readonly consumidorService: ConsumidorService,
    private readonly promptService: PromptService,
    private readonly router: Router
  ) { }

  public ngOnInit(): void {
    this._getConsumidores();
  }

  private _getConsumidores() {
    this.loadingData = true;
    this.tableData.data = [];
    this.consumidorService.getConsumidores()
      .pipe(
        finalize(() => this.loadingData = false)
      )
      .subscribe(consumidores => consumidores.forEach(consumidor => this._constructTableItem(consumidor)));
  }

  private _constructTableItem(consumidor: Consumidor) {
    this.tableData.data.push(
      { ...consumidor, uf: consumidor.endereco.uf }
    );
  }

  public goToConsumerData(consumerOnTable: { _id: string }) {
    this.router.navigate([RoutesEnum.CONSUMIDOR, consumerOnTable._id]);
  }

  public goToNewConsumer() {
    this.router.navigate([RoutesEnum.CONSUMIDOR, RoutesEnum.CADASTRAR]);
  }

  public editData(consumidorId: string): void {
    this.router.navigate([RoutesEnum.CONSUMIDOR, consumidorId, RoutesEnum.EDITAR]);
  }

  public deleteData(consumidorId: string, consumidorNome: string): void {
    this.promptService.confirm(`Deseja mesmo excluir o consumidor ${consumidorNome}?`).subscribe(res => {
      if (res) {
        this.consumidorService.deleteConsumidor(consumidorId).subscribe(_ => {
          this.promptService.alert('Consumidor excluído com sucesso!').subscribe(_ => this._getConsumidores());
        });
      }
    });
  }

}
