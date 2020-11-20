type Columns = { key: string, viewName: string };

export class TabelaDataModel {
  private _columns: Columns[];
  private _data: Object[];

  constructor(content: { columns: Columns[], data: Object[] }) {
    this._columns = content.columns;
    this._data = content.data;
  }

  public get columns(): Columns[] { return this._columns; }
  public set columns(value: Columns[]) { this._columns = value; }

  public get data(): Object[] { return this._data; }
  public set data(value: Object[]) { this._data = value; }

}