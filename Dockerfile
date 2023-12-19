FROM node:16-alpine as base

WORKDIR /usr/app/migrator
EXPOSE 3000
COPY *.json .
COPY *.js .
COPY src src

RUN npm install --quiet --production

#CMD ["node", "main.js", "--env=DEV"]
