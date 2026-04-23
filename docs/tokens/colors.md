# Tokens de Cores

O pacote provê um sistema de cores semântico dividido em três categorias: **Fill** (preenchimento), **Text** (texto) e **Border** (borda). Cada categoria possui variantes por contexto e nível de intensidade.

## Como Acessar

### Via funções utilitárias (recomendado)

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

.element {
  // Cor de fundo
  background-color: utils.color("fill", "interaction", "pure");

  // Cor de texto
  color: utils.text-color("neutral", "pure");

  // Cor de borda
  border-color: utils.border-color("neutral", "high");
}
```

### Via variáveis de token diretamente

```scss
@use "@tbdcagro/styles/scss/no-reset" as tokens;

.element {
  color: tokens.$colors-semantic-text-neutral-pure;
}
```

---

## Categoria: Fill (Preenchimento)

Usada para fundos de elementos, botões, cards, etc.

### `utils.color($category, $variant, $level)`

| Parâmetro | Tipo | Descrição |
|---|---|---|
| `$category` | `string` | Grupo da cor: `"fill"`, `"interaction"`, `"feedback"` |
| `$variant` | `string` | Variante semântica: `"interaction"`, `"neutral"`, `"success"`, `"warning"`, `"danger"` |
| `$level` | `string` | Nível: `"pure"`, `"high"`, `"medium"`, `"low"` |

**Exemplos:**

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

// Botão primário (fundo de ação)
.btn-primary {
  background-color: utils.color("fill", "interaction", "pure");
}

// Fundo de alerta de sucesso
.alert-success {
  background-color: utils.color("fill", "success", "low");
}

// Fundo de alerta de perigo
.alert-danger {
  background-color: utils.color("fill", "danger", "low");
}
```

---

## Categoria: Text (Texto)

### `utils.text-color($variant, $level)`

| Parâmetro | Tipo | Descrição |
|---|---|---|
| `$variant` | `string` | Variante: `"neutral"`, `"interaction"`, `"success"`, `"warning"`, `"danger"` |
| `$level` | `string` | Nível: `"pure"`, `"high"`, `"medium"`, `"low"` |

**Exemplos:**

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

// Texto principal
p {
  color: utils.text-color("neutral", "pure");
}

// Texto de link interativo
a {
  color: utils.text-color("interaction", "pure");
}

// Texto de mensagem de erro
.error-message {
  color: utils.text-color("danger", "pure");
}
```

---

## Categoria: Border (Borda)

### `utils.border-color($variant, $level)`

| Parâmetro | Tipo | Descrição |
|---|---|---|
| `$variant` | `string` | Variante: `"neutral"`, `"interaction"`, `"success"`, `"warning"`, `"danger"` |
| `$level` | `string` | Nível: `"high"`, `"medium"`, `"low"` |

**Exemplos:**

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

// Borda padrão de input
.input {
  border-color: utils.border-color("neutral", "high");
}

// Borda de input com foco
.input:focus {
  border-color: utils.border-color("interaction", "pure");
}

// Borda de campo com erro
.input--error {
  border-color: utils.border-color("danger", "pure");
}
```

---

## Exemplo Completo: Botão

```scss
@use "@tbdcagro/styles/scss/utils" as utils;

.button {
  background-color: utils.color("fill", "interaction", "pure");
  color: utils.text-color("neutral", "pure");
  border: 1px solid utils.border-color("neutral", "high");

  &:hover {
    background-color: utils.color("fill", "interaction", "high");
  }

  &[disabled] {
    @include utils.disabled();
  }
}
```
