## A Fazeres:

- [x] Implementar typeorm na api.
- [x] Implementar conexão com banco de dados.
- [x] Definir qual banco de dados será utilizado: Mysql.
- [x] Implementar as ações das funções de userController.
- [x] Criar middleware para autenticação.
- [x] Implementar autenticação com jwt.
- [x] Implementar login.
- [x] Adicionar regra em update: Apenas admin pode setar cargo em qualquer um, exeto quando esse alguém for ele mesmo ou for outro admin.
- [x] Adicionar regra: Um admin não pode ser deletado por outro admin e um subadmin não pode deletar admin nem subadmin.
- [x] Adicionar regra: Os únicos que podem deletar usuários são os admins.
- [ ] Final de tudo, Criar documentação para uso da mesma.

## Variaveis de ambiente necessárias para o funcionamento da API.
**OBS**: Os dados abaixo nas variaveis de ambiente são apenas para exemplificação.
- JWT_KEY = 1234
- API_PORT = 3030

## **Documentação da API**

`/`
- lista todos os usuários.
- tipo: **GET**

`/:id`
- lista os dados de um usuário.
- tipo: **GET**

`/register`
- responsavel por registrar um novo usuário.
- tipo: **POST**
- a rota deve receber por body: `{ nome, email, password, cpf, telefone }`

`/login`
- responsavel por autenticar o usuário (Fazer login).
- tipo: **POST**
- a rota deve receber por body: `{ email, password }`

`/`
- responsavel por alterar dados de um usuário.
- regras:
  - Apenas Admin's e SubAdmin's podem fazer update em usuários.
  - SubAdmin pode setar apenas os seguintes cargos: `User, Funcionario`
  - Os mesmos não podem alterar os dados de si mesmos.
- tipo: **PUT**
- **header**: `Authorization` com `token` do usuário
- a rota deve receber por body: `{ id, cargo }`

`/delete/:id`
- responsavel por alterar dados de um usuário.
- regras:
  - Apenas admin's podem deletar usuários.
  - Admin's não conseguem deletar outros Admin's.
- tipo: **DELETE**
- **header**: `Authorization` com `token` do usuário