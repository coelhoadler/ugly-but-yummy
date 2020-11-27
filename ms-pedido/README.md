# ms-pedido
Micro serviço responsável pelo dominio de pedido
[x] MongoDB
[x] Testes com cucumber
[x] Testes unitários
[x] CRUD

## CRUD Routes
| http   | route                    |
|--------|--------------------------|
| POST   | /pedido                 |
| GET    | /pedido                 |
| GET    | /pedido/:id             |
| GET    | /pedido/by/:prop/:value |
| PUT    | /pedido                 |
| DELETE | /pedido/:id             |

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```