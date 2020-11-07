Feature: CRUD Fornecedor

# CREATE
Scenario Outline: Criar um novo fornecedor
Given que eu esteja conectado ao micro-serviço
When eu entrar com o <nome> de um fornecedor
Then quero que o sistema crie um novo fornecedor

Examples:
    | nome      |
    | _by_test  |

# SELECT
Scenario Outline: Seleciona um fornecedor que foi cadastrado
Given que eu esteja conectado ao micro-serviço
When eu digite o <nome> de um fornecedor existente
Then quero fornecedor exista

Examples:
    | nome      |
    | _by_test  |

# UPDATE
Scenario Outline: Edita um fornecedor que foi cadastrado
Given que eu esteja conectado ao micro-serviço
When eu digite o <nome> para buscar o fornecedor cadastrado
And ao encontrar, altere o nome para <novoNome>
Then tenha sucesso na alteração

Examples:
    | nome      | novoNome        |
    | _by_test  | _by_test_edited |

# DELETE
Scenario Outline: Deleta um fornecedor que foi cadastrado
Given que eu esteja conectado ao micro-serviço
When eu digite o <nome> de um fornecedor existente
Then quero deletar o fornecedor

Examples:
    | nome      |
    | _by_test  |