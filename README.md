# Mapa Numerológico

Aplicação web de análise numerológica Pitagórica. Gera um relatório visual premium com os 4 números principais do mapa de uma pessoa, com opção de exportar em PDF.

## Stack

- **Vite** + JavaScript puro (sem frameworks)
- **html2pdf.js** via CDN para geração do PDF
- Fontes: Cormorant Garamond + Inter (Google Fonts)

## Cálculos implementados

| Número | Descrição |
|--------|-----------|
| Número do Destino | Soma reduzida de todas as letras do nome |
| Número da Alma | Soma reduzida das vogais do nome |
| Número da Personalidade | Soma reduzida das consoantes do nome |
| Lição de Vida | Redução da data de nascimento |

Números mestres **11**, **22** e **33** são preservados sem redução.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

## Build de produção

```bash
npm run build
```

Os ficheiros gerados ficam em `dist/`.

## Deploy na Vercel

1. Faça push do repositório para o GitHub
2. Acesse [vercel.com](https://vercel.com) e clique em **New Project**
3. Importe o repositório
4. As configurações são detectadas automaticamente (Vite)
5. Clique em **Deploy**

Não são necessárias variáveis de ambiente — o projeto roda 100% no cliente.

## Estrutura

```
numerologia/
├── index.html           ← formulário de entrada
├── resultado.html       ← página do relatório
├── vite.config.js
├── src/
│   ├── engine.js        ← cálculos numerológicos
│   ├── interpretacoes.js← textos interpretativos
│   ├── relatorio.js     ← renderização do relatório
│   └── pdf.js           ← geração do PDF
├── style/
│   ├── main.css         ← variáveis e estilos globais
│   ├── form.css         ← formulário
│   └── relatorio.css    ← relatório e cards
└── assets/
    └── logo.svg
```
