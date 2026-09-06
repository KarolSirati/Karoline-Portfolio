# Portfólio — Karoline Sirati

Portfólio Full Stack desenvolvido com React, TypeScript, Vite e Go.

## Estrutura

- `src/models`: tipos e dados do portfólio.
- `src/views`: componentes responsáveis pela interface.
- `src/controllers`: estado e ações da interface.
- `src/clients`: comunicação com a API.
- `backend/internal/models`: modelos do backend.
- `backend/internal/handlers`: rotas e validações HTTP.

## Executando no VS Code

Extraia o ZIP, abra a pasta no VS Code e utilize dois terminais.

### Frontend

```bash
npm install
npm run dev
```

Abra o endereço apresentado no terminal, normalmente `http://localhost:5173`.

### Backend

```bash
cd backend
go run ./cmd/api
```

A API ficará disponível em `http://localhost:8080`.

## Formulário de contato

Durante o desenvolvimento, a API valida os dados e registra o contato no terminal. Para realizar envios reais, conecte um serviço de e-mail no backend.
