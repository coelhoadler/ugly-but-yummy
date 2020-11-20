import { Component, Input, OnInit } from '@angular/core';
import { TabelaDataModel } from './models/tabela-data.model';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  @Input() public data: TabelaDataModel;

  public dataSource: Object[];
  public displayedColumns: string[];
  public displayedColumnsViews: Object = {};

  public ngOnInit(): void {
    this.initTable();
  }

  public initTable(): void {
    this.dataSource = this.data.data;
    this.displayedColumns = this.data.columns.map(c => c.key);
    this.data.columns.forEach(c => {
      this.displayedColumnsViews[c.key] = c.viewName;
    })
  }

}
