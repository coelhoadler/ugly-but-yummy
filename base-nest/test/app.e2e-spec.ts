import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

import { defineFeature, loadFeature } from 'jest-cucumber';

import { FornecedorService } from '../src/fornecedor/fornecedor.service';
import { FornecedorDto } from '../src/fornecedor/fornecedor.dto';
import { FornecedorModule } from '../src/fornecedor/fornecedorModule';

const feature = loadFeature('./features/fornecedor.feature');

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, FornecedorModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
});


defineFeature(feature, test => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, FornecedorModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  let fornecedor = new FornecedorDto();
  fornecedor.sobrenome = "CREATED_BY_TESTS"

  // CREATE
  test('Criar um novo fornecedor', ({ given, when, then }) => {
    given('que eu esteja conectado ao micro-serviço', () => {

    });

    when(/^eu entrar com o (.*) de um fornecedor$/, (nome) => {
      fornecedor.name = nome;
    });

    then('quero que o sistema crie um novo fornecedor', () => {
      return request(app.getHttpServer())
        .post('/').send(fornecedor)
        .expect(201);
    });
  });

  // SELECT
  test('Criar um novo fornecedor', ({ given, when, then }) => {
    fornecedor = new FornecedorDto();
    
    given('que eu esteja conectado ao micro-serviço', () => {

    });

    when(/^eu entrar com o (.*) de um fornecedor$/, (arg0) => {
      fornecedor.name = arg0;
    });

    then('quero que o sistema crie um novo fornecedor', () => {
      return request(app.getHttpServer())
        .get('/').query(fornecedor.name)
        .expect(201);
    });
  });


});

