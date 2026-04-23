import { defineConfig } from "vitepress";

export default defineConfig({
  title: "TBDC style",
  description:
    "Design tokens, utilitários e resets de CSS/SCSS para projetos da TBDC Agro.",
  base: "/",

  head: [["link", { rel: "icon", href: "/leaf.svg" }]],

  lastUpdated: true,

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: false,

    nav: [
      { text: "Início", link: "/" },
      { text: "Guia de Uso", link: "/guide/getting-started" },
      { text: "Tokens SCSS", link: "/tokens/colors" },
      { text: "Utilitários SCSS", link: "/utils/functions" },
      { text: "Classes HTML", link: "/classes/" },
    ],

    sidebar: [
      {
        text: "🚀 Guia de Uso",
        items: [
          { text: "Instalação", link: "/guide/getting-started" },
          { text: "Pontos de Entrada", link: "/guide/entry-points" },
          { text: "Boas Práticas", link: "/guide/best-practices" },
        ],
      },
      {
        text: "🎨 Tokens SCSS",
        items: [
          { text: "Cores", link: "/tokens/colors" },
          { text: "Tipografia", link: "/tokens/typography" },
          { text: "Espaçamentos", link: "/tokens/spacing" },
        ],
      },
      {
        text: "🛠️ Utilitários SCSS",
        items: [
          { text: "Funções", link: "/utils/functions" },
          { text: "Mixins", link: "/utils/mixins" },
        ],
      },
      {
        text: "🏷️ Classes HTML",
        items: [
          { text: "Visão Geral", link: "/classes/" },
          { text: "Tipografia", link: "/classes/typography" },
          { text: "Cores de Fundo", link: "/classes/background-colors" },
          { text: "Cores de Texto", link: "/classes/text-colors" },
          { text: "Bordas", link: "/classes/borders" },
          { text: "Sombras", link: "/classes/shadows" },
          { text: "Flex", link: "/classes/flex" },
          { text: "Espaçamentos", link: "/classes/spacing" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/tbdcagro/style" },
    ],

    footer: {
      message: "Lançado sob licença MIT.",
      copyright: "Diretos reservados © 2018-present TBDC Agro",
    },

    search: {
      provider: "local",
    },
  },
});
