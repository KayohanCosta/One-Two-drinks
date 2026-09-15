# 🍸 One Two Drink

[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> *Um drink, dois goles, três histórias por noite.*

## Visão geral

**One Two Drink** é uma plataforma digital premium para uma empresa de catering e alta coquetelaria especializada em casamentos, eventos corporativos e celebrações particulares.

O projeto combina apresentação de marca, carta de drinks, galeria de eventos e um fluxo de solicitação de orçamento integrado ao WhatsApp.

## O problema

Uma empresa de coquetelaria para eventos precisa comunicar mais do que seus serviços: o visitante precisa entender a proposta da marca, visualizar a experiência oferecida e conseguir iniciar uma conversa comercial sem atrito.

O projeto resolve esse problema reunindo **posicionamento, conteúdo visual e conversão** em uma única experiência digital.

## Solução

A aplicação funciona como um site institucional multipágina com:

- apresentação da marca e seu posicionamento;
- carta de coquetéis;
- galeria de eventos reais;
- página de eventos e solicitação de orçamento;
- contato e canais de atendimento;
- metadados específicos por rota para SEO e compartilhamento social.

O formulário de orçamento coleta as informações principais do evento e gera uma mensagem estruturada para iniciar o atendimento pelo WhatsApp.

Para detalhes de arquitetura e decisões técnicas, veja [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Stack e por quê

- **React 19** — construção da interface com componentes reutilizáveis.
- **TanStack Start + TanStack Router** — arquitetura baseada em rotas, metadados por página e suporte a SSR.
- **Vite 7** — desenvolvimento e build rápidos.
- **TypeScript** — tipagem estática com configuração estrita.
- **Tailwind CSS 4** — implementação consistente do sistema visual com utilitários e tokens de design.
- **Framer Motion** — animações e microinterações.
- **Radix UI + shadcn/ui** — componentes acessíveis e customizáveis.
- **date-fns + React Day Picker** — seleção e formatação de datas no fluxo de orçamento.
- **Cloudflare + Wrangler** — configuração de execução e deploy em infraestrutura edge.

## Arquitetura e estrutura

A aplicação segue uma organização por responsabilidades, separando rotas, componentes compartilhados, componentes de UI, hooks, utilitários e assets.

```text
src/
├── assets/
│   └── events/
├── components/
│   ├── site/
│   └── ui/
├── hooks/
├── lib/
├── routes/
│   ├── __root.tsx
│   ├── index.tsx
│   ├── sobre.tsx
│   ├── drinks.tsx
│   ├── eventos.tsx
│   ├── galeria.tsx
│   └── contato.tsx
├── main.tsx
├── router.tsx
├── routeTree.gen.ts
└── styles.css
```

- `components/site` concentra componentes estruturais como Header, Footer, Layout e PageHero.
- `components/ui` concentra componentes atômicos reutilizáveis.
- `routes` utiliza file-based routing do TanStack Router.
- `assets/events` organiza as fotografias utilizadas pela galeria.
- `styles.css` concentra estilos globais e tokens visuais.

## Qualidade e engenharia

O projeto possui tooling dedicado para tipagem, lint e formatação:

- **TypeScript** em modo `strict`;
- **ESLint 9** com TypeScript ESLint, React Hooks e React Refresh;
- **Prettier** integrado ao ESLint;
- scripts separados para desenvolvimento, build, lint e formatação.

Scripts disponíveis:

```bash
npm run dev
npm run build
npm run lint
npm run format
```

## Deploy

O projeto possui configuração para deploy utilizando **Cloudflare + Wrangler**, com o entry point de servidor do TanStack Start definido em `wrangler.jsonc`.

A configuração de infraestrutura está pronta para execução em ambiente edge. Uma URL pública de produção não é declarada aqui porque não há uma URL de deploy confirmada no repositório.

## Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/KayohanCosta/One-Two-drinks.git
cd One-Two-drinks
```

### 2. Instale as dependências

Com Bun:

```bash
bun install
```

ou com npm:

```bash
npm install
```

### 3. Inicie o ambiente de desenvolvimento

```bash
bun dev
```

ou:

```bash
npm run dev
```

### 4. Gere o build de produção

```bash
bun run build
```

ou:

```bash
npm run build
```

## Resultado

O One Two Drink combina uma apresentação visual orientada à marca com funcionalidades comerciais reais.

Do ponto de vista de engenharia, os principais pontos do projeto são:

- arquitetura baseada em rotas;
- componentes reutilizáveis;
- TypeScript em modo estrito;
- SEO por página;
- galeria dinâmica baseada em assets;
- formulário integrado ao WhatsApp;
- sistema visual consistente;
- animações e microinterações;
- tooling de lint e formatação;
- configuração de deploy em Cloudflare.

O projeto foi pensado não apenas como uma landing page, mas como uma **experiência digital completa para apresentar a marca e conduzir o visitante até o contato comercial**.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [`LICENSE`](LICENSE) para mais detalhes.
