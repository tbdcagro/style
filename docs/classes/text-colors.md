# Classes de Cor de Texto

Classes geradas a partir do mapa `$text-colors` em `typography/colors.scss`. O formato é:

```
.color-text-{variante}-{estado}
```

---

## Referência Visual

<div class="text-color-group">
  <div class="text-color-row">
    <span style="color:#1d1d1b;font-size:20px;font-weight:600">Aa</span>
    <div class="tc-swatch" style="background:#1d1d1b"></div>
    <code>.color-text-main-default</code><span class="tc-hex">#1d1d1b (gray-900)</span>
  </div>
  <div class="text-color-row">
    <span style="color:#ffffff;font-size:20px;font-weight:600;background:#1d1d1b;padding:2px 6px;border-radius:3px">Aa</span>
    <div class="tc-swatch" style="background:#ffffff;border:1px solid #c9c9c6"></div>
    <code>.color-text-main-inverse</code><span class="tc-hex">#ffffff (white)</span>
  </div>
  <div class="text-color-row">
    <span style="color:#004730;font-size:20px;font-weight:600">Aa</span>
    <div class="tc-swatch" style="background:#004730"></div>
    <code>.color-text-main-hovered</code><span class="tc-hex">#004730 (green-800)</span>
  </div>
  <div class="text-color-row">
    <span style="color:#0d7054;font-size:20px;font-weight:600">Aa</span>
    <div class="tc-swatch" style="background:#0d7054"></div>
    <code>.color-text-main-activated</code><span class="tc-hex">#0d7054 (green-500)</span>
  </div>
</div>

### Neutral
<div class="text-color-group">
  <div class="text-color-row">
    <span style="color:#b1b1ad;font-size:20px;font-weight:600">Aa</span>
    <div class="tc-swatch" style="background:#b1b1ad"></div>
    <code>.color-text-neutral-lowest</code><span class="tc-hex">#b1b1ad (gray-400)</span>
  </div>
  <div class="text-color-row">
    <span style="color:#72726f;font-size:20px;font-weight:600">Aa</span>
    <div class="tc-swatch" style="background:#72726f"></div>
    <code>.color-text-neutral-pure</code><span class="tc-hex">#72726f (gray-600)</span>
  </div>
  <div class="text-color-row">
    <span style="color:#004730;font-size:20px;font-weight:600">Aa</span>
    <div class="tc-swatch" style="background:#004730"></div>
    <code>.color-text-neutral-hovered</code><span class="tc-hex">#004730 (green-800)</span>
  </div>
  <div class="text-color-row">
    <span style="color:#0d7054;font-size:20px;font-weight:600">Aa</span>
    <div class="tc-swatch" style="background:#0d7054"></div>
    <code>.color-text-neutral-activated</code><span class="tc-hex">#0d7054 (green-500)</span>
  </div>
</div>

### Interaction
<div class="text-color-group">
  <div class="text-color-row">
    <span style="color:#00754e;font-size:20px;font-weight:600">Aa</span>
    <div class="tc-swatch" style="background:#00754e"></div>
    <code>.color-text-interaction-pure</code><span class="tc-hex">#00754e (teal-600)</span>
  </div>
  <div class="text-color-row">
    <span style="color:#389a73;font-size:20px;font-weight:600">Aa</span>
    <div class="tc-swatch" style="background:#389a73"></div>
    <code>.color-text-interaction-hovered</code><span class="tc-hex">#389a73 (teal-400)</span>
  </div>
  <div class="text-color-row">
    <span style="color:#53ac85;font-size:20px;font-weight:600">Aa</span>
    <div class="tc-swatch" style="background:#53ac85"></div>
    <code>.color-text-interaction-activated</code><span class="tc-hex">#53ac85 (teal-300)</span>
  </div>
</div>

### Error / Success / Warning / Info / Disabled
<div class="text-color-group">
  <div class="text-color-row">
    <span style="color:#f04438;font-size:20px;font-weight:600">Aa</span>
    <div class="tc-swatch" style="background:#f04438"></div>
    <code>.color-text-error-pure</code><span class="tc-hex">#f04438 (red-500)</span>
  </div>
  <div class="text-color-row">
    <span style="color:#039855;font-size:20px;font-weight:600">Aa</span>
    <div class="tc-swatch" style="background:#039855"></div>
    <code>.color-text-success-pure</code><span class="tc-hex">#039855 (mint-600)</span>
  </div>
  <div class="text-color-row">
    <span style="color:#f79009;font-size:20px;font-weight:600">Aa</span>
    <div class="tc-swatch" style="background:#f79009"></div>
    <code>.color-text-warning-pure</code><span class="tc-hex">#f79009 (yellow-500)</span>
  </div>
  <div class="text-color-row">
    <span style="color:#1570ef;font-size:20px;font-weight:600">Aa</span>
    <div class="tc-swatch" style="background:#1570ef"></div>
    <code>.color-text-info-pure</code><span class="tc-hex">#1570ef (blue-600)</span>
  </div>
  <div class="text-color-row">
    <span style="color:#bebebb;font-size:20px;font-weight:600">Aa</span>
    <div class="tc-swatch" style="background:#bebebb"></div>
    <code>.color-text-disabled</code><span class="tc-hex">#bebebb (gray-300)</span>
  </div>
</div>

---

## Exemplo de uso

```html
<!-- Hierarquia de texto num card -->
<div class="p-16">
  <h3 class="typography-subtitle-medium-highlight color-text-main-default">
    Título do item
  </h3>
  <p class="typography-paragraph-large-regular color-text-neutral-pure mt-4">
    Descrição com cor neutra
  </p>
  <span class="typography-paragraph-medium-regular color-text-interaction-pure">
    Ver detalhes →
  </span>
</div>

<!-- Mensagem de erro -->
<p class="typography-paragraph-medium-highlight color-text-error-pure">
  Campo obrigatório
</p>
```

<style>
.text-color-group {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0 20px;
}
.text-color-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--vp-c-divider);
}
.text-color-row:last-child { border-bottom: none; }
.tc-swatch {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  flex-shrink: 0;
}
.text-color-row code { flex:1; font-size:12px; }
.tc-hex { font-size:11px; color:var(--vp-c-text-3); white-space:nowrap; }
</style>
