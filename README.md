# Desafio implementador fullstack

Este projeto se trata da implementação do [desafio](https://github.com/provas-softplan/implementador-fullstack) proposto pela Softplan para a vaga de Implementador Fullstack

### Pre-requisitos

É necessário ter instalado as seguintes ferramentas para rodar o projeto:

* [Maven](http://maven.apache.org/)
* [Docker](https://www.docker.com/)

### Rodando o projeto

Para rodar o projeto primeiramente é necssário baixar todas as dependências, para isso rodar o seguinte comando a partir da raiz do projeto:

```
mvn clean install -DskipTests
```
(É necessário rodar com o comando "-DskipTests" pois uma dependência do spring-boot está desatualizada)

Após isso é possível montar os containers docker com as imagens que foram criadas pelo maven

#### Container Back-end

```
docker run -d -p 8080:8080 softplan/backend
```

#### Container Front-end

```
docker run -d -p 4200:80 softplan/frontend
```

Pronto temos a aplicação online!!

## Acessando a aplicação

Agora que nossa aplicação está online podesmo acessa-la pelo link:

[localhost:4200](http://localhost:4200)

e utilizar as seguintes credenciais para realizar o login:

* email: admin@softplan.com.br
* senha: admin
