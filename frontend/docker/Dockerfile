# syntax=docker/dockerfile:experimental

FROM node:hydrogen-alpine3.21

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json .
COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]