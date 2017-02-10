# Larica's Pizzaria


## Tópicos

- [Apresentação](#apresentação)
- [Setup](#setup)
- [Heroku](#heroku)
- [Postman](#postman)
- [Contribuindo](#contribuindo)
- [License](#license)


## Apresentação

Este projeto foi desenvolvido utilizando [Nodejs](https://nodejs.org), [Express](https://expressjs.com) e [MongoDB](https://www.mongodb.com), atualmente encontra-se hospedado no [Heroku](https://www.heroku.com/) e utiliza do [mLab](https://www.mlab.com/) como cloud database.


## Setup

Instale todas as dependências do projeto através do comando:

```
$ npm install --save
```

Para iniciar o servidor node, execute o comando:

```
$ npm run server
```

> O servidor irá rodar em `http://localhost:3000`


## Heroku

Alguns comandos úteis para o console do Heroku:

```
$ heroku logs -t
```

> Logs da aplicação em tempo real


```
$ heroku apps:info <app-name> --remote production
```

> Algumas informações sobre o app


## Postman

Este projeto possui uma [collection no Postman](https://www.getpostman.com/collections/53a1679cad9055f8d76a), com ela você será capaz de saber **quais endpoinst** existem e **como funcionam**.
Caso você não conheça o Postman, indico [este material](https://www.getpostman.com/docs/).


## Contribuindo

[Abra uma issue](https://github.com/starkland/pizza-api/issues/new) para reportar algum problema ou melhoria, e na sequência submeta um pull request.

> Submetendo um pull request.

1. Fork o repositório no Github: `git clone https://github.com/starkland/pizza-api.git`
1. Cria uma nova branch: `git checkout -b nome-da-melhoria`
1. Faça um commit de suas mudanças: `git commit -m 'minha melhoria'`
1. Realize um push para a nova branch: `git push origin nome-da-melhoria`
1. Submeta um pull request!


## License

Feito com ♥ by [Thulio Philipe](https://twitter.com/thulioph_). Licença sobre [MIT](https://thulioph.mit-license.org).