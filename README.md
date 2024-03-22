## API Blog Allowme

# Contrução

Durante o desenvolvimento da API, utilizei Node.js com o framework Nest.js para implementar as funcionalidades do CRUD. Para interagir com o banco de dados, escolhi o Sequelize, e o Postgres foi adotado como o banco de dados principal. Como ferramentas complementares, integrei o Tsyringe para gerenciar a injeção de dependência nos repositórios e o date-fns para formatar as datas conforme o padrão do protótipo. Para garantir a qualidade do código, implementei testes automatizados utilizando o Jest, que já está integrado ao Nest.js.

## Para rodar o projeto - NPM

Para rodar o projeto podemos seguir a ordem dos comandos:

```bash

#Instalação de dependências
$ npm install

# Modo deselvolvimento com a flag --watch para renderização automatica
$ npm run start:dev

#Criação de seeds padrão para o banco de dados
$ npx sequelize-cli db:seed:all
```

## Para rodar o projeto - DOCKER

Para rodar o projeto com docker, foram criados dois arquivos, o Dockerfile e o docker-compose.yml.

No terminal dentro da pasta da aplicação basta rodar o comando:

```bash
#docker compose
$ docker-compose up
```

Em seguida, rodar o comando

```bash
#docker compose
$ npx sequelize-cli db:seed:all
```

Para fazer o seed do banco de dados.

## TODO - Tempo curto 😔

- [ ] Testes
- [ ] Swagger para docs
- [ ] Winston para logs

## Implementações futuras

Te conto na call !
