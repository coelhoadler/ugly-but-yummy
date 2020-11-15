export class CadastroOptionsModel {
  private _saveLabel: string;
  private _deteleLabel: string;
  private _updateLabel: string;

  constructor(options?: { saveLabel?: string, deteleLabel?: string, updateLabel?: string }) {

    const defaultOptions = {
      saveLabel: 'Salvar',
      deteleLabel: 'Excluir',
      updateLabel: 'Editar'
    };

    const _options = { ...defaultOptions, ...options };

    this._saveLabel = _options.saveLabel;
    this._deteleLabel = _options.deteleLabel;
    this._updateLabel = _options.updateLabel;

  }

  public get saveLabel(): string { return this._saveLabel; }
  public set saveLabel(value: string) { this._saveLabel = value; }

  public get deteleLabel(): string { return this._deteleLabel; }
  public set deteleLabel(value: string) { this._deteleLabel = value; }

  public get updateLabel(): string { return this._updateLabel; }
  public set updateLabel(value: string) { this._updateLabel = value; }


}

