FROM node:12.18.4-alpine
ENV NPM_CONFIG_LOGLEVEL=info
WORKDIR /home/node/app

COPY dist ./dist
COPY node_modules ./node_modules
COPY package*.json ./

EXPOSE 8080

CMD ["npm", "start"]