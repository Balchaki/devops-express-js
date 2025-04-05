# Aplicação DevOps

Aplicação simples em Express.js para demonstração de práticas DevOps.

## Como usar

1. Instale as dependências:
```
npm install
```

2. Execute a aplicação:
```
node src/index.js
```

3. Acesse no navegador:
- `http://localhost:3000` - Página de boas-vindas
- `http://localhost:3000/integrantes` - Lista de integrantes do grupo

## Endpoints

- **/** - Retorna a página HTML de boas-vindas
- **/integrantes** - Retorna JSON com lista de integrantes

## Estrutura

```
src/
├── views/
│   └── index.html    # Página de boas-vindas
└── index.js          # Arquivo principal da aplicação
```

## Desenvolvimento

Este projeto utiliza GitFlow:
- `main` - Versão de produção
- `develop` - Branch de desenvolvimento
- `feature/*` - Novas funcionalidades
- `release/*` - Preparação para releases
- `hotfix/*` - Correções urgentes
