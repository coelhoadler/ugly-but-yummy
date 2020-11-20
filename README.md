# Case Ugly But Yummy
---
~~Suponha que você seja contratado para desenvolver algunas funcionalidades do e-commerce da
Amazon, alguns desejos dos usuários são descritos abaixo e você deve desenhar e implementar uma
solução baseada em Microserviços.~~

## Integrantes
- Adler Coelho
- Beatriz Bafini
- Kelvin Marques
- Michel Santana

## Subindo a aplicação
   - clone o atual repositório: `git clone https://github.com/coelhoadler/dockernode.git `;
   - certifique-se que você tenha o __Docker__ e o __docker-compose__ instalados corretamente no seu ambiente;
   - na raíz do projeto, execute: `docker-compose up`.
   
### Identificação dos Microservices
  | Nome do Microservice    | Porta        | Descrição        |
  |-------------------------|--------------|------------------|
  | zookeeper               | 2181         | Service Discovery.                          |
  | kafka                   | 9092         | Plataforma distribuída.                     |
  | consumidor              | 3000         | MS de consumidor. (NodeJs)                  |
  | fornecedor              | 3001         | MS de fornecedor. (NodeJs)                  |
  | produto                 | 3002         | MS de produto. (NodeJs)                     |
  | web                     | 3003         | MS web. (Angular)                           |
  | swagger                 | 8091         | Swagger UI                                  |
 
## Tecnologias usadas
- NodeJs
- NestJs
- MongoDB
- Kafka Node
- Angular
- Angular Material
- Swagger UI

## Documentação da API
- Ao subir a aplicação, uma documentação da API em Swagger pode ser encontrada em `localhost:8091`.
- Há uma collection do Postman para testes na raíz do projeto: `api.postman_collection.json`

## Requisitos atendidos
- [x] Microservices; (3)
- [x] Uso de banco não relacional; (2)
- [x] Deploy via Docker; (1)
- [x] Testes unitários, integração e UI (3)
- [x] Front (2)
- [x] Integração com o Slack (1)