# Classes Utilitárias

O `@tbdcagro/styles` gera uma série de classes CSS que podem ser usadas diretamente no HTML, sem necessidade de escrever SCSS. Esta seção documenta todas elas.

## Categorias disponíveis

| Categoria | Prefixo de exemplo | O que faz |
|---|---|---|
| [Tipografia](/classes/typography) | `.typography-subtitle-medium-highlight` | Tamanho, peso e altura de linha |
| [Cores de fundo](/classes/background-colors) | `.color-background-fill-brand-lowest` | Background semântico |
| [Cores de texto](/classes/text-colors) | `.color-text-neutral-pure` | Cor do texto |
| [Bordas](/classes/borders) | `.border-weight-small .color-border-divider` | Espessura e cor de borda |
| [Sombras](/classes/shadows) | `.shadow-soft` | Box-shadow |
| [Flex](/classes/flex) | `.is-flex .justify-between .align-center` | Layout flexbox |
| [Espaçamentos](/classes/spacing) | `.p-16 .mt-8 .gap-12` | Margin, padding e gap |

---

## Exemplo de uso combinado

```html
<!-- Card com layout flex, cor de fundo, borda e sombra -->
<div class="color-background-fill-brand-lowest border-weight-small color-border-divider shadow-soft border-radius-small p-16">
  <div class="is-flex justify-between align-center mb-8">
    <span class="typography-subtitle-medium-highlight color-text-main-default">
      Título do Card
    </span>
    <span class="typography-paragraph-medium-regular color-text-neutral-pure">
      Subtítulo
    </span>
  </div>
  <p class="typography-paragraph-large-regular color-text-neutral-pure">
    Conteúdo do card utilizando as classes utilitárias do design system.
  </p>
</div>
```
