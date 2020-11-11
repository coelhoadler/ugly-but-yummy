import { Component, OnInit } from '@angular/core';
import { CadastroCampoModel } from '@appcomponents/cadastro/models/cadastro-campo.model';

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrls: ['./consumidor.component.scss']
})
export class ConsumidorComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
