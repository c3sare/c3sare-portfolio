import * as React from "react"
import { Link, HeadFC } from "gatsby"
import Layout from "../components/Layout"

const pageStyles = {
  minHeight: '100vh',
  color: "white",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Strony nie znaleziono</h1>
        <p style={paragraphStyles}>
          Przepraszam 😔, nie mogę znaleźć strony której szukasz.
          <br />
          <br />
          <Link style={{color: 'grey'}} to="/">Wróć na stronę główną</Link>.
        </p>
      </main>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
