Feature: CRUD consumidor

Scenario Outline: Criar um novo consumidor
Given que eu esteja conectado ao micro-serviço
When eu entrar com o <nome> de um consumidor
Then quero que o sistema crie um novo consumidor

Examples:
    | nome      |
    | _by_test  |
    | _by_test1 |
    | _by_test2 |
    | _by_test3 |


