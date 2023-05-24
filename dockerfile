# dockerfile not in root directory, .docker/dockerfile
FROM  node:18.15.0-alpine3.16

WORKDIR /app

COPY package*.json .


RUN npm install -g @nestjs/cli && npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "start:debug"]

