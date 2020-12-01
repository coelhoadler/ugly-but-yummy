# ms-fornecedor
Micro serviço responsável pelo dominio de fornecedor

[x] MongoDB
[x] Testes com cucumber
[x] Testes unitários
[x] CRUD
[x] Swagger

## CRUD Routes
| http   | route                       |
|--------|-----------------------------|
| POST   | /fornecedor                 |
| GET    | /                           |
| GET    | /fornecedor                 |
| GET    | /fornecedor/:id             |
| GET    | /fornecedor/by/:prop/:value |
| PUT    | /fornecedor /:id            |
| DELETE | /fornecedor/:id             |

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```