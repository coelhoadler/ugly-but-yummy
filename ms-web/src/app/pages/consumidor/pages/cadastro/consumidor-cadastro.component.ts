import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PromptService } from '@appcomponents/prompt/prompt.service';
import { CadastroInputType } from '@cTypes/cadastro-input.type';
import { RoutesEnum } from '@enums/routes.enum';
import { faArrowLeft, faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ConsumidorService } from '@pages/consumidor/consumidor.service';
import { Consumidor } from '@pages/consumidor/interfaces/consumidor.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consumidor-cadastro',
  templateUrl: './consumidor-cadastro.component.html'
})
export class ConsumidorCadastroComponent implements OnInit {

  public faTrash = faTrash;
  public faEdit = faEdit;
  public faCheck = faCheck;
  public faArrowLeft = faArrowLeft;

  public action: CadastroInputType;

  public consumidorId: string;
  public dataConsumidor: Consumidor;
  public formConsumidor: FormGroup;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly promptService: PromptService,
    private readonly consumidorService: ConsumidorService,
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
          this.formConsumidor.disable();
        }
        this.consumidorId = params.id;
        this.consumidorService.getConsumidor(params.id).subscribe(consumidor => {
          this.dataConsumidor = consumidor;
          this.formConsumidor.patchValue(consumidor);
        });
      } else if (url[0] && url[0].path === RoutesEnum.CADASTRAR) {
        this.action = 'create';
      }
    });
  }

  private _constructForm() {
    this.formConsumidor = this.formBuilder.group({
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
    this.router.navigate([RoutesEnum.CONSUMIDOR]);
  }

  public editData(): void {
    this.router.navigate([RoutesEnum.CONSUMIDOR, this.consumidorId, RoutesEnum.EDITAR]);
  }

  public deleteData(): void {
    this.promptService.confirm(`Deseja mesmo excluir o consumidor ${this.dataConsumidor.nome}?`).subscribe(res => {
      if (res) {
        this.consumidorService.deleteConsumidor(this.consumidorId).subscribe(_ => {
          this.promptService.alert('Consumidor excluído com sucesso!').subscribe(_ => this.backToList());
        });
      }
    });
  }

  public submitData() {
    if (this.formConsumidor.invalid) {
      return;
    } else {
      this.consumidorService.postConsumidor(this.formConsumidor.value);
    }

    const getRightRequest = (data: any): Observable<Consumidor> => {
      if (this.action === 'create') {
        return this.consumidorService.postConsumidor(data);
      } else {
        return this.consumidorService.updateConsumidor(this.consumidorId, data);
      }
    };

    getRightRequest(this.formConsumidor.value).subscribe(_ => {
      this.promptService.alert(`Consumidor ${this.action === 'update' ? 'editado' : 'cadastrado'} com sucesso!`)
        .subscribe(_ => this.backToList());
    });

  }

  public actionText(): string {
    if (this.action === 'create') {
      return 'Novo cadastro';
    } else if (this.action === 'read') {
      return `Ficha cadastral ${this.dataConsumidor?.uid}`;
    } else {
      return `Edição do cadastro ${this.dataConsumidor?.uid}`;
    }
  }

}
