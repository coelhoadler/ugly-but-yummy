# ms-produto
Micro serviço desponsável pelo dominio de produtos
[x] MongoDB
[x] Testes com cucumber
[x] Testes unitários
[x] CRUD

## CRUD Routes
| http   | route                    |
|--------|--------------------------|
| POST   | /produto                 |
| GET    | /produto                 |
| GET    | /produto/:id             |
| GET    | /produto/by/:prop/:value |
| PUT    | /produto                 |
| DELETE | /produto/:id             |

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```