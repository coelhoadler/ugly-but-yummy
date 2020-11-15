import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CadastroCampoModel } from '@components/cadastro/models/cadastro-campo.model';
import { CadastroInputType } from '@components/cadastro/types/cadastro-input.type';
import { RoutesEnum } from '@enums/routes.enum';

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrls: ['./consumidor.component.scss']
})
export class ConsumidorComponent implements OnInit {

  public action: CadastroInputType;

  public mockData = {
    name: 'Kelvin Marques',
    email: 'kelvin.marques@gmail.com',
    phone: '(11) 98433 3790',
    overAge: true,
    gender: 'masculino',
    job: 'pedreiro-digital',
    comments: 'Meus comentários.'
  };

  public fields = [
    new CadastroCampoModel({ key: 'name', label: 'Nome', type: 'text', value: '', columSize: 1, required: true }),
    new CadastroCampoModel({ key: 'email', label: 'Email', type: 'email', value: '', columSize: 1, required: true }),
    new CadastroCampoModel({
      key: 'phone', label: 'Telefone', type: 'tel',
      mask: 'phoneOrCel', value: '', columSize: 1, required: false
    }),
    new CadastroCampoModel({
      key: 'overAge', label: 'Maior de idade', type: 'checkbox', value: false,
      viewValue: '', columSize: 1, required: false
    }),
    new CadastroCampoModel({
      key: 'gender', label: 'Gênero', type: 'radio', options: [{ value: 'masculino', viewValue: 'Masculino' },
      { value: 'feminino', viewValue: 'Feminino' }], value: '',
      viewValue: '', columSize: 1, required: true
    }),
    new CadastroCampoModel({
      key: 'job', label: 'Profissão', type: 'select', options: [{ value: 'estudante', viewValue: 'Estudante' },
      { value: 'pedreiro-digital', viewValue: 'Pedreiro Digital' }], value: '',
      viewValue: '', columSize: 1, required: true
    }),
    new CadastroCampoModel({ key: 'comments', label: 'Comentários', type: 'textarea', value: '', columSize: 4, required: false })
  ];

  // Dados para teste
  public dataConsumidor: CadastroCampoModel[];

  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.identifyActionByRoute();
  }

  public identifyActionByRoute(): void {
    this.activatedRoute.params.subscribe(params => {
      const url = this.activatedRoute.snapshot.url;
      if (params.id) {
        if (url[1] && url[1].path === RoutesEnum.EDITAR) {
          this.action = 'update';
          this.bindData(this.mockData);
        } else {
          this.action = 'read';
          this.bindData(this.mockData, {setViewValues: true});
        }
      } else if (url[0] && url[0].path === RoutesEnum.CADASTRAR) {
        this.action = 'create';
      } else {
        this.action = null;
      }
    });
  }

  public bindData(data, options?: {setViewValues: boolean}): void {
    this.dataConsumidor = this.fields.map(field => {
      field.value = data[field.key] || field.value;
      console.log(field.key, data[field.key]);
      if(options.setViewValues) {
        if (field.key === 'overAge') {
          field.viewValue = field.value ? 'Sim' : 'Não';
        } else if (field.key === 'gender' || field.key === 'job') {
          field.viewValue = field.options.find(o => o.value === field.value).viewValue;
        } else {
          field.viewValue = field.value;
        }
      }
      return field;
    });
  }

}
