## Client Hub API
Feita com o propósito de gerenciar usuários e seus contatos, essa api foi desenvolvida com as seguintes funcionalidades:

* Cadastro de usuários
  * Inserindo nome, email, telefone e senha, é criada uma conta que o usuário pode usar para acessar o sistema.
* Login de usuários
  * Checa os dados inseridos pelo usuário, permitindo ou não o acesso.
* Listagem de usuários
  * Lista todos os usuários cadastrados
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

## Rodando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

