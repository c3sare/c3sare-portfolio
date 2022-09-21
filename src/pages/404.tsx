import * as React from "react";
import { Link, HeadFC } from "gatsby";
import Layout from "../components/Layout";

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage = () => {
  return (
    <Layout>
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
