// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AI 时代掘金计划",
  tagline: "AIGC | 掘金计划 | ChatGPT | MidJourney",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://wiki.techrk1688.eu.org/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "AI 时代掘金计划",
        logo: {
          alt: "AI 时代掘金计划 Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "教程",
          },
          { to: "/blog", label: "资讯 & 工具", position: "left" },
          {
            href: "https://ruankao.eu.org/",
            label: "官网",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "文档",
            items: [
              {
                label: "教程",
                to: "/docs/intro",
              },
              {
                label: "AI导航站",
                href: "https://nav.ruankao168.top/",
              },
            ],
          },
          {
            title: "链接",
            items: [
              {
                label: "官网",
                href: "https://ruankao.eu.org/",
              },
              {
                label: "免费的ChatGPT",
                href: "https://chat.ruankao168.top/",
              },
              {
                label: "博客",
                href: "https://blog.ruankao168.top/",
              },
            ],
          },
          {
            title: "致谢",
            items: [
              {
                label: "OpenAI官网",
                href: "https://openai.com/blog",
              },
              {
                label: "MidJourney官网",
                href: "https://www.midjourney.com/app/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI 时代掘金计划, Create By zhuima314@gmail.com.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
