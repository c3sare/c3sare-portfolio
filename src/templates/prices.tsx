import { graphql } from "gatsby";
import get from "lodash/get";
import React from "react";
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as style from "./prices.module.css";

const PricesPage = (props: any) => {
  const page = get(props, "data.contentfulPrices");
  const socials = get(props, "data.allContentfulSocials.nodes");

  return (
    <Layout socials={socials}>
      <h1 style={{ textAlign: "center" }}>{page.name}</h1>
      <div className={style.consPros}>
        <div className={style.haveList}>
          <h5>Zawiera</h5>
          <ul>
            {page.pros.map((pro: string, i: number) => (
              <li key={i}>{pro}</li>
            ))}
          </ul>
        </div>
        {page.cons && (
          <div className={style.notHaveList}>
            <h5>Nie zawiera</h5>
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

  return <title>C3sare | {page.name}</title>;
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
