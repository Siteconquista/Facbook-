# Sistema de Cadastro e Visualização de Clientes

Este sistema consiste em dois sites:
1. Site de cadastro de clientes
2. Painel administrativo para visualização dos dados

## Requisitos

- Node.js
- MongoDB

## Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
MONGODB_URI=sua_url_do_mongodb
PORT=3000
```

## Executando o projeto

1. Inicie o MongoDB
2. Execute o servidor:
```bash
npm start
```

3. Acesse os sites:
- Formulário de cadastro: http://localhost:3000
- Painel administrativo: http://localhost:3000/admin.html

## Funcionalidades

### Site de Cadastro
- Formulário para coletar dados do cliente
- Validação de campos
- Feedback visual após o envio

### Painel Administrativo
- Visualização de todos os clientes cadastrados
- Busca por nome, email ou telefone
- Atualização automática a cada 30 segundos
- Layout responsivo 