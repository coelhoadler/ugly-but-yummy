import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { PedidoService } from './pedido/pedido.service';
import { PedidoDto } from './pedido/pedido.dto';
import { PedidoBuilder } from './pedido/pedido.builder';
import { ConnectionService } from './config/conection.service';
import UniqueGenerator from './utils/unique.generator';
import { exception } from 'console';

const feature = loadFeature('./features/pedido.feature');
const prepareBefore = async () => {
  const app: TestingModule = await Test.createTestingModule({
    imports: [
      ConnectionService.Tests.forRoot(),
      ConnectionService.Tests.forFeature(),
    ],
    controllers: [AppController],
    providers: [PedidoService],
  }).compile();

  return await app.get<AppController>(AppController);
}

describe('Micro Serviço - Pedido', () => {

  let appController: AppController;

  beforeEach(async () => {
    appController = await prepareBefore();
  });

  let pedidoBuilder = new PedidoBuilder();

  pedidoBuilder
    .setEndereco('Rua do padre tito, 666')
    .setTotalPedido(99.99)
    .setValorFrete(9.99)
    .setDescricao('ABERTO');

  describe('AppController', () => {
    it('Preparar controlador da aplicação', () => {
      expect(appController).toBeDefined();
    });
  });

  defineFeature(feature, test => {
    
    test('Criar um novo Pedido', ({ given, when, then }) => {
      given(/^que eu esteja conectado ao micro-serviço como usuario (.*)$/, async (arg0) => {
        pedidoBuilder.setConsumidorId(arg0);
      });

      when(/^eu escolher um produto (.*)$/, async (arg0) => {
        pedidoBuilder.setProdutosIds([arg0]);
      });

      then('quero que o sistema crie um Pedido', async () => {
        const created = await appController.create(pedidoBuilder.build());
        expect(created._id).toBeDefined();
      });
    });

    test('Verificar um Pedido', async ({ given, when, then }) => {
      let pedidos:PedidoDto[];
      given(/^que o usuario (.*) tenha ao menos um pedido$/, async (arg0) => {
        pedidoBuilder.setConsumidorId(arg0);
      });

      when('o usuario requisitar os pedidos', async () => {
        pedidos = await appController.indexBy('consumidorId', pedidoBuilder.build().consumidorId);
      });

      then('quero que os dados retornem para o usuario', async () => {
        expect(pedidos).toBeDefined();
        expect(pedidos.length).toBeGreaterThan(0);
      });
    });

    test('Cancelar um Pedido', ({ given, when, then }) => {
      given(/^que o usuario (.*) tenha realizado um pedido$/, async (arg0) => {
        pedidoBuilder.setConsumidorId(arg0);
      });

      when(/^o usuário solicitar o cancelamento do pedido (.*)$/, async (arg0) => {
        pedidoBuilder.setProdutosIds(arg0);
      });

      then('o pedido deve ser cancelado', async () => {
        throw exception('implementar')
      });
    });

  });

});

