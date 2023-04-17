import * as React from "react";
import { Link, HeadFC } from "gatsby";
import Layout from "../components/Layout";

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
          <h1>Strony nie znaleziono</h1>
          <p>
            Przepraszam 😔, nie mogę znaleźć strony której szukasz.
            <br />
            <br />
            <Link style={{ color: "grey" }} to="/">
              Wróć na stronę główną
            </Link>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>C3sare | Nie znaleziono strony</title>;
