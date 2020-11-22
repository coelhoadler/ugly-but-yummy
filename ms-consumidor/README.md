# ms-consumidor
Micro serviço responsável pelo dominio de consumidor

[x] MongoDB
[x] Testes com cucumber
[x] Testes unitários
[x] CRUD

## CRUD Routes
| http   | route                    |
|--------|--------------------------|
| POST   | /consumidor                 |
| GET    | /consumidor                 |
| GET    | /consumidor/:id             |
| GET    | /consumidor/by/:prop/:value |
| PUT    | /consumidor /:id            |
| DELETE | /consumidor/:id             |

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```