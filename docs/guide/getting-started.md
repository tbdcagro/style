# Instalação

## Requisitos

- Node.js 16+
- Um bundler com suporte a SCSS (Vite, Next.js, Webpack etc.)
- `sass` ou `sass-embedded` instalado no seu projeto

## Instalando o pacote

::: code-group

```sh [pnpm]
pnpm add @tbdcagro/styles
```

```sh [npm]
npm install @tbdcagro/styles
```

```sh [yarn]
yarn add @tbdcagro/styles
```

:::

---

## Uso rápido

### Em projetos com SCSS

Importe o ponto de entrada principal no seu arquivo de estilos global:

```scss
// styles/globals.scss
@use "@tbdcagro/styles/scss";
```

Isso carrega os **tokens** (cores, tipografia, espaçamentos) **e** o reset global de CSS.

Se você não quiser o reset, use a entrada `no-reset`:

```scss
@use "@tbdcagro/styles/scss/no-reset" as tokens;
```

### Em projetos sem SCSS (CSS puro)

```html
<!-- index.html -->
<link rel="stylesheet" href="node_modules/@tbdcagro/styles/css/index.css" />
```

Ou importe via JavaScript/TypeScript:

```ts
import '@tbdcagro/styles/css'
```

---

## Próximos passos

- Conheça os [Pontos de Entrada](/guide/entry-points) disponíveis
- Explore os [Tokens de Cores](/tokens/colors), [Tipografia](/tokens/typography) e [Espaçamentos](/tokens/spacing)
- Veja como usar os [Utilitários (Funções e Mixins)](/utils/functions)
