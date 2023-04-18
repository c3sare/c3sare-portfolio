import * as React from "react";
import { Link, HeadFC } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Page not found</h1>
          <p>
            Sorry 😔, i can't find this page.
            <br />
            <br />
            <Link style={{ color: "grey" }} to="/">
              Back to home page
            </Link>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title="404" />;
