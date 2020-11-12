Feature: CRUD Fornecedor

# CREATE
Scenario Outline: Criar um novo Fornecedor
Given que eu esteja conectado ao micro-serviço
When eu entrar com o <nome> de um Fornecedor
Then quero que o sistema crie um novo Fornecedor

Examples:
    | nome      |
    | _by_test  |

# SELECT
Scenario Outline: Seleciona um Fornecedor que foi cadastrado
Given que eu tenha Fornecedores cadastrados
When eu digitar o <nome> de um Fornecedor existente
Then quero que o Fornecedor exista

Examples:
    | nome      |
    | _by_test  |

# UPDATE
Scenario Outline: Edita um Fornecedor que foi cadastrado
Given que eu tenha fornecedores cadastrados
When eu digitar o <nome>, buscar o fornecedor cadastrado
And ao encontrar, altere o nome para <novoNome>
Then tenha sucesso na alteração

Examples:
    | nome      | novoNome        |
    | _by_test  | _by_test_edited |

# DELETE
Scenario Outline: Deleta um Fornecedor que foi cadastrado
Given que eu tenha fornecedores cadastrados
When eu digitar o <nome> de um fornecedor existente
Then quero deletar o Fornecedor

Examples:
    | nome             |
    | _by_test_edited  |