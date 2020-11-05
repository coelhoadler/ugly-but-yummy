import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { defineFeature, loadFeature } from 'jest-cucumber';
import { ConsumidorService } from './services/consumidor.service';
import { ConnectionService } from './config/conection.service';

const feature = loadFeature('./features/consumidor.feature');

// describe('AppController', () => {
//   let appController: AppController;

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [AppController],
//       providers: [AppService, ConnectionService, ConsumidorService],
//     }).compile();

//     appController = app.get<AppController>(AppController);
//   });

//   describe('Conexão DB', () => {


//   });
// });


defineFeature(feature, test => {

  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, ConnectionService, ConsumidorService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  test('Criar um novo consumidor', ({ given, when, then }) => {

    let consumidorData: any = {
      uid: "CREATED_BY_TEST_CASE",
      nome: null,
      doc: "102030",
      endereco: {
        cep: "09990000",
        rua: "Rua 1",
        numero: "25",
        complemento: "Apto 666",
        cidade: "Tito",
        uf: "SP"
      },
      telefone: "99999999",
      email: "mail@mail.com"
    };

    given('que eu esteja conectado ao micro-serviço', async () => {

    });

    when(/^eu entrar com o (.*) de um consumidor$/, async (nome) => {
      consumidorData.nome = nome;
    });

    then('quero que o sistema crie um novo consumidor', async () => {
      const consumidor = await appController.create(consumidorData);
      expect(consumidor.id).toBeDefined();
    });

  });
});