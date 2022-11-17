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
JWT_KEY = 1234
API_PORT = 3030

## Regras das rotas

### Update
Apenas Admin pode fazer update em um usuarios, porém ele não pode dar admin a ninguém.