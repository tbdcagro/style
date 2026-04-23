# Tokens de Tipografia

O sistema de tipografia do `@tbdcagro/styles` é acessado principalmente via mixin `utils.typography()`, que aplica de forma conjunta todas as propriedades de uma escala tipográfica: `font-size`, `font-weight`, `line-height` e `letter-spacing`.

## Como Usar

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

.elemento {
  @include utils.typography($scale, $variant);
}
```

---

## Mixin `typography`

### Assinatura

```scss
@include utils.typography($scale, $variant);
```

| Parâmetro | Tipo | Descrição |
|---|---|---|
| `$scale` | `string` | Escala tipográfica: `"heading"`, `"paragraph"`, `"label"`, `"caption"` |
| `$variant` | `string` | Tamanho/variante dentro da escala (ex: `"large"`, `"medium-mid"`, `"small"`) |

---

## Escala: Heading (Títulos)

Usada para títulos e subtítulos de seções.

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

h1 { @include utils.typography("heading", "large"); }
h2 { @include utils.typography("heading", "medium"); }
h3 { @include utils.typography("heading", "small"); }
```

---

## Escala: Paragraph (Parágrafos)

Usada para textos de corpo, descrições e conteúdos.

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

.body-text {
  @include utils.typography("paragraph", "medium-mid");
}

.body-text--small {
  @include utils.typography("paragraph", "small");
}
```

---

## Escala: Label (Rótulos)

Usada para botões, labels de formulários, badges e elementos de interface.

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

.button {
  @include utils.typography("label", "medium");
}

.badge {
  @include utils.typography("label", "small");
}
```

---

## Escala: Caption (Legendas)

Usada para textos auxiliares, mensagens de erro, hints e textos de suporte.

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

.helper-text {
  @include utils.typography("caption", "regular");
}

.error-message {
  @include utils.typography("caption", "small");
}
```

---

## Exemplo Completo: Card com Hierarquia Tipográfica

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

.card {
  &__title {
    @include utils.typography("heading", "small");
    color: utils.text-color("neutral", "pure");
  }

  &__body {
    @include utils.typography("paragraph", "medium-mid");
    color: utils.text-color("neutral", "high");
  }

  &__label {
    @include utils.typography("label", "small");
    color: utils.text-color("interaction", "pure");
  }

  &__caption {
    @include utils.typography("caption", "regular");
    color: utils.text-color("neutral", "medium");
  }
}
```

---

::: tip Dica
Sempre use o mixin `utils.typography()` em vez de definir `font-size`, `line-height` etc. manualmente. Isso garante consistência com o design system e facilita atualizações futuras.
:::
