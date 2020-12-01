import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TabelaDataModel } from './models/tabela-data.model';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnChanges {

  @Input() public data: TabelaDataModel;
  @Output() public onClickItem: EventEmitter<any> = new EventEmitter();
  @Output() public onDeleteItem: EventEmitter<any> = new EventEmitter();
  @Output() public onEditItem: EventEmitter<any> = new EventEmitter();

  public dataSource: Object[];
  public displayedColumns: string[];
  public displayedColumnsViews = {};

  public displayedColumnsinView: string[];

  public faTrash = faTrash;
  public faEdit = faEdit;

  public ngOnChanges(): void {
    this.initTable();
  }

  public initTable(): void {
    this.dataSource = this.data.data;
    this.displayedColumns = this.data.columns
    .filter(column => !column.hidden)
    .map(c => c.key);
    this.data.columns.forEach(c => {
      this.displayedColumnsViews[c.key] = c.viewName;
    });
    this.displayedColumnsinView = [...this.displayedColumns, 'actions'];
  }

  public clickItem(item: any):void {
    this.onClickItem.emit(item);
  }
  
  public deleteItem(item: any):void {
    this.onDeleteItem.emit(item);
  }

  public editItem(item: any):void {
    this.onEditItem.emit(item);
  }

}
