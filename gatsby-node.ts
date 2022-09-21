const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }:any) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/services.tsx');

  const result = await graphql(
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

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulServices.nodes;

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post:any) => {
      createPage({
        path: `/services/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug
        },
      })
    })
  }
}