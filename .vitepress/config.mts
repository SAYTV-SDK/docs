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
        items: [
          { text: "Web SDK", link: "/web-sdk" },
          { text: "iOS SDK", link: "/ios-sdk" },
          { text: "Android SDK", link: "/android-sdk" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/SAYTV-SDK" }],
  },
});
