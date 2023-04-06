import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `C3sare - Portfolio`,
    siteUrl: `https://www.c3sare.pl`,
  },
  graphqlTypegen: false,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        downloadLocal: true,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-use-query-params",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `C3sare - Portfolio`,
        short_name: `C3sare`,
        start_url: `/`,
        icon: "src/images/icon.png",
        background_color: `#000`,
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

export default config;
