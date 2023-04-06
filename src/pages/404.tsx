import * as React from "react";
import { Link, HeadFC, graphql } from "gatsby";
import Layout from "../components/Layout";
import get from "lodash/get";

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage = (props: any) => {
  const socials = get(props, "data.allContentfulSocials.nodes");

  return (
    <Layout socials={socials}>
      <>
        <h1 style={headingStyles}>Strony nie znaleziono</h1>
        <p style={paragraphStyles}>
          Przepraszam 😔, nie mogę znaleźć strony której szukasz.
          <br />
          <br />
          <Link style={{ color: "grey" }} to="/">
            Wróć na stronę główną
          </Link>
          .
        </p>
      </>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

export const query = graphql`
  {
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
