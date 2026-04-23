# Classes de Flex

Classes utilitárias para layout flexbox, geradas a partir de `flex.scss`.

---

## Display

| Classe | CSS |
|---|---|
| `.is-flex` | `display: flex` |
| `.is-flex-column` | `display: flex; flex-direction: column` |
| `.is-inline-flex` | `display: inline-flex` |

---

## Justify Content

| Classe | CSS |
|---|---|
| `.justify-between` | `justify-content: space-between` |
| `.justify-around` | `justify-content: space-around` |
| `.justify-center` | `justify-content: center` |
| `.justify-start` | `justify-content: flex-start` |
| `.justify-end` | `justify-content: flex-end` |

---

## Align Items

| Classe | CSS |
|---|---|
| `.align-center` | `align-items: center` |
| `.align-end` | `align-items: flex-end` |

---

## Align Self

| Classe | CSS |
|---|---|
| `.align-self-center` | `align-self: center` |
| `.align-self-stretch` | `align-self: stretch` |
| `.align-self-start` | `align-self: start` |
| `.align-self-end` | `align-self: end` |

---

## Flex Direction

| Classe | CSS |
|---|---|
| `.flex-row` | `flex-direction: row` |
| `.flex-row-reverse` | `flex-direction: row-reverse` |
| `.flex-column` | `flex-direction: column` |
| `.flex-column-reverse` | `flex-direction: column-reverse` |

---

## Flex Wrap

| Classe | CSS |
|---|---|
| `.flex-wrap` | `flex-wrap: wrap` |
| `.flex-nowrap` | `flex-wrap: nowrap` |
| `.flex-wrap-reverse` | `flex-wrap: wrap-reverse` |

---

## Flex Grow / Shrink

| Classe | CSS |
|---|---|
| `.flex-grow-0` | `flex-grow: 0` |
| `.flex-grow-1` | `flex-grow: 1` |
| `.flex-shrink-0` | `flex-shrink: 0` |
| `.flex-shrink-1` | `flex-shrink: 1` |

---

## Flex Basis

| Classe | CSS |
|---|---|
| `.flex-basis-auto` | `flex-basis: auto` |
| `.flex-basis-0` | `flex-basis: 0` |
| `.flex-basis-full` | `flex-basis: 100%` |

---

## Flex Proporções (shorthand)

| Classe | CSS |
|---|---|
| `.flex-0` | `flex: 0 0 auto` |
| `.flex-1` | `flex: 1 1 0%` |
| `.flex-2` | `flex: 2 1 0%` |
| `.flex-3` | `flex: 3 1 0%` |
| `.flex-auto` | `flex: 1 1 auto` |
| `.flex-initial` | `flex: 0 1 auto` |
| `.flex-none` | `flex: none` |

---

## Order

Classes `.order-0` até `.order-10`, mais:

| Classe | CSS |
|---|---|
| `.order-first` | `order: -9999` |
| `.order-last` | `order: 9999` |

---

## Exemplos de uso

```html
<!-- Linha com espaçamento entre elementos e alinhamento central -->
<div class="is-flex justify-between align-center">
  <span>Título</span>
  <button>Ação</button>
</div>

<!-- Coluna centralizada -->
<div class="is-flex-column align-center justify-center gap-16">
  <h2>Título</h2>
  <p>Descrição</p>
</div>

<!-- Layout de grid com proporções -->
<div class="is-flex gap-16">
  <div class="flex-1">Coluna principal</div>
  <div class="flex-0" style="width:200px">Sidebar</div>
</div>

<!-- Reordenamento -->
<div class="is-flex">
  <div class="order-last">Aparece por último</div>
  <div class="order-first">Aparece primeiro</div>
  <div>Aparece no meio</div>
</div>
```
