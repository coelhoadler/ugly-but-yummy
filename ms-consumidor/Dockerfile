FROM node:14.15-alpine

WORKDIR /usr/ms-consumidor

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${NODE_PORT}

CMD [ "npm", "run", "start" ]