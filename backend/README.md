## <h1 align=center>Client Hub API</h1>
Feita com o propósito de gerenciar usuários e seus contatos, essa api foi desenvolvida com as seguintes funcionalidades:

* Cadastro de usuários
  * Inserindo nome, email, telefone e senha, é criada uma conta que o usuário pode usar para acessar o sistema.
* Login de usuários
  * Checa os dados inseridos pelo usuário, permitindo ou não o acesso.
* Listagem de usuários
  * Listagem de usuário por id
  * Listagem com todos os usuários cadastrados
* Atualização de usuários
  * Altera qualquer um dos dados que foram inseridos no cadastro.
* Deleção de usuários
  * Deleta o usuário, removendo-o do sistema.
* Criação de contatos
  * Inserindo nome, email e telefone, é criado um contato que é automaticamente atrelado ao usuário logado.
* Listagem de contatos
  * Lista todos os contatos do usuário logado.
  * Também é possível listar um contato de forma direta, utilizando o id dele.
* Edição de contatos
  * Edita as informações daquele contato específico.
* Deleção de contatos
  * Deleta o contato, removendo-o do sistema.

## Instalação

Instalando os pacotes
```bash
$ npm install
```
Use o exemplo do arquivo [.env.example](https://github.com/vitorhugomendes/client-hub/blob/351f6dd8f1d5341257579d7ad7693132ae67b8a6/backend/.env.example) para se conectar ao seu database local, depois disso, é só usar o comando para gerar as migrações do prisma:

```bash
$ npx prisma migrate
```

## Rodando o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Tecnologias Utilizadas
* NodeJs
* Typescript
* NestJs
* Prisma

## Endpoints: Rotas que não precisam de autorização

## <h3 align=center>Criação de usuário</h3>

`POST /users/ - FORMATO DE REQUISIÇÃO`
```json
{
	"name": "vitor",
	"email": "vitor@mail.com",
	"password": "vitorsenha",
	"phone": "22454054504"
}
```

`POST /users/ - FORMATO DA RESPOSTA STATUS 201`

```json
{
	"id": "33f2c751-d276-49a0-a19d-28358b22d3e3",
	"name": "vitor",
	"email": "vitor@mail.com",
	"phone": "22454054504",
	"registerDate": "2023-08-03T19:01:09.002Z"
}
```
## <h3 align=center>Login</h3>

`POST /login/ - FORMATO DE REQUISIÇÃO`
```json
{
	"email": "vitor@mail.com",
	"password": "vitorsenha"
}
```

`POST /login/ - FORMATO DA RESPOSTA STATUS 201`

```json

{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpdG9yQG1haWwuY29tIiwiaWF0IjoxNjkxMDg5MjcxLCJleHAiOjE2OTEwOTI4NzEsInN1YiI6IjMzZjJjNzUxLWQyNzYtNDlhMC1hMTlkLTI4MzU4YjIyZDNlMyJ9.Vo0DUHPjn7mltDZr12aF8gVZEHrFBwtYuhytBfLKqi0"
}
````
## Rotas que precisam de autorização

É preciso passar o token do usuário através do header:
```
Authorization: Bearer {token}
```

## <h3 align=center>Listagem de usuário</h3>

Retorna uma lista com todos os usuários cadastrados na api<br>

`GET /users/ - FORMATO DE REQUISIÇÃO`
```
Não é preciso passar body
```


`GET /users/ - FORMATO DA RESPOSTA STATUS 200`

```json
[
 {
		"id": "18517afa-c129-4f76-97ec-349b1cfb4bbf",
		"name": "Karina Curtis",
		"email": "tuhoq@mailinator.com",
		"phone": "+1 (858) 742-1857",
		"registerDate": "2023-08-03T23:23:40.452Z"
	},
	{
		"id": "7e46c2a5-3195-45e3-bdd2-492912732528",
		"name": "Nina Stafford",
		"email": "haqa@mailinator.com",
		"phone": "+1 (958) 556-9007",
		"registerDate": "2023-08-04T01:47:11.145Z"
	}

]
```
Retorna as informações daquele usuário em específico<br>

`GET /users/userId/ - FORMATO DE REQUISIÇÃO`
```
Não é preciso passar body
```

`GET /users/userId/ - FORMATO DA RESPOSTA STATUS 200`

```json
{
	"id": "33f2c751-d276-49a0-a19d-28358b22d3e3",
	"name": "vitor",
	"email": "vitor@mail.com",
	"phone": "22454054504",
	"registerDate": "2023-08-03T19:01:09.002Z"
}
```
## <h3 align=center>Atualização de usuário</h3>

Atualiza os dados passados e retorna todas as informações daquele usuário em específico<br>
`PATCH /users/userId/ - FORMATO DE REQUISIÇÃO`
```json
{
	"email": "vitor@mail.com.br"
}

```

`PATCH /users/userId/ - FORMATO DA RESPOSTA STATUS 200`

```json
{
	"id": "33f2c751-d276-49a0-a19d-28358b22d3e3",
	"name": "vitor",
	"email": "vitor@mail.com",
	"phone": "22454054504",
	"registerDate": "2023-08-03T19:01:09.002Z"
}
```

## <h3 align=center>Deleção de usuário</h3>

`DELETE /users/userId/ - FORMATO DE REQUISIÇÃO`
```
Não é preciso passar body
```
Deleta o usuário específico<br>

`DELETE /users/userId/ - FORMATO DA RESPOSTA STATUS 200`

```
Sem nenhum dado na resposta
```

## <h3 align=center>Criar contato</h3>

O contato será atrelado ao usuário logado<br>

`POST /contacts/ - FORMATO DE REQUISIÇÃO`
```json
{
	"name": "contato",
	"email": "contato@mail.com",
	"phone": "22454054504"
}
```

`POST /contacts/ - FORMATO DA RESPOSTA STATUS 201`

```json
{
	"id": "d22b6562-1071-48ba-a16a-87c01f41f4a3",
	"name": "contato",
	"email": "contato@mail.com",
	"phone": "22454054504",
	"registerDate": "2023-08-03T19:01:29.600Z",
	"userId": "33f2c751-d276-49a0-a19d-28358b22d3e3"
}
```
## <h3 align=center>Listar contatos</h3>

Lista todos os contatos do usuário logado<br>

`GET /contacts/ - FORMATO DE REQUISIÇÃO`
```
Não é preciso passar body
```

`POST /contacts/ - FORMATO DA RESPOSTA STATUS 200`

```json
[
	{
		"id": "f3830dbd-5b18-48b6-85d3-9beb45d2d285",
		"name": "contato",
		"email": "contato@mail.com",
		"phone": "22454054504",
		"registerDate": "2023-08-03T19:01:19.494Z",
		"userId": "33f2c751-d276-49a0-a19d-28358b22d3e3"
	},
	{
		"id": "d22b6562-1071-48ba-a16a-87c01f41f4a3",
		"name": "contato2",
		"email": "contato2@mail.com",
		"phone": "22454054504",
		"registerDate": "2023-08-03T19:01:29.600Z",
		"userId": "33f2c751-d276-49a0-a19d-28358b22d3e3"
	}
]
```
Retorna as informações daquele contato em específico<br>

`GET /contacts/contactId - FORMATO DE REQUISIÇÃO`
```
Não é preciso passar body
```

`GET /contacts/contactId - FORMATO DA RESPOSTA STATUS 200`

```json
	{
		"id": "f3830dbd-5b18-48b6-85d3-9beb45d2d285",
		"name": "contato",
		"email": "contato@mail.com",
		"phone": "22454054504",
		"registerDate": "2023-08-03T19:01:19.494Z",
		"userId": "33f2c751-d276-49a0-a19d-28358b22d3e3"
	}
```

## <h3 align=center>Editar contato</h3>

Edita as informações passadas e retorna todo os dados do contato<br>

`PATCH /contacts/contactId/ - FORMATO DE REQUISIÇÃO`
```json
{
	"name": "novo nome de contato"
}
```

`PATCH /contacts/ - FORMATO DA RESPOSTA STATUS 200`

```json
{
	"id": "ed79b03a-56c6-41bd-bedd-a6a8d684c0e8",
	"name": "novo nome de contato",
	"email": "contato@mail.com",
	"phone": "22454054504",
	"register_date": "2023-07-26T23:01:48.399Z",
	"user_id": "86fa12fc-bcf3-4e0b-9d62-a8a10a70a9f5"
}
```

## <h3 align=center>Deletar contato</h3>

`DELETE /contacts/contactId/ - FORMATO DE REQUISIÇÃO`
```
Não é preciso passar body
```

Deleta o contato

`DELETE /contacts/contactId/ - FORMATO DA RESPOSTA STATUS 200`

```
Sem retorno
```
