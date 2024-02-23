import { defineConfig } from "vitepress";

export default defineConfig({
  title: "SayTV Docs",
  description: "Documentation for SayTV SDKs",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/web-sdk" },
    ],

    sidebar: [
      {
        text: "Documentation",
        items: [{ text: "Web SDK", link: "/docs/web-sdk" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/SAYTV-SDK" }],
  },
});
