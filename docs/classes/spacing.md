# Classes de Espaçamento

Classes utilitárias para `margin`, `padding` e `gap`, geradas a partir do mapa `$spacing-list`.

**Escala disponível:** `0`, `2`, `4`, `8`, `12`, `16`, `20`, `24`, `32`, `40`, `48`, `56`, `64`, `80`

---

## Sintaxe

| Atalho | Propriedade |
|---|---|
| `m` | margin |
| `p` | padding |
| `t` | top |
| `b` | bottom |
| `l` | left |
| `r` | right |
| `x` | horizontal (left + right) |
| `y` | vertical (top + bottom) |
| `gap` | gap (em contexto flex/grid) |

**Formato:** `.{prefixo}{direção?}-{valor}`

---

## Margin

```html
<!-- Margin em todos os lados -->
<div class="m-16">...</div>

<!-- Margin por direção -->
<div class="mt-8">...</div>   <!-- margin-top: 8px -->
<div class="mb-24">...</div>  <!-- margin-bottom: 24px -->
<div class="ml-4">...</div>   <!-- margin-left: 4px -->
<div class="mr-4">...</div>   <!-- margin-right: 4px -->

<!-- Margin horizontal e vertical -->
<div class="mx-16">...</div>  <!-- margin-left + right: 16px -->
<div class="my-24">...</div>  <!-- margin-top + bottom: 24px -->

<!-- Margin auto -->
<div class="mx-auto">...</div> <!-- centralizar horizontalmente -->
<div class="mt-auto">...</div>
```

---

## Padding

```html
<!-- Padding em todos os lados -->
<div class="p-16">...</div>

<!-- Padding por direção -->
<div class="pt-8">...</div>
<div class="pb-24">...</div>
<div class="pl-12">...</div>
<div class="pr-12">...</div>

<!-- Padding horizontal e vertical -->
<div class="px-16">...</div>  <!-- padding-left + right: 16px -->
<div class="py-8">...</div>   <!-- padding-top + bottom: 8px -->
```

---

## Gap

```html
<!-- Gap em container flex/grid -->
<div class="is-flex gap-8">...</div>
<div class="is-flex gap-16">...</div>
<div class="is-flex gap-24">...</div>
```

---

## Tabela completa de valores

| Classe (margin) | Classe (padding) | Valor |
|---|---|---|
| `.m-0` / `.mt-0` etc | `.p-0` / `.pt-0` etc | `0` |
| `.m-2` | `.p-2` | `2px` |
| `.m-4` | `.p-4` | `4px` |
| `.m-8` | `.p-8` | `8px` |
| `.m-12` | `.p-12` | `12px` |
| `.m-16` | `.p-16` | `16px` |
| `.m-20` | `.p-20` | `20px` |
| `.m-24` | `.p-24` | `24px` |
| `.m-32` | `.p-32` | `32px` |
| `.m-40` | `.p-40` | `40px` |
| `.m-48` | `.p-48` | `48px` |
| `.m-56` | `.p-56` | `56px` |
| `.m-64` | `.p-64` | `64px` |
| `.m-80` | `.p-80` | `80px` |

---

## Exemplo completo

```html
<!-- Toolbar com layout flex e espaçamentos -->
<div class="is-flex justify-between align-center px-16 py-12 shadow-soft border-radius-small">
  <span class="typography-subtitle-medium-highlight">Dashboard</span>
  <div class="is-flex align-center gap-8">
    <button class="px-16 py-8 border-radius-small">Cancelar</button>
    <button class="px-16 py-8 border-radius-small color-background-fill-brand-pure">Salvar</button>
  </div>
</div>
```
