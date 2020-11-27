Feature: CRUD Pedido

Scenario Outline: Criar um novo Pedido
Given que eu esteja conectado ao micro-serviço como usuario <usuario>
When eu escolher um produto <sku> 
Then quero que o sistema crie um Pedido

Examples:
    | usuario | sku |
    | michel  | PS5 |

Scenario Outline: Verificar um Pedido
Given que o usuario <usuario> tenha ao menos um pedido
When o usuario requisitar os pedidos
Then quero que os dados retornem para o usuario

Examples:
    | usuario |
    | michel  |

Scenario Outline: Cancelar um Pedido 
Given que o usuario <usuario> tenha realizado um pedido
When o usuário solicitar o cancelamento do pedido <pedido>
Then o pedido deve ser cancelado

Examples:
    | usuario | pedido |
    | michel  | PS5    |