# Boas Práticas

## Prefira sempre `@use` em vez de `@import`

O `@import` do Sass é **legado** e será removido em versões futuras. O `@use` oferece:

- Namespaces explícitos (sem poluição de variáveis global)
- Carregamento único por arquivo (sem duplicação de CSS)
- Melhor performance de compilação

```scss
// ✅ Correto
@use "@tbdcagro/styles/scss/utils" as utils;

// ❌ Evitar
@import "@tbdcagro/styles/scss/utils";
```

---

## Use `scss/utils` nos componentes, nunca `scss`

O ponto de entrada `scss` gera CSS (tokens + reset). Se importado em vários componentes, o output CSS será duplicado.

```scss
// ✅ Em componentes — sem CSS gerado, só funções e mixins
@use "@tbdcagro/styles/scss/utils" as utils;

// ❌ Em componentes — gera CSS duplicado em cada arquivo
@use "@tbdcagro/styles/scss";
```

---

## Importe os estilos globais uma única vez

Seja em `app/layout.tsx`, `_app.tsx`, `main.ts` ou equivalente, os estilos base devem ser carregados **uma vez só**.

```ts
// ✅ Em um único ponto de entrada da aplicação
import "@/styles/globals.scss";
```

---

## Estrutura recomendada de projeto

```
styles/
├── globals.scss          ← @use "@tbdcagro/styles/scss/no-reset"
└── components/
    ├── button.scss       ← @use "@tbdcagro/styles/scss/utils" as utils
    └── card.scss         ← @use "@tbdcagro/styles/scss/utils" as utils
```

---

## Use aliases com `as` para clareza

Nomear o namespace torna o código mais legível:

```scss
@use "@tbdcagro/styles/scss/utils" as utils;
@use "@tbdcagro/styles/scss/no-reset" as tokens;

.my-component {
  padding: tokens.$spacing-md;
  color: utils.text-color("neutral", "pure");
}
```

---

## Evite referenciar variáveis internas diretamente

Prefira sempre as **funções utilitárias** (`utils.color()`, `utils.text-color()`, etc.) em vez de acessar variáveis de token diretamente. As funções adicionam validação e são mais resistentes a mudanças na estrutura interna dos tokens.

```scss
// ✅ Preferido — usa a função utilitária
color: utils.text-color("neutral", "pure");

// ⚠️ Funciona, mas mais frágil
color: tokens.$colors-semantic-text-neutral-pure;
```
