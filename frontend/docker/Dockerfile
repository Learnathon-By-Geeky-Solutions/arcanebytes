# syntax=docker/dockerfile:experimental

FROM node:hydrogen-alpine3.21

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json .
RUN npm install && npm run build
COPY . .

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget -qO- http://localhost:3000/ || exit 1

CMD ["npm", "run", "start"]