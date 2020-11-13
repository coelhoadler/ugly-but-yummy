
import { FieldType } from '@cTypes/field.type';

type ColumSize = 1 | 2 | 3 | 4;

type Options = {value: any, viewValue: string}[];

export class CadastroCampoModel {
  private readonly _key: string;
  private _value: any;
  private _label: string;
  private _type: FieldType;
  private _options: Options;
  private _required: boolean;
  private _columSize: ColumSize;
  private _hiddenField: boolean;

  constructor(data: {
    key: string;
    value: any,
    label: string,
    type: FieldType,
    options?: Options,
    required?: boolean,
    columSize?: ColumSize,
    hiddenField?: boolean
  }) {

    const defaultValues = {
      required: false,
      columSize: 1 as ColumSize,
      hiddenField: false
    };

    this._checkValueIntegrity(data.key, data.value, data.type, data.options || []);

    const preparedData = {...defaultValues, ...data};

    this._key = preparedData.key;
    this._value = preparedData.value;
    this._label = preparedData.label;
    this._type = preparedData.type;
    this._options = preparedData.options || [];
    this._required = preparedData.required;
    this._columSize = preparedData.columSize;
    this._hiddenField = preparedData.hiddenField;
  }

  get key(): string { return this._key; }

  get value(): any { return this._value; }
  set value(value: any) { this._value = value; }

  get label(): string { return this._label; }
  set label(value: string) { this._label = value; }

  get type(): FieldType { return this._type; }
  set type(value: FieldType) { this._type = value; }

  get options(): Options { return this._options; }
  set options(value: Options) { this._options = value; }

  get required(): boolean { return this._required; }
  set required(value: boolean) { this._required = value; }

  get columSize(): ColumSize { return this._columSize; }
  set columSize(value: ColumSize) { this._columSize = value; }

  get hiddenField(): boolean { return this._hiddenField; }
  set hiddenField(value: boolean) { this._hiddenField = value; }

  // tslint:disable-next-line: cyclomatic-complexity
  private _checkValueIntegrity(key: string, value: any, type: FieldType, options: any[]) {

    const messageForDefaultFields = valueType => {
      return `O valor (value) do item de chave (key) "${key}" deve ser ${valueType} por ser do tipo "type: ${type}". O valor atual é ${value}.`;
    };

    const messageForOptionsField = () => {
      return `O campo "${key}" precisa ter uma lista de valores na propriedade options com pelo menos duas opções, por ser do tipo "type: ${type}".`;
    };

    if ((type === 'radio' || type === 'select') && options.length < 2) {
      throw new Error(messageForOptionsField());
    }
    else if (type === 'checkbox' && typeof (value) !== 'boolean') {
      throw new Error(messageForDefaultFields('boolean'));
    }
    else if (type === 'number' && typeof (value) !== 'number') {
      throw new Error(messageForDefaultFields('number'));
    } else if ((type === 'email' || type === 'tel' || type === 'text' || type === 'password' ||
    type === 'textarea' || type === 'color' || type === 'date') && typeof (value) !== 'string') {
    throw new Error(messageForDefaultFields('string'));
  }
  }

}
