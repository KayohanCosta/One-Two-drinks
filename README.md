# 🍸 One Two Drink

> *Um drink, dois goles, três histórias por noite.*

**One Two Drink** é uma plataforma digital premium desenvolvida para um serviço especializado de catering e alta coquetelaria em eventos (casamentos, eventos corporativos e celebrações particulares). O projeto possui uma identidade visual sofisticada sob o conceito **Charcoal & Ember** (Carvão & Brasa), com estética minimalista, tipografia elegante e interações fluidas.

---

## ✨ Principais Funcionalidades

- **Apresentação de Manifesto & Filosofia:** Seções focadas em apresentar o conceito de hospitalidade e excelência em serviços de bar itinerante.
- **Carta de Drinks Curada:** Exibição dividida em três atos (Signatures da casa, Clássicos imortais e Criações sazonais), detalhando ingredientes e conceito de cada coquetel.
- **Galeria Dinâmica de Eventos:** Carregamento inteligente e automático de fotografias reais de eventos agrupadas por celebrações específicas (ex: Aniversários, Casamentos).
- **Formulário de Orçamento Inteligente:** Coleta dados do evento (tipo, data com seletor de calendário, local e número de convidados) e gera automaticamente um redirecionamento personalizado direto para o atendimento via WhatsApp.
- **Página de Contato Integrada:** Atalhos rápidos para WhatsApp, E-mail e Redes Sociais com formulário integrado de envio rápido de mensagens.

---

## 🛠️ Tecnologias Utilizadas

### Core & Framework
- **[React 19](https://react.dev/):** Biblioteca para construção das interfaces de usuário.
- **[TanStack Start](https://tanstack.com/router/v1/docs/start/overview):** Framework full-stack baseado em **TanStack Router** para React, fornecendo roteamento baseado em arquivos, carregamento de metadados de SEO nativo e excelente suporte a SSR/Server Functions.
- **[Vite 7](https://vite.dev/):** Ferramenta de build extremamente rápida para o ecossistema frontend.

### Estilização & Animação
- **[Tailwind CSS v4](https://tailwindcss.com/):** Nova geração do framework utilitário, com processamento CSS de alta performance nativo no Vite e suporte para CSS moderno (como `oklch`).
- **[Framer Motion](https://www.framer.com/motion/):** Para transições de páginas e micro-animações elegantes.
- **[Lucide React](https://lucide.dev/):** Biblioteca moderna de ícones vetoriais.

### UI & Componentes
- **[shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/):** Componentes de interface de alta qualidade, acessíveis e customizáveis (como Accordion, Popover, Dialog, Calendar, Form, etc.).
- **[React Day Picker](https://react-day-picker.js.org/) & [date-fns](https://date-fns.org/):** Para manipulação, formatação de datas e renderização do calendário de seleção de datas nos orçamentos.

### Infraestrutura & Deploy
- **[Cloudflare Pages / Workers](https://pages.cloudflare.com/):** Configuração pronta para deploy em servidores de borda (Edge) através do Wrangler, garantindo latência ultrabaixa e escalabilidade global.

---

## 🎨 Sistema de Design & Identidade Visual

O design do site foi construído sob uma paleta customizada no arquivo `src/styles.css`:

### Cores Base (OKLCH)
- **Background (`--background`):** Um carvão escuro e profundo (`oklch(0.16 0.005 30)`).
- **Foreground (`--foreground`):** Tom claro para legibilidade refinada (`oklch(0.96 0.01 60)`).
- **Primary / Ember (`--primary` / `--ember`):** Brasa vibrante e calorosa (`oklch(0.68 0.19 38)`).

### Tipografia
- **Display (`--font-display`):** `Instrument Serif` (para títulos dramáticos e elegantes com toques em itálico).
- **Body (`--font-body`):** `Work Sans` (sans-serif geométrico moderno para corpos de texto legíveis).

### Efeitos & Classes Utilitárias
- **`.grain`:** Um overlay de ruído sutil no background que confere uma textura orgânica ao site.
- **`.ember-glow`:** Efeito de brilho de brasa aplicado a textos selecionados.
- **`.text-eyebrow`:** Estilo de rótulo superior com letras espaçadas e caixa alta.

---

## 📂 Estrutura do Projeto

```text
├── .git/
├── One Two Drink/            # Imagens originais dos eventos organizadas por pasta
├── public/                   # Arquivos estáticos globais
├── src/
│   ├── assets/               # Imagens, fotos de drinks e fotos de eventos agrupadas
│   │   └── events/           # Fotos organizadas por subpastas (importação automática via glob)
│   ├── components/
│   │   ├── site/             # Componentes globais da página (Header, Footer, Layout, PageHero)
│   │   └── ui/               # Componentes atômicos do shadcn/ui
│   ├── hooks/                # Hooks customizados reutilizáveis
│   ├── lib/                  # Utilitários (ex: configuração de estilos do shadcn/ui)
│   ├── routes/               # Roteamento baseado em arquivos (File-based routing) do TanStack
│   │   ├── __root.tsx        # Layout raiz/envelope da aplicação (HTML/Head geral)
│   │   ├── index.tsx         # Página Inicial
│   │   ├── sobre.tsx         # A História e Conceito
│   │   ├── drinks.tsx        # Carta de Coquetéis
│   │   ├── eventos.tsx       # Formulário de Orçamentos
│   │   ├── galeria.tsx       # Galeria de eventos (agrupa fotos automaticamente)
│   │   └── contato.tsx       # Fale Conosco / Redes Sociais
│   ├── main.tsx              # Entrada da aplicação (React DOM render)
│   ├── router.tsx            # Configuração e instanciamento do TanStack Router
│   ├── routeTree.gen.ts      # Árvore de rotas gerada automaticamente pelo TanStack
│   └── styles.css            # Folha de estilos global do Tailwind v4 & Tokens de design
├── wrangler.jsonc            # Configuração de deploy no Cloudflare Pages/Workers
├── vite.config.ts            # Configurações do Vite e plugins do TanStack & Tailwind
├── package.json              # Gerenciador de dependências e scripts
└── tsconfig.json             # Configuração do TypeScript
```

---

## 🚀 Como Executar Localmente

Você pode rodar este projeto utilizando o gerenciador de pacotes de sua escolha (como **Bun** ou **NPM**).

### 1. Clonar o repositório
```bash
git clone https://github.com/KayohanCosta/One-Two-drinks.git
cd One-Two-drinks
```

### 2. Instalar as dependências

Se estiver usando **Bun**:
```bash
bun install
```

Se estiver usando **NPM**:
```bash
npm install
```

### 3. Rodar em modo de desenvolvimento
```bash
bun dev
# ou
npm run dev
```
A aplicação iniciará o servidor localmente (geralmente em `http://localhost:3000` ou similar indicado no terminal).

### 4. Build de produção
Para testar a build otimizada final:
```bash
bun run build
# ou
npm run build
```

---

## 🌐 Deploy no Cloudflare Pages

O projeto está configurado para deploy imediato no Cloudflare. O arquivo `wrangler.jsonc` gerencia o entry point de servidor nativo do TanStack Start (`@tanstack/react-start/server-entry`).

Para testar o deploy local com o Wrangler:
```bash
bunx wrangler pages dev
# ou
npx wrangler pages dev
```
