# Classes de Sombra

As sombras são geradas a partir do mapa `$shadow-options`. O formato é:

```
.shadow-{nome}
```

---

## Referência Visual

<div class="shadow-preview-group">
  <div class="shadow-card" style="box-shadow: 0px 0px 16px rgba(29,29,27,0.05)">
    <code>.shadow-default</code>
    <span class="shadow-value">0px 0px 16px rgba(29,29,27, 0.05)</span>
  </div>
  <div class="shadow-card" style="box-shadow: 0px 0px 16px rgba(29,29,27,0.1)">
    <code>.shadow-soft</code>
    <span class="shadow-value">0px 0px 16px rgba(29,29,27, 0.1)</span>
  </div>
  <div class="shadow-card" style="box-shadow: 0px 0px 2px 0px rgba(29,29,27,0.1), 0px 1px 2px 0px rgba(0,0,0,0.15)">
    <code>.shadow-low</code>
    <span class="shadow-value">0px 0px 2px rgba(29,29,27,0.1),<br>0px 1px 2px rgba(0,0,0,0.15)</span>
  </div>
  <div class="shadow-card" style="box-shadow: 0px 0px 2px 0px rgba(29,29,27,0.12), 0px 2px 4px 0px rgba(0,0,0,0.15)">
    <code>.shadow-high</code>
    <span class="shadow-value">0px 0px 2px rgba(29,29,27,0.12),<br>0px 2px 4px rgba(0,0,0,0.15)</span>
  </div>
  <div class="shadow-card" style="box-shadow: 0px 0px 0px 2px rgba(29,29,27,0.3)">
    <code>.shadow-focus</code>
    <span class="shadow-value">0px 0px 0px 2px rgba(29,29,27, 0.3)</span>
  </div>
</div>

---

## Quando usar cada sombra

| Classe | Uso recomendado |
|---|---|
| `.shadow-default` | Superfícies flutuantes sutis, tooltips |
| `.shadow-soft` | Cards, painéis, dropdowns |
| `.shadow-low` | Botões, elementos interativos em repouso |
| `.shadow-high` | Modais, popovers, elementos elevados |
| `.shadow-focus` | Estado de foco em inputs e botões |

---

## Exemplo de uso

```html
<!-- Card com sombra soft -->
<div class="shadow-soft border-radius-small p-16">
  Conteúdo do card
</div>

<!-- Input com sombra no foco -->
<input class="border-weight-xsmall shadow-focus" />

<!-- Modal elevado -->
<div class="shadow-high border-radius-medium p-24">
  Conteúdo do modal
</div>
```

<style>
.shadow-preview-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
}
.shadow-card {
  background: var(--vp-c-bg);
  border-radius: 10px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 220px;
  flex: 1;
}
.shadow-card code {
  font-size: 13px;
  font-weight: 600;
}
.shadow-value {
  font-size: 11px;
  color: var(--vp-c-text-3);
  line-height: 1.5;
}
</style>
