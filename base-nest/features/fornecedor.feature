Feature: CRUD Fornecedor

Scenario Outline: Criar um novo fornecedor
Given que eu esteja conectado ao micro-serviço
When eu entrar com o <nome> de um fornecedor
Then quero que o sistema crie um novo fornecedor

Examples:
    | nome      |
    | _by_test  |


Scenario Outline: Seleciona um fornecedor cadastrado
Given que eu esteja conectado ao micro-serviço
When eu digite o <nome> de um fornecedor existente
Then quero fornecedor exista

Examples:
    | nome      |
    | _by_test  |

# UPDATE


# DELETE