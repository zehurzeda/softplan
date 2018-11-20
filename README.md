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

Após isso é possível montar a imagem docker para rodar o back-end com o seguinte comando a partir da pasta backend/:

```
mvn dockerfile:build -DskipTests
```
Com a imagem montada é possível roda-la com o seguinte comando:
```
docker run -p 8080:8080 softplan/backend
```
Pronto temos nosso back-end online!!!

Agora o front-end
