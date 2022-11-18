## **Bem vinda a Api do app Code Check**

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
- [x] Final de tudo, Criar documentação para uso da mesma.
- [ ] Adicionar flag na rota de readAllUsers para trazer ou não o cargo dos usuários.

## **Utilização**
 - para utilizar a api execute os passos a seguir: (recomendado o npm instalado na maquina e o typescript)
 - ``npm i`` - para baixar todas a dependencias e coisas necessárias para a api funcionar
 - ``npm run dev`` - para testar em localhost
 - ``npm start`` - para executar em um servidor em modo produção
 - necessário ter banco de dados mysql instalado na máquina

## Variaveis de ambiente necessárias para o funcionamento da API.
Está em duvida de como colocar variaveis de ambiente para testar o app? <a href="./tutorial-variaveis-ambiente.md">Clique aqui</a>
**OBS**: Os dados abaixo nas variaveis de ambiente são apenas para exemplificação.
- **JWT_KEY** = 1234
- **API_PORT** = 3333
- **API_DATABASE_PORT** = 3306
- **API_DATABSE_HOST** = localhost
- **API_DATABASE** = "code_check"
- **API_USER_DATABASE** = root2
- **API_PASSWORD_DATABASE** = 1234

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


_Desenvolvido com ❤ por Eduardo Junior ( Junior042 )_