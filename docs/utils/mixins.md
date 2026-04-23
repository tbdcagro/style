# Mixins

Os mixins do `@tbdcagro/styles` encapsulam padrões de estilo recorrentes e complexos, facilitando a aplicação consistente de tipografia, estados de interação e elementos de UI.

## Importação

```scss
@use "@tbdcagro/styles/scss/utils" as utils;
```

---

## `utils.typography()`

Aplica um conjunto completo de propriedades tipográficas de uma vez: `font-size`, `font-weight`, `line-height` e `letter-spacing`.

### Assinatura

```scss
@include utils.typography($scale, $variant);
```

| Parâmetro | Tipo | Valores aceitos |
|---|---|---|
| `$scale` | `string` | `"heading"`, `"paragraph"`, `"label"`, `"caption"` |
| `$variant` | `string` | Variante dentro da escala (ex: `"large"`, `"medium-mid"`, `"small"`) |

### Exemplos

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

// Títulos
h1 { @include utils.typography("heading", "large"); }
h2 { @include utils.typography("heading", "medium"); }
h3 { @include utils.typography("heading", "small"); }

// Corpo de texto
p { @include utils.typography("paragraph", "medium-mid"); }
small { @include utils.typography("paragraph", "small"); }

// Interface
.button { @include utils.typography("label", "medium"); }
.badge  { @include utils.typography("label", "small"); }

// Auxiliares
.helper { @include utils.typography("caption", "regular"); }
```

---

## `utils.disabled()`

Aplica o conjunto padrão de estilos para o **estado desabilitado** de um elemento interativo: opacidade reduzida, cursor bloqueado e prevenção de eventos de ponteiro.

### Assinatura

```scss
@include utils.disabled();
```

### Exemplo

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

.button[disabled],
.button--disabled {
  @include utils.disabled();
}

.input:disabled {
  @include utils.disabled();
}
```

::: tip
Use este mixin para qualquer elemento interativo que possa ter um estado desabilitado. Ele garante consistência visual e de acessibilidade (cursor: not-allowed) em toda a aplicação.
:::

---

## `utils.scrollbar()`

Estiliza a scrollbar de um container com o visual personalizado do design system.

### Assinatura

```scss
@include utils.scrollbar();
```

### Exemplo

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

.sidebar {
  overflow-y: auto;
  @include utils.scrollbar();
}

.modal__content {
  max-height: 60vh;
  overflow-y: scroll;
  @include utils.scrollbar();
}

.data-table-wrapper {
  overflow-x: auto;
  @include utils.scrollbar();
}
```

---

## Exemplo Completo: Componente de Botão

Um botão completo usando os mixins e funções em conjunto:

```scss
@use "@tbdcagro/styles/scss/utils" as utils;
@use "@tbdcagro/styles/scss/no-reset" as tokens;

.button {
  // Tipografia
  @include utils.typography("label", "medium");

  // Espaçamento
  padding: tokens.$spacing-sm tokens.$spacing-md;

  // Cores
  background-color: utils.color("fill", "interaction", "pure");
  color: utils.text-color("neutral", "pure");
  border: 1px solid transparent;

  // Layout
  display: inline-flex;
  align-items: center;
  gap: tokens.$spacing-xs;
  border-radius: 4px;
  cursor: pointer;

  // Hover
  &:hover {
    background-color: utils.color("fill", "interaction", "high");
  }

  // Estado desabilitado
  &:disabled,
  &--disabled {
    @include utils.disabled();
  }

  // Variante outline
  &--outline {
    background-color: transparent;
    border-color: utils.border-color("interaction", "pure");
    color: utils.text-color("interaction", "pure");
  }
}
```

---

## Exemplo Completo: Sidebar com Scroll Customizado

```scss
@use "@tbdcagro/styles/scss/utils" as utils;
@use "@tbdcagro/styles/scss/no-reset" as tokens;

.sidebar {
  width: 260px;
  height: 100vh;
  overflow-y: auto;
  padding: tokens.$spacing-lg tokens.$spacing-md;
  background-color: utils.color("fill", "neutral", "low");

  @include utils.scrollbar();

  &__title {
    @include utils.typography("label", "small");
    color: utils.text-color("neutral", "medium");
    margin-bottom: tokens.$spacing-sm;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  &__item {
    @include utils.typography("paragraph", "medium-mid");
    color: utils.text-color("neutral", "high");
    padding: tokens.$spacing-xs tokens.$spacing-sm;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: utils.color("fill", "neutral", "medium");
    }

    &--active {
      background-color: utils.color("fill", "interaction", "low");
      color: utils.text-color("interaction", "pure");
    }

    &--disabled {
      @include utils.disabled();
    }
  }
}
```
