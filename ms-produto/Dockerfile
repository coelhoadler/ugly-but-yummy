FROM node:14.15-alpine

WORKDIR /usr/ms-produto

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${NODE_PORT}

CMD [ "npm", "run", "start:dev" ]