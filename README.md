\*\*<p align="center">
<a href="https://tbdc.com.br/" target="_blank">
<img width="150" src="docs/logo.svg" alt="TBDC Logo">
</a>

</p>

---

# 🧱 @tbdcagro/style

Design tokens, utilitários e resets de CSS/SCSS para projetos da TBDC Agro. Suporte completo a SCSS modular (`@use`/`@forward`) com entradas separadas para uso com ou sem resets globais.

---

## ✨ Instalação

```bash
pnpm add @tbdcagro/style
# ou
npm install @tbdcagro/style
```

---

## 🧩 Estrutura de entrada

O pacote expõe diferentes pontos de entrada para estilos, dependendo do seu caso:

| Caminho                          | Descrição                                                    |
| -------------------------------- | ------------------------------------------------------------ |
| `@tbdcagro/style/css`           | CSS global (reset incluso), para uso direto em apps sem SCSS |
| `@tbdcagro/style/scss`          | SCSS com tokens + reset global                               |
| `@tbdcagro/style/scss/no-reset` | SCSS com tokens, sem reset global                            |
| `@tbdcagro/style/scss/utils`    | Funções e mixins utilitários, sem gerar CSS extra            |

---

## 🧑‍💻 Uso com SCSS (`@use`)

### 🔹 Com reset global

```scss
@use "@tbdcagro/style/scss";

.my-component {
  color: scss.$colors-semantic-colors.primary.default;
}
```

### 🔹 Sem reset global

```scss
@use "@tbdcagro/style/scss/no-reset" as tokens;

.card {
  padding: tokens.$spacing-lg;
}
```

---

## 🛠️ Utilitários (`utils`)

O módulo `utils` expõe funções e mixins para facilitar o uso de tokens de forma segura e com tipagem consistente.

### Importação

```scss
@use "@tbdcagro/style/scss/utils" as utils;
```

### Exemplos

#### 🎨 Cores

```scss
.button {
  background-color: utils.color("fill", "interaction", "pure");
  color: utils.text-color("neutral", "pure");
  border-color: utils.border-color("neutral", "high");
}
```

#### ✍️ Tipografia

```scss
.text {
  @include utils.typography("paragraph", "medium-mid");
}
```

#### 🚫 Estado desabilitado

```scss
.button[disabled] {
  @include utils.disabled();
}
```

#### 🖱️ Scrollbar customizada

```scss
.container {
  @include utils.scrollbar();
}
```

---

## 📦 Para projetos Next.js ou Vite

Recomendado importar os estilos globais apenas uma vez no seu layout:

```scss
// styles/globals.scss
@use "@tbdcagro/style/scss/no-reset";
```

```ts
// app/layout.tsx ou _app.tsx
import "@/styles/globals.scss";
```

Depois, use os tokens e utilitários nos componentes via `@use`.

---

## ✅ Boas práticas

- Prefira sempre `@use` ao invés de `@import`
- Evite importar `@tbdcagro/style/scss` em vários lugares se estiver gerando CSS (use só no global)
- Use `@tbdcagro/style/scss/utils` apenas para acesso a funções e mixins
