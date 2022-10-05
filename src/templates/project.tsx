import { graphql } from "gatsby";
import get from "lodash/get";
import React from "react";
import Layout from "../components/Layout";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const PricesPage = (props: any) => {
  const page = get(props, "data.contentfulProjects");

  return (
    <Layout>
      <div
        style={{ minHeight: "100vh" }}
      >{documentToReactComponents(JSON.parse(page.content.raw))}</div>
    </Layout>
  );
};

export default PricesPage;

export const Head = (props: any) => {
  const page = get(props, "data.contentfulProjects");

  return <title>C3sare | {page.title}</title>;
};

export const pageQuery = graphql`
  query getProjectPage($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      title
      demo
      technologies {
        img {
          url
        }
        name
      }
      content {
        raw
      }
    }
  }
`;
