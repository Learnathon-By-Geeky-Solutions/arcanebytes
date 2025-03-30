FROM node:22-bookworm-slim

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm ci

COPY . .
COPY next.config.ts ./next.config.ts

EXPOSE 3000

CMD ["npm", "run", "dev"]
