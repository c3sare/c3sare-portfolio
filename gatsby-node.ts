const path = require("path");
import { GatsbyNode } from "gatsby";

interface Page {
  errors?: any;
  data?: {
    allContentfulServices: {
      nodes: Array<{
        slug: string;
      }>;
    };
  };
}

interface PricePage {
  errors?: any;
  data?: {
    allContentfulPrices: {
      nodes: {
        slug: string;
      }[];
    };
  };
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  // Define a template for blog post
  const servicePage = path.resolve("./src/templates/services.tsx");
  const pricePage = path.resolve("./src/templates/prices.tsx");

  const result: Page = await graphql(
    `
      {
        allContentfulServices {
          nodes {
            slug
          }
        }
      }
    `
  );

  const resultPrices: PricePage = await graphql(
    `
      {
        allContentfulPrices {
          nodes {
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    );
    return;
  }

  if (resultPrices.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      resultPrices.errors
    );
    return;
  }

  const posts = result.data!.allContentfulServices.nodes;
  const prices = resultPrices.data!.allContentfulPrices.nodes;

  if (posts.length > 0) {
    posts.forEach((post) => {
      createPage({
        path: `/services/${post.slug}/`,
        component: servicePage,
        context: {
          slug: post.slug,
        },
      });
    });
  }

  if (prices.length > 0) {
    prices.forEach((price) => {
      createPage({
        path: `/prices/${price.slug}/`,
        component: pricePage,
        context: {
          slug: price.slug,
        },
      });
    });
  }
};
