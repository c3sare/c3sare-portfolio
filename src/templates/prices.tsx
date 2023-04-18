import { graphql } from "gatsby";
import get from "lodash/get";
import React from "react";
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as style from "./prices.module.css";
import Seo from "../components/Seo";

const PricesPage = (props: any) => {
  const page = get(props, "data.contentfulPrices");

  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>{page.name}</h1>
      <div className={style.consPros}>
        <div className={style.haveList}>
          <h5>Contain</h5>
          <ul>
            {page.pros.map((pro: string, i: number) => (
              <li key={i}>{pro}</li>
            ))}
          </ul>
        </div>
        {page.cons && (
          <div className={style.notHaveList}>
            <h5>Do not contain</h5>
            <ul>
              {page.cons.map((con: string, i: number) => (
                <li key={i}>{con}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>{documentToReactComponents(JSON.parse(page.content.raw))}</div>
    </Layout>
  );
};

export default PricesPage;

export const Head = (props: any) => {
  const page = get(props, "data.contentfulPrices");

  return <Seo title={page.name} />;
};

export const pageQuery = graphql`
  query getPricePage($slug: String!) {
    contentfulPrices(slug: { eq: $slug }) {
      name
      pros
      cons
      content {
        raw
      }
    }
  }
`;
