# Tokens de Espaçamento

Os tokens de espaçamento padronizam margens, paddings e gaps em toda a aplicação, garantindo consistência visual alinhada ao design system da TBDC Agro.

## Como Acessar

Os tokens de espaçamento são variáveis SCSS acessíveis via o ponto de entrada `no-reset` ou `scss`:

```scss
@use "@tbdcagro/styles/scss/no-reset" as tokens;

.element {
  padding: tokens.$spacing-md;
  margin-bottom: tokens.$spacing-lg;
  gap: tokens.$spacing-sm;
}
```

---

## Escala de Espaçamentos

Os tokens seguem uma escala crescente com nomes semânticos:

| Token | Descrição | Uso sugerido |
|---|---|---|
| `$spacing-xs` | Extra pequeno | Gaps internos mínimos, ícones |
| `$spacing-sm` | Pequeno | Espaçamento entre elementos inline |
| `$spacing-md` | Médio | Padding interno de componentes |
| `$spacing-lg` | Grande | Padding de cards, seções |
| `$spacing-xl` | Extra grande | Espaçamento entre seções |
| `$spacing-2xl` | 2x extra grande | Margens de layout, espaços maiores |

---

## Exemplos de Uso

### Padding em componentes

```scss
@use "@tbdcagro/styles/scss/no-reset" as tokens;

.card {
  padding: tokens.$spacing-lg;
}

.button {
  padding: tokens.$spacing-sm tokens.$spacing-md;
}

.badge {
  padding: tokens.$spacing-xs tokens.$spacing-sm;
}
```

### Gap em layouts flex/grid

```scss
@use "@tbdcagro/styles/scss/no-reset" as tokens;

.form {
  display: flex;
  flex-direction: column;
  gap: tokens.$spacing-md;
}

.toolbar {
  display: flex;
  align-items: center;
  gap: tokens.$spacing-sm;
}
```

### Margens entre seções

```scss
@use "@tbdcagro/styles/scss/no-reset" as tokens;

.page-section {
  margin-bottom: tokens.$spacing-xl;
}

.page-section + .page-section {
  margin-top: tokens.$spacing-2xl;
}
```

---

## Combinando com Utils

É possível combinar o acesso a tokens de espaçamento com as funções de cor e os mixins de tipografia:

```scss
@use "@tbdcagro/styles/scss/utils" as utils;
@use "@tbdcagro/styles/scss/no-reset" as tokens;

.alert {
  padding: tokens.$spacing-md tokens.$spacing-lg;
  background-color: utils.color("fill", "warning", "low");
  border-left: 3px solid utils.border-color("warning", "pure");
  border-radius: 4px;

  &__title {
    @include utils.typography("label", "medium");
    color: utils.text-color("warning", "pure");
  }

  &__message {
    @include utils.typography("paragraph", "small");
    color: utils.text-color("neutral", "high");
    margin-top: tokens.$spacing-xs;
  }
}
```

---

::: tip Consistência no Layout
Evite usar valores de espaçamento hardcoded (ex: `padding: 16px`). Sempre prefira os tokens para garantir consistência e facilitar ajustes globais no futuro.
:::
