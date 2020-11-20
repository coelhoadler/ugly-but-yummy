import { Component, Input, OnInit } from '@angular/core';
import { TabelaDataModel } from '@components/tabela/models/tabela-data.model';

@Component({
  selector: 'app-consumidor-lista',
  templateUrl: './consumidor-lista.component.html',
  styleUrls: ['./consumidor-lista.component.scss']
})
export class ConsumidorListaComponent implements OnInit {

  @Input() public tableData: TabelaDataModel = new TabelaDataModel({
    columns: [
      {key: 'nome', viewName: 'Nome'}
    ],
    data: [
      {nome: 'Kelvin Marques'}
    ]
  });

  constructor() { }

  ngOnInit(): void {
  }

}
