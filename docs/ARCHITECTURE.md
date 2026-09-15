# Architecture & Technical Decisions

## Visão geral

O One Two Drink foi estruturado como uma aplicação web institucional orientada à apresentação de marca e conversão comercial.

A arquitetura procura manter uma separação clara entre páginas, componentes compartilhados, componentes de interface, assets e utilitários, enquanto o TanStack Start fornece a base de roteamento e execução da aplicação.

## Galeria de eventos

Um dos desafios era apresentar fotografias de diferentes eventos sem transformar cada imagem em uma importação manual dentro da página.

A solução utiliza `import.meta.glob` para descobrir automaticamente os arquivos de imagem dentro de `src/assets/events`:

```ts
const eventImages = import.meta.glob("@/assets/events/**/*.jpg", {
  eager: true,
  query: "?url",
});
```

A aplicação transforma o resultado em um mapa de assets e filtra as imagens pelo identificador de cada evento. Dessa forma, a galeria permanece orientada a dados: novos registros podem ser organizados na estrutura de assets sem duplicar a lógica de renderização.

A apresentação utiliza um grid responsivo com variações de tamanho para criar uma composição editorial. Imagens fora do viewport também utilizam `loading="lazy"`.

## Fluxo de orçamento e conversão

O formulário da página de eventos foi projetado para reduzir a distância entre interesse e contato comercial.

O visitante informa:

- nome;
- WhatsApp/telefone;
- e-mail;
- data do evento;
- tipo de evento;
- localização;
- quantidade de convidados;
- observações.

No envio, os dados são coletados com `FormData`, transformados em uma mensagem estruturada e codificados para uma URL do WhatsApp.

O fluxo fica essencialmente:

```text
Visita
  ↓
Apresentação da marca
  ↓
Exploração dos serviços e drinks
  ↓
Solicitação de orçamento
  ↓
Preenchimento dos dados do evento
  ↓
WhatsApp
  ↓
Atendimento comercial
```

A decisão evita introduzir uma camada de backend apenas para intermediar um primeiro contato comercial que já acontece pelo WhatsApp.

## Roteamento e metadados

As páginas ficam em `src/routes` utilizando file-based routing do TanStack Router.

Cada rota pode declarar seu próprio `head`, permitindo associar ao conteúdo da página:

- título;
- descrição;
- Open Graph title;
- Open Graph description;
- imagem de compartilhamento;
- metadados para Twitter.

Isso mantém SEO e compartilhamento social próximos da implementação da própria página, em vez de concentrar todas as informações em uma configuração global difícil de manter.

## Componentização

A aplicação separa componentes em duas camadas principais:

### `components/site`

Contém componentes estruturais e específicos da experiência do site, como:

- `Layout`;
- `Header`;
- `Footer`;
- `PageHero`.

Esses componentes permitem compartilhar estrutura e linguagem visual entre as páginas.

### `components/ui`

Contém componentes de interface reutilizáveis baseados em Radix UI e shadcn/ui.

A separação evita que componentes estruturais da marca fiquem misturados com primitives de interface genéricas.

## Sistema visual

A identidade visual foi construída sob o conceito **Charcoal & Ember**.

A interface combina:

- fundo carvão escuro;
- tons quentes de brasa;
- tipografia editorial;
- contraste elevado;
- imagens em grande escala;
- espaçamento generoso;
- microinterações;
- animações discretas.

### Tipografia

- **Instrument Serif** para títulos e elementos editoriais;
- **Work Sans** para textos e interface.

### Tokens e utilitários

Os estilos globais em `src/styles.css` definem tokens de cor e tipografia, além de utilitários específicos da identidade, como `grain`, `ember-glow` e `text-eyebrow`.

## Stack e decisões

### React 19

Responsável pela composição da interface e pela criação de componentes reutilizáveis.

### TanStack Start + TanStack Router

Fornecem a estrutura de aplicação e roteamento baseada em arquivos, além do gerenciamento de metadados por rota e suporte às capacidades de execução server-side do framework.

### Vite

Fornece o ambiente de desenvolvimento e o pipeline de build, mantendo o ciclo local rápido e simples.

### TypeScript

O projeto utiliza tipagem estática e `strict: true`, aumentando a segurança durante a evolução da aplicação.

### Tailwind CSS 4

Permite implementar o sistema visual diretamente com utilitários e tokens, mantendo a estilização próxima dos componentes.

### Framer Motion

Utilizado para animações de entrada, transições e microinterações sem introduzir uma camada própria de animação para cada componente.

### Radix UI + shadcn/ui

Fornecem primitives e componentes acessíveis e customizáveis para elementos interativos, como popovers e calendários.

### date-fns + React Day Picker

Utilizados no fluxo de orçamento para seleção e formatação da data do evento.

### Cloudflare + Wrangler

O projeto possui configuração para execução e deploy utilizando a infraestrutura da Cloudflare, com `wrangler.jsonc` definindo o entry point do servidor TanStack Start.

## Qualidade de código

A configuração de qualidade combina TypeScript, ESLint e Prettier.

O TypeScript utiliza `strict: true` e `noEmit: true`, enquanto o ESLint 9 integra regras recomendadas do TypeScript, React Hooks e React Refresh. O Prettier também está integrado à configuração do ESLint.

Scripts disponíveis no projeto:

```bash
npm run build
npm run lint
npm run format
```

Essa divisão mantém build, análise estática e formatação como etapas independentes do ciclo de desenvolvimento.

## Estrutura de referência

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
├── main.tsx
├── router.tsx
├── routeTree.gen.ts
└── styles.css
```

A estrutura favorece uma evolução incremental: novas páginas entram em `routes`, elementos compartilhados em `components/site`, primitives em `components/ui` e conteúdo visual em `assets`.
