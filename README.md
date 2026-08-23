# João Pedro | Business Engineering — Site Hugo

## Estrutura do projeto

```
joaopedro-site/
├── content/
│   ├── insights/        ← Seus artigos do blog ficam aqui
│   ├── sobre/           ← Página sobre você
│   └── solucoes/        ← Página de soluções
├── themes/jpbe/
│   ├── layouts/         ← Templates HTML
│   └── static/
│       ├── css/main.css ← Todo o design do site
│       └── js/main.js   ← JS básico (menu mobile)
└── hugo.yaml            ← Configuração principal
```

## Como criar um novo artigo

```bash
hugo new content insights/nome-do-artigo.md
```

Cabeçalho de cada artigo:
```yaml
---
title: "Título do artigo"
date: 2025-01-15
description: "Descrição curta para SEO"
category: "Finance & Costs"
tags: ["tag1", "tag2"]
youtube_id: "ID_DO_VIDEO"  # opcional
---
```

## Categorias disponíveis
- Finance & Costs
- Data & Analytics
- Process & Automation
- Investment & Projects
- Business Cases

## Rodar localmente

```bash
hugo server -D
# Acesse http://localhost:1313
```

## Deploy no GitHub Pages

1. Crie um repositório no GitHub (ex: `joaopedro.github.io`)
2. Em Settings → Pages → Source: selecione "GitHub Actions"
3. Crie `.github/workflows/hugo.yml` (veja abaixo)
4. Faça push do projeto
5. Aponte seu domínio do Registro.br para o GitHub Pages

## GitHub Actions (deploy automático)

Crie o arquivo `.github/workflows/hugo.yml`:

```yaml
name: Deploy Hugo site

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true
      - run: hugo --minify
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

## Domínio próprio

Após comprar no Registro.br, crie o arquivo `static/CNAME` com seu domínio:
```
joaopedro.eng.br
```

E configure os DNS no Registro.br apontando para o GitHub Pages.

