# Case Ugly But Yummy
---
Nesse projeto você irá encontrar uma de nossa ideias para o Startup One, foi realizado 3 micros serviços de CRUD da base inicial do nosso projeto. Procuramos seguir um desenvolvimento limpo e buscando as melhores práticas para a engenharia de software. Além de que estamos fazendo uso de tecnologias bem atuais no dia dia.

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
  | consumidor              | 3000         | MS de consumidor. __Na raíz do endereço está o Swagger.__ (NodeJs)                 |
  | fornecedor              | 3001         | MS de fornecedor. __Na raíz do endereço está o Swagger.__(NodeJs)                  |
  | produto                 | 3002         | MS de produto. __Na raíz do endereço está o Swagger.__ (NodeJs)                     |
  | web                     | 3003         | MS web. (Angular)                           |
 
## Tecnologias usadas
- NodeJs
- NestJs
- MongoDB
- Kafka Node
- Angular
- Angular Material
- Swagger UI

## Requisitos atendidos
- [x] Microservices; (3)
- [x] Uso de banco não relacional; (2)
- [x] Deploy via Docker; (1)
- [x] Testes unitários, integração e UI (3)
- [x] Front (2)
- [x] Integração com o Slack (1)