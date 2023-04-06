import { graphql } from "gatsby";
import get from "lodash/get";
import React from "react";
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ServicePage = (props: any) => {
  const page = get(props, "data.contentfulServices");
  const socials = get(props, "data.allContentfulSocials.nodes");

  return (
    <Layout socials={socials}>
      <h1 style={{ textAlign: "center" }}>{page.title}</h1>
      <div style={{ minHeight: "100vh" }}>
        {documentToReactComponents(JSON.parse(page.content.raw))}
      </div>
    </Layout>
  );
};

export default ServicePage;

export const Head = (props: any) => {
  const page = get(props, "data.contentfulServices");

  return <title>C3sare | {page.title}</title>;
};

export const pageQuery = graphql`
  query menuById($slug: String!) {
    contentfulServices(slug: { eq: $slug }) {
      title
      content {
        raw
      }
    }
    allContentfulSocials {
      nodes {
        icon {
          url
        }
        name
        url
      }
    }
  }
`;
