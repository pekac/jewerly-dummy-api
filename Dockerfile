FROM node:18 As development

RUN apt-get update && apt-get install -y openssl

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
RUN npm ci

COPY --chown=node:node . .
USER node