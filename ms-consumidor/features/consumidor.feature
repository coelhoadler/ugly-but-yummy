Feature: CRUD Consumidor

# CREATE
Scenario Outline: Criar um novo Consumidor
Given que eu esteja conectado ao micro-serviço
When eu entrar com o <nome> de um Consumidor
Then quero que o sistema crie um novo Consumidor

Examples:
    | nome      |
    | _by_test  |

# SELECT
Scenario Outline: Seleciona um Consumidor que foi cadastrado
Given que eu tenha consumidores cadastrados
When eu digitar o <nome> de um Consumidor existente
Then quero que o Consumidor exista

Examples:
    | nome      |
    | _by_test  |

# UPDATE
Scenario Outline: Edita um Consumidor que foi cadastrado
Given que eu tenha consumidores cadastrados
When eu digitar o <nome>, buscar o consumidor cadastrado
And ao encontrar, altere o nome para <novoNome>
Then tenha sucesso na alteração

Examples:
    | nome      | novoNome        |
    | _by_test  | _by_test_edited |

# DELETE
Scenario Outline: Deleta um Consumidor que foi cadastrado
Given que eu tenha consumidores cadastrados
When eu digitar o <nome> de um consumidor existente
Then quero deletar o Consumidor

Examples:
    | nome             |
    | _by_test_edited  |