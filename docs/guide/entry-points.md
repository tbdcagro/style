# Pontos de Entrada

O pacote `@tbdcagro/styles` expõe diferentes pontos de entrada dependendo do contexto de uso. Escolha o que se adapta melhor ao seu projeto.

## Tabela de Entradas

| Caminho | O que inclui | Quando usar |
|---|---|---|
| `@tbdcagro/styles/css` | CSS compilado + reset global | Projetos sem SCSS |
| `@tbdcagro/styles/scss` | Tokens + reset global | Entrada principal SCSS |
| `@tbdcagro/styles/scss/no-reset` | Tokens, sem reset global | Apps que já têm reset próprio |
| `@tbdcagro/styles/scss/utils` | Funções e mixins (sem CSS gerado) | Componentes individuais |

---

## `scss` — Entrada Principal

Carrega todos os tokens e aplica o reset global de CSS. Use **uma única vez** no arquivo de estilos global da aplicação.

```scss
// styles/globals.scss
@use "@tbdcagro/styles/scss";
```

::: warning Atenção
Não importe esta entrada em múltiplos arquivos. O reset e os tokens base seriam injetados repetidamente no CSS final.
:::

---

## `scss/no-reset` — Sem Reset Global

Ideal quando sua aplicação já possui um reset próprio (ex: Normalize.css, reset do Tailwind, etc.).

```scss
@use "@tbdcagro/styles/scss/no-reset" as tokens;

.card {
  padding: tokens.$spacing-lg;
  color: tokens.$colors-semantic-text-primary;
}
```

---

## `scss/utils` — Somente Utilitários

Este ponto de entrada **não gera CSS algum** por si só. Ele expõe apenas as funções e mixins para uso nos seus componentes. É seguro importar em qualquer arquivo SCSS sem se preocupar com duplicação de CSS.

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

.button {
  background-color: utils.color("fill", "interaction", "pure");
  color: utils.text-color("neutral", "pure");

  @include utils.disabled();
}
```

---

## `css` — CSS Compilado

Para projetos que não utilizam SCSS. O CSS já está compilado e inclui o reset global.

```ts
// main.ts ou app.tsx
import '@tbdcagro/styles/css'
```

Ou via tag `<link>` no HTML:

```html
<link rel="stylesheet" href="node_modules/@tbdcagro/styles/css/index.css" />
```

---

## Uso em Next.js e Vite

Recomenda-se importar os estilos globais uma única vez no layout raiz da aplicação:

::: code-group

```scss [styles/globals.scss]
// Sem reset (recomendado se o framework já provê um)
@use "@tbdcagro/styles/scss/no-reset";
```

```tsx [app/layout.tsx (Next.js)]
import "@/styles/globals.scss";

export default function RootLayout({ children }) {
  return <html><body>{children}</body></html>
}
```

```ts [main.ts (Vite)]
import './styles/globals.scss'
```

:::

Depois, nos componentes, use apenas `scss/utils` para acessar tokens e mixins sem gerar CSS extra:

```scss
// components/Button.module.scss
@use "@tbdcagro/styles/scss/utils" as utils;

.button {
  background-color: utils.color("fill", "interaction", "pure");
  @include utils.typography("label", "medium");
}
```
