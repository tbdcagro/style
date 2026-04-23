# Classes de Borda

## Espessura — `border-weight-{tamanho}`

Aplica uma borda com a espessura definida e cor `$color-border-main` (`#1d1d1b`). Funciona para todos os lados ou por direção.

| Classe | CSS | Valor |
|---|---|---|
| `.border-weight-none` | `border: 0px solid ...` | 0px |
| `.border-weight-xsmall` | `border: 1px solid ...` | 1px |
| `.border-weight-small` | `border: 1.5px solid ...` | 1.5px |
| `.border-weight-medium` | `border: 2px solid ...` | 2px |
| `.border-weight-large` | `border: 2.5px solid ...` | 2.5px |

### Por direção

```html
<!-- Borda em todos os lados -->
<div class="border-weight-small">...</div>

<!-- Só no topo -->
<div class="border-weight-top-small">...</div>

<!-- Só embaixo -->
<div class="border-weight-bottom-small">...</div>

<!-- Só à esquerda -->
<div class="border-weight-left-small">...</div>

<!-- Só à direita -->
<div class="border-weight-right-small">...</div>

<!-- Horizontal (esquerda + direita) -->
<div class="border-weight-x-small">...</div>

<!-- Vertical (topo + baixo) -->
<div class="border-weight-y-small">...</div>
```

---

## Cor de Borda — `color-border-{variante}`

Sobrescreve a cor da borda já aplicada. Use em conjunto com `border-weight-*`.

<div class="border-preview-group">
  <div class="border-preview-row">
    <div class="border-box" style="border:2px solid #1d1d1b"></div>
    <code>.color-border-main</code><span class="border-hex">#1d1d1b (gray-900)</span>
  </div>
  <div class="border-preview-row">
    <div class="border-box" style="border:2px solid #ebebea"></div>
    <code>.color-border-divider</code><span class="border-hex">#ebebea (gray-100)</span>
  </div>
  <div class="border-preview-row">
    <div class="border-box" style="border:2px solid #c9c9c6"></div>
    <code>.color-border-disabled</code><span class="border-hex">#c9c9c6 (gray-200)</span>
  </div>
  <div class="border-preview-row">
    <div class="border-box" style="border:2px solid #ebebea"></div>
    <code>.color-border-neutral-pure</code><span class="border-hex">#ebebea (gray-100)</span>
  </div>
  <div class="border-preview-row">
    <div class="border-box" style="border:2px solid #b1b1ad"></div>
    <code>.color-border-neutral-high</code><span class="border-hex">#b1b1ad (gray-400)</span>
  </div>
  <div class="border-preview-row">
    <div class="border-box" style="border:2px solid #004730"></div>
    <code>.color-border-brand-pure</code><span class="border-hex">#004730 (green-800)</span>
  </div>
  <div class="border-preview-row">
    <div class="border-box" style="border:2px solid #00754e"></div>
    <code>.color-border-interaction-pure</code><span class="border-hex">#00754e (teal-600)</span>
  </div>
  <div class="border-preview-row">
    <div class="border-box" style="border:2px solid #f04438"></div>
    <code>.color-border-error-pure</code><span class="border-hex">#f04438 (red-500)</span>
  </div>
  <div class="border-preview-row">
    <div class="border-box" style="border:2px solid #039855"></div>
    <code>.color-border-success-pure</code><span class="border-hex">#039855 (mint-600)</span>
  </div>
  <div class="border-preview-row">
    <div class="border-box" style="border:2px solid #f79009"></div>
    <code>.color-border-warning-pure</code><span class="border-hex">#f79009 (yellow-500)</span>
  </div>
  <div class="border-preview-row">
    <div class="border-box" style="border:2px solid #1570ef"></div>
    <code>.color-border-info-pure</code><span class="border-hex">#1570ef (blue-600)</span>
  </div>
</div>

### Exemplo combinado

```html
<div class="border-weight-small color-border-divider">
  Card com borda divider
</div>

<input class="border-weight-xsmall color-border-neutral-high" />

<input class="border-weight-small color-border-error-pure" />
```

---

## Border Radius — `border-radius-{tamanho}`

| Classe | Valor |
|---|---|
| `.border-radius-none` | 0px |
| `.border-radius-small` | 8px |
| `.border-radius-medium` | 16px |
| `.border-radius-large` | 24px |
| `.border-radius-pill` | 48px |
| `.border-radius-circle` | 100% |

<div class="radius-preview-group">
  <div class="radius-box" style="border-radius:0px">none<br><span>0px</span></div>
  <div class="radius-box" style="border-radius:8px">small<br><span>8px</span></div>
  <div class="radius-box" style="border-radius:16px">medium<br><span>16px</span></div>
  <div class="radius-box" style="border-radius:24px">large<br><span>24px</span></div>
  <div class="radius-box" style="border-radius:48px">pill<br><span>48px</span></div>
  <div class="radius-box" style="border-radius:100%;width:72px;height:72px">circle<br><span>100%</span></div>
</div>

<style>
.border-preview-group {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
}
.border-preview-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--vp-c-divider);
}
.border-preview-row:last-child { border-bottom: none; }
.border-box {
  width: 48px;
  height: 32px;
  border-radius: 4px;
  flex-shrink: 0;
  background: transparent;
}
.border-preview-row code { flex:1; font-size:12px; }
.border-hex { font-size:11px; color:var(--vp-c-text-3); white-space:nowrap; }
.radius-preview-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 16px 0;
  align-items: flex-end;
}
.radius-box {
  background: var(--vp-c-brand-soft, #ebfef4);
  border: 2px solid #00754e;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: #004730;
  text-align: center;
}
.radius-box span { font-size:10px; font-weight:400; color:#0d7054; }
</style>
