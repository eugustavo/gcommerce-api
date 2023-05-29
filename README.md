<p align="center">
  <img src="https://github.com/eugustavo/gcommerce-api/assets/25755550/065f4376-dda9-4c05-b657-09849abe02e2" width="200" alt="GCommerce Logo" /></a>
</p>


<p align="center">
  API feita com Nestjs para o <a href="https://gcommerce-web.vercel.app" target="_blank">GCommerce</a>
</p>

<p align="center">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/eugustavo/gcommerce-api" />
  <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/eugustavo/gcommerce-api" />
  <img alt="GitHub Commit Activity (Week)" src="https://img.shields.io/github/commit-activity/w/eugustavo/gcommerce-api" />
</p>


## Installation
É um requisito para o projeto que o docker esteja instalado na máquina, caso não esteja, siga as instruções de instalação no site oficial: https://docs.docker.com/engine/install/

## Running the app

```bash
# run docker-compose
$ docker-compose up -d

# troque as variáveis de acesso ao database
> src/app.module.ts

# Instale as dependências
$ yarn install

# Rode a aplicação
$ yarn start:dev

# chame o endpoint de popular o banco de dados
curl -X 'POST' \
  'http://localhost:3333/product/popule-database' \
  -H 'accept: */*' \
  -d ''

```
## Documentation Swagger
Acesse a documentação da API em: http://localhost:3333/api
