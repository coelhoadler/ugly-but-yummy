Feature: CRUD Produto

# CREATE
Scenario Outline: Criar um novo Produto
Given que eu esteja conectado ao micro-serviço
When eu entrar com o <nome> de um Produto
Then quero que o sistema crie um novo Produto

Examples:
    | nome      |
    | _by_test  |

# SELECT
Scenario Outline: Seleciona um Produto que foi cadastrado
Given que eu tenha produtos cadastrados
When eu digitar o <nome> de um Produto existente
Then quero que o Produto exista

Examples:
    | nome      |
    | _by_test  |

# UPDATE
Scenario Outline: Edita um Produto que foi cadastrado
Given que eu tenha produtos cadastrados
When eu digitar o <nome>, buscar o produto cadastrado
And ao encontrar, altere o nome para <novoNome>
Then tenha sucesso na alteração

Examples:
    | nome      | novoNome        |
    | _by_test  | _by_test_edited |

# DELETE
Scenario Outline: Deleta um Produto que foi cadastrado
Given que eu tenha produtos cadastrados
When eu digitar o <nome> de um produto existente
Then quero deletar o Produto

Examples:
    | nome             |
    | _by_test_edited  |