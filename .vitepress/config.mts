import { defineConfig } from "vitepress";

export default defineConfig({
  title: "SayTV Docs",
  description: "Documentation for SayTV SDKs",
  base: "/docs/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/web-sdk" },
    ],

    sidebar: [
      {
        text: "Documentation",
        items: [{ text: "Web SDK", link: "/web-sdk" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/SAYTV-SDK" }],
  },
});
