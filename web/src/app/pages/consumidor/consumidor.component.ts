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

  // Dados para teste
  public dataConsumidor: CadastroCampoModel[] = [
    new CadastroCampoModel({
      key: 'nome',
      label: 'Nome',
      type: 'text',
      value: '',
      columSize: 1,
      required: true
    }),
    new CadastroCampoModel({
      key: 'email',
      label: 'Email',
      type: 'email',
      value: '',
      columSize: 1,
      required: true
    }),
    new CadastroCampoModel({
      key: 'tel',
      label: 'Telefone',
      type: 'tel',
      value: '',
      columSize: 1,
      required: false
    }),
    new CadastroCampoModel({
      key: 'overAge',
      label: 'Maior de idade',
      type: 'checkbox',
      value: true,
      columSize: 1,
      required: false
    }),
    new CadastroCampoModel({
      key: 'gender',
      label: 'Gênero',
      type: 'radio',
      options: [
        {
          value: 'masculino',
          viewValue: 'Masculino'
        },
        {
          value: 'feminino',
          viewValue: 'Feminino'
        }
      ],
      value: null,
      columSize: 1,
      required: true
    }),
    new CadastroCampoModel({
      key: 'job',
      label: 'Profissão',
      type: 'select',
      options: [
        {
          value: 'estudante',
          viewValue: 'Estudante'
        },
        {
          value: 'pedreiro-digital',
          viewValue: 'Pedreiro Digital'
        }
      ],
      value: null,
      columSize: 1,
      required: true
    }),
    new CadastroCampoModel({
      key: 'comments',
      label: 'Comentários',
      type: 'textarea',
      value: '',
      columSize: 4,
      required: false
    })
  ];

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
        } else {
          this.action = 'read';
        }
      } else if (url[0] && url[0].path === RoutesEnum.CADASTRAR) {
        this.action = 'create';
      } else {
        this.action = null;
      }
    });
  }

}
