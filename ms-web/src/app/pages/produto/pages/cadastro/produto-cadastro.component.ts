import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PromptService } from '@appcomponents/prompt/prompt.service';
import { Produto } from '@apppages/produto/interfaces/produto.interface';
import { CadastroInputType } from '@cTypes/cadastro-input.type';
import { RoutesEnum } from '@enums/routes.enum';
import { faArrowLeft, faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProdutoService } from '@pages/produto/produto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html'
})
export class ProdutoCadastroComponent implements OnInit {

  public faTrash = faTrash;
  public faEdit = faEdit;
  public faCheck = faCheck;
  public faArrowLeft = faArrowLeft;

  public action: CadastroInputType;

  public produtoId: string;
  public dataProduto: Produto;
  public formProduto: FormGroup;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly produtoService: ProdutoService,
    private readonly promptService: PromptService,
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
          this.formProduto.disable();
        }
        this.produtoId = params.id;
        this.produtoService.getProduto(params.id).subscribe(produto => {
          this.dataProduto = produto;
          this.formProduto.patchValue(produto);
        });
      } else if (url[0] && url[0].path === RoutesEnum.CADASTRAR) {
        this.action = 'create';
      }
    });
  }

  private _constructForm() {
    this.formProduto = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      preco: ['', Validators.required],
      createdAt: ''
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
    this.router.navigate([RoutesEnum.PRODUTO]);
  }

  public editData(): void {
    this.router.navigate([RoutesEnum.PRODUTO, this.produtoId, RoutesEnum.EDITAR]);
  }

  public deleteData(): void {
    this.promptService.confirm(`Deseja mesmo excluir o produto ${this.dataProduto.nome}?`).subscribe(res => {
      if (res) {
        this.produtoService.deleteProduto(this.produtoId).subscribe(_ => {
          this.promptService.alert('Produto excluído com sucesso!').subscribe(_ => this.backToList());
        });
      }
    });
  }

  public submitData() {
    console.log(this.formProduto.value);
    if (this.formProduto.invalid) {
      return;
    }

    if (this.action === 'create') {
      this.formProduto.patchValue({ createdAt: new Date() });
    }

    const getRightRequest = (data: any): Observable<Produto> => {
      if (this.action === 'create') {
        return this.produtoService.postProduto(data);
      } else {
        return this.produtoService.updateProduto(this.produtoId, data);
      }
    };

    console.log(this.formProduto.value);

    getRightRequest(this.formProduto.value).subscribe(_ => {
      this.promptService.alert(`Produto ${this.action === 'update' ? 'editado' : 'cadastrado'} com sucesso!`)
        .subscribe(_ => this.backToList());
    });

  }

  public actionText(): string {
    if (this.action === 'create') {
      return 'Novo cadastro';
    } else if (this.action === 'read') {
      return `Ficha cadastral ${this.dataProduto?.sku}`;
    } else {
      return `Edição do cadastro ${this.dataProduto?.sku}`;
    }
  }

}
