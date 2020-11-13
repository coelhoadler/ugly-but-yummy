import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldType } from '@cTypes/field.type';
import { CadastroCampoModel } from './models/cadastro-campo.model';
import { CadastroInputType } from './types/cadastro-input.type';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  @Input() public data: CadastroCampoModel[];
  @Input() public title: string;
  @Input() public action: CadastroInputType;
  @Output() public onSave: EventEmitter<Object> = new EventEmitter();
  @Output() public onDelete: EventEmitter<void> = new EventEmitter();
  @Output() public onEdit: EventEmitter<void> = new EventEmitter();

  public form: FormGroup;

  public ngOnInit(): void {
    this.constructForm();
  }

  public constructForm(): void {
    const controls = {};

    this.data.forEach(item => {
      const control = new FormControl(item.value);
      if (item.required) {
        control.setValidators(Validators.required);
        if (item.type === 'email') {
          control.setValidators(Validators.email);
        }
      }
      controls[item.key] = control;
    });

    this.form = new FormGroup(controls);
  }

  public emitSaveData(data: Object): void {
    this.onSave.emit(data);
  }

  public emitDeleteData(): void {
    this.onDelete.emit();
  }

  public emitEditData(): void {
    this.onEdit.emit();
  }

  public showEditButton(): boolean {
    return this.action === 'read';
  }

  public showSaveButton(): boolean {
    return this.action === 'create' || this.action === 'update';
  }

  public showDeleteButton(): boolean {
    return this.action === 'read' || this.action === 'update';
  }

  public setBSColumn(size: number): number {
    return size * 3;
  }

  public isTypeForInput(type: FieldType): boolean {
    return type === 'color' || type === 'date' || type === 'email' ||
      type === 'number' || type === 'tel' || type === 'text' || type === 'password';
  }

  public isTypeForCheckbox(type: FieldType): boolean {
    return type === 'checkbox';
  }

  public isTypeForSelect(type: FieldType): boolean {
    return type === 'select';
  }

  public isTypeForRadio(type: FieldType): boolean {
    return type === 'radio';
  }

  public isTypeForTextarea(type: FieldType): boolean {
    return type === 'textarea';
  }

  public isTypeForMatFormField(type: FieldType): boolean {
    return this.isTypeForInput(type) || this.isTypeForSelect(type) || this.isTypeForTextarea(type);
  }

  public setItemPlaceholder(type: FieldType): string {
    if (type === 'date') {
      return 'dd/mm/aaaa';
    } else if (type === 'tel') {
      return ('(XX) XXXX XXXX ou (XX) XXXXX XXXX');
    } else if (type === 'email') {
      return ('seunome@dominio.com.br');
    }

    return '';
  }

  public submitForm(): void {

    if (this.form.invalid) {
      return;
    }

    this.emitSaveData(this.form.value);
  }

}
