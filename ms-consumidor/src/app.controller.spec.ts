import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

import { defineFeature, loadFeature } from 'jest-cucumber';
import { ConsumidorService } from './consumidor/consumidor.service';
import { ConsumidorDto } from './consumidor/consumidor.dto';
import { MongooseModule } from '@nestjs/mongoose';
import { Consumidor, ConsumidorSchema } from './consumidor/consumidor.schema';
import { ObjectID } from 'mongodb';

const feature = loadFeature('./features/consumidor.feature');
const prepareBefore = async () => {
  const app: TestingModule = await Test.createTestingModule({
    imports: [
      MongooseModule.forRoot("mongodb+srv://w1gA77GNyv0gBlum:uglybutyummy123@cluster0.sdiq5.mongodb.net/uglybutyummy-dbtest?retryWrites=true&w=majority", {
        connectionName: 'consumidor',
        useNewUrlParser: true,
        useUnifiedTopology: true
      }),
      MongooseModule.forFeature([{ name: Consumidor.name, schema: ConsumidorSchema }], 'consumidor'),
    ],
    controllers: [AppController],
    providers: [ConsumidorService],
  }).compile();

  return await app.get<AppController>(AppController);
}

describe('Micro Serviço - Consumidor', () => {
  let appController: AppController;
  beforeEach(async () => {
    appController = await prepareBefore();
  });

  describe('AppController', () => {
    it('Preparar controlador da aplicação', () => {
      expect(appController).toBeDefined();
    });
  });

  defineFeature(feature, test => {

    let appController: AppController;
    beforeEach(async () => {
      appController = await prepareBefore();
    });

    let consumidorData: ConsumidorDto = {
      _id: new ObjectID().toHexString(),
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
      email: "mail@mail.com",
      createdAt: new Date()
    };

    test('Criar um novo Consumidor', ({ given, when, then }) => {
      given('que eu esteja conectado ao micro-serviço', async () => { });

      when(/^eu entrar com o (.*) de um Consumidor$/, async (nome) => {
        consumidorData.nome = nome;
      });

      then('quero que o sistema crie um novo Consumidor', async () => {
        const consumidor = await appController.create(consumidorData);
        expect(consumidor.uid).toBeDefined();
      });
    });


    test('Seleciona um Consumidor que foi cadastrado', ({ given, when, then }) => {
      let nomeTeste = '';

      given('que eu tenha consumidores cadastrados', async () => {

      });

      when(/^eu digitar o (.*) de um Consumidor existente$/, async (nome) => {
        nomeTeste = nome;
      });

      then('quero que o Consumidor exista', async () => {
        const consumidor = await appController.indexBy('nome', nomeTeste);
        expect(consumidor).toBeDefined();
        expect(consumidor.length > 0).toBeTruthy();
      });
    });

    test('Edita um Consumidor que foi cadastrado', ({ given, when, and, then }) => {
      let consumidorCadastrado: ConsumidorDto[];
      let novoNomeTeste;

      given('que eu tenha consumidores cadastrados', () => {

      });

      when(/^eu digitar o (.*), buscar o consumidor cadastrado$/, async (nome) => {
        consumidorCadastrado = await appController.indexBy('nome', nome);
      });

      and(/^ao encontrar, altere o nome para (.*)$/, async (novoNome) => {
        novoNomeTeste = novoNome;
        consumidorCadastrado.forEach(async (_) => {
          _.nome = novoNomeTeste;
          await appController.update(_._id, _);
        });
      });

      then('tenha sucesso na alteração', async () => {
        const novoConsumidor = await appController.indexBy('nome', novoNomeTeste);
        expect(novoConsumidor.length > 0).toBeTruthy();
      });
    });

    test('Deleta um Consumidor que foi cadastrado', ({ given, when, then }) => {
      let nomeTeste = '';

      given('que eu tenha consumidores cadastrados', () => {

      });

      when(/^eu digitar o (.*) de um consumidor existente$/, (nome) => {
        nomeTeste = nome;
      });

      then('quero deletar o Consumidor', async () => {
        const consumidor = await appController.indexBy('nome', nomeTeste);
        consumidor.forEach(async (_) => {          
          expect(await appController.delete(_._id)).toBeGreaterThan(0);
        });
      });
    });
  });

});

