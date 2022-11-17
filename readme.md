## A Fazeres:

- [x] Implementar typeorm na api.
- [x] Implementar conexão com banco de dados.
- [x] Definir qual banco de dados será utilizado: Mysql.
- [x] Implementar as ações das funções de userController.
- [x] Criar middleware para autenticação.
- [x] Implementar autenticação com jwt.
- [x] Implementar login.
- [x] Adicionar regra em update que um SubAdmin pode setar cargo apenas de funcionario para user e de user para funcionario em outros usuários que não seja ele mesmo.
- [ ] Adicionar regra: Um admin não pode ser deletado por outro admin e um subadmin não pode deletar admin nem subadmin.
- [ ] Adicionar regra: Os únicos que podem deletar usuários são os subadmin e admin.
- [ ] Final de tudo, Criar documentação para uso da mesma.

## Variaveis de ambiente necessárias para o funcionamento da API.
**OBS**: Os dados abaixo nas variaveis de ambiente são apenas para exemplificação.
JWT_KEY = 1234
API_PORT = 3030