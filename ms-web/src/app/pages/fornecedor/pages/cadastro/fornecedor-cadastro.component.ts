import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '@apppages/fornecedor/interfaces/fornecedor.interface';
import { CadastroInputType } from '@cTypes/cadastro-input.type';
import { RoutesEnum } from '@enums/routes.enum';
import { faArrowLeft, faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FornecedorService } from '@pages/fornecedor/fornecedor.service';

@Component({
  selector: 'app-fornecedor-cadastro',
  templateUrl: './fornecedor-cadastro.component.html'
})
export class FornecedorCadastroComponent implements OnInit {

  public faTrash = faTrash;
  public faEdit = faEdit;
  public faCheck = faCheck;
  public faArrowLeft = faArrowLeft;

  public action: CadastroInputType;

  public fornecedorId: string;
  public dataFornecedor: Fornecedor;
  public formFornecedor: FormGroup;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly fornecedorService: FornecedorService,
    private readonly formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this._constructForm();
    this._identifyActionByRoute();
  }

  private _identifyActionByRoute(): void {
    this.activatedRoute.params.subscribe(params => {
      const url = this.activatedRoute.snapshot.url;
      if (params.id) {
        if (url[1] && url[1].path === RoutesEnum.EDITAR) {
          this.action = 'update';
        } else {
          this.action = 'read';
          this.formFornecedor.disable();
        }
        this.fornecedorId = params.id;
        this.fornecedorService.getFornecedor(params.id).subscribe(fornecedor => {
          this.dataFornecedor = fornecedor;
          this.formFornecedor.patchValue(fornecedor);
        });
      } else if (url[0] && url[0].path === RoutesEnum.CADASTRAR) {
        this.action = 'create';
      }
    });
  }

  private _constructForm() {
    this.formFornecedor = this.formBuilder.group({
      nome: ['', Validators.required],
      doc: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.email],
      endereco: this.formBuilder.group({
        cep: ['', Validators.required],
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: '',
        cidade: ['', Validators.required],
        uf: ['', Validators.required]
      }),
      dadosBancarios: this.formBuilder.group({
        ag: ['', Validators.required],
        cc: ['', Validators.required],
        nomeBanco: ['', Validators.required]
      })
    });
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

  public backToList(): void {
    this.router.navigate([RoutesEnum.FORNECEDOR]);
  }

  public editData(): void {
    this.router.navigate([RoutesEnum.FORNECEDOR, this.fornecedorId, RoutesEnum.EDITAR]);
  }

  public deleteData(): void {
    if (confirm(`Deseja mesmo excluir o fornecedor ${this.dataFornecedor.nome}?`)) {
      this.fornecedorService.deleteFornecedor(this.fornecedorId).subscribe(_ => {
        alert('Fornecedor excluído com sucesso!');
        this.backToList();
      });
    }
  }

  public submitData() {
    console.log('caindo aqui')
    if (this.formFornecedor.invalid) {
      return;
    } else {
      this.fornecedorService.postFornecedor(this.formFornecedor.value);
    }

    this.fornecedorService.postFornecedor(this.formFornecedor.value).subscribe(_ => {
      alert(`Fornecedor ${this.action === 'update' ? 'editado' : 'cadastrado'} com sucesso!`);
      this.backToList();
    });

  }

  public actionText(): string {
    if (this.action === 'create') {
      return 'Novo cadastro';
    } else if (this.action === 'read') {
      return `Ficha cadastral ${this.dataFornecedor.uid}`;
    } else {
      return `Edição do cadastro ${this.dataFornecedor.uid}`;
    }
  }

}
