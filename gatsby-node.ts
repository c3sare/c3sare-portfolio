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

interface ProjectPage {
  errors?: any;
  data?: {
    allContentfulProjects: {
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
  const projectPage = path.resolve("./src/templates/project.tsx");

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

  const resultProjects: ProjectPage = await graphql(
    `
      {
        allContentfulProjects {
          nodes {
            slug
          }
        }
      }
    `
  );

  if (result.errors || resultPrices.errors || resultProjects.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors || resultPrices.errors || resultProjects.errors
    );
    return;
  }

  const posts = result.data!.allContentfulServices.nodes;
  const prices = resultPrices.data!.allContentfulPrices.nodes;
  const projects = resultProjects.data!.allContentfulProjects.nodes;

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

  if (projects.length > 0) {
    projects.forEach((project) => {
      createPage({
        path: `/projects/${project.slug}/`,
        component: projectPage,
        context: {
          slug: project.slug,
        },
      });
    });
  }
};
