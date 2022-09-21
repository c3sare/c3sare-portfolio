import { graphql } from "gatsby";
import get from "lodash/get";
import React from "react";
import Layout from "../components/Layout";

const PricesPage = (props: any) => {
  const page = get(props, "data.contentfulPrices");

  return (
    <Layout>
      <div
        style={{ minHeight: "100vh" }}
        dangerouslySetInnerHTML={{
          __html: page.content.childMarkdownRemark.html,
        }}
      ></div>
    </Layout>
  );
};

export default PricesPage;

export const Head = (props: any) => {
  const page = get(props, "data.contentfulPrices");

  return <title>C3sare | {page.name}</title>;
};

export const pageQuery = graphql`
  query getPricePage($slug: String!) {
    contentfulPrices(slug: { eq: $slug }) {
      name
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
