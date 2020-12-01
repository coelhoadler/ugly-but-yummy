type Columns = { key: string, viewName: string, hidden?: boolean};

export class TabelaDataModel {
  public columns: Columns[];
  public data: Object[];

  constructor(content?: { columns?: Columns[], data?: Object[] }) {
    this.columns = content.columns;
    this.data = content.data;
  }

}
