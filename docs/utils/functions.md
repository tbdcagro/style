# Funções Utilitárias

O módulo `scss/utils` expõe funções SCSS para acessar tokens de forma segura e expressiva. Todas as funções retornam valores CSS — não geram blocos de estilo por conta própria.

## Importação

```scss
@use "@tbdcagro/styles/scss/utils" as utils;
```

---

## `utils.color()`

Retorna uma cor de **preenchimento** (background, fill) do sistema de tokens semânticos.

### Assinatura

```scss
utils.color($category, $variant, $level)
```

| Parâmetro | Tipo | Valores aceitos |
|---|---|---|
| `$category` | `string` | `"fill"` |
| `$variant` | `string` | `"interaction"`, `"neutral"`, `"success"`, `"warning"`, `"danger"` |
| `$level` | `string` | `"pure"`, `"high"`, `"medium"`, `"low"` |

### Exemplos

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

.btn-primary {
  background-color: utils.color("fill", "interaction", "pure");
}

.success-bg {
  background-color: utils.color("fill", "success", "low");
}

.warning-badge {
  background-color: utils.color("fill", "warning", "medium");
}
```

---

## `utils.text-color()`

Retorna uma cor de **texto** do sistema de tokens.

### Assinatura

```scss
utils.text-color($variant, $level)
```

| Parâmetro | Tipo | Valores aceitos |
|---|---|---|
| `$variant` | `string` | `"neutral"`, `"interaction"`, `"success"`, `"warning"`, `"danger"` |
| `$level` | `string` | `"pure"`, `"high"`, `"medium"`, `"low"` |

### Exemplos

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

body {
  color: utils.text-color("neutral", "pure");
}

a {
  color: utils.text-color("interaction", "pure");
}

.error {
  color: utils.text-color("danger", "pure");
}
```

---

## `utils.border-color()`

Retorna uma cor de **borda** do sistema de tokens.

### Assinatura

```scss
utils.border-color($variant, $level)
```

| Parâmetro | Tipo | Valores aceitos |
|---|---|---|
| `$variant` | `string` | `"neutral"`, `"interaction"`, `"success"`, `"warning"`, `"danger"` |
| `$level` | `string` | `"high"`, `"medium"`, `"low"` |

### Exemplos

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

.input {
  border: 1px solid utils.border-color("neutral", "high");
}

.input:focus {
  border-color: utils.border-color("interaction", "pure");
}

.input--invalid {
  border-color: utils.border-color("danger", "pure");
}
```

---

## Usando as funções juntas

As funções foram projetadas para trabalhar em conjunto, cobrindo todos os aspectos visuais de um componente:

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

.input-field {
  background-color: utils.color("fill", "neutral", "low");
  color: utils.text-color("neutral", "pure");
  border: 1px solid utils.border-color("neutral", "high");
  border-radius: 4px;

  &::placeholder {
    color: utils.text-color("neutral", "medium");
  }

  &:focus {
    background-color: utils.color("fill", "neutral", "pure");
    border-color: utils.border-color("interaction", "pure");
    outline: none;
  }

  &--error {
    border-color: utils.border-color("danger", "pure");
    color: utils.text-color("danger", "pure");
  }
}
```

---

::: tip
Prefira as funções `utils.color()`, `utils.text-color()` e `utils.border-color()` em vez de acessar variáveis de token diretamente. As funções oferecem uma camada de semântica e são mais resilientes a mudanças internas nos tokens.
:::
