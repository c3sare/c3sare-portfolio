import { graphql } from "gatsby";
import get from "lodash/get";
import React from "react";
import Layout from "../components/Layout"


const ServicePage = (props:any) => {
    const page = get(props, 'data.contentfulServices');

    return (
        <Layout>
            <div style={{minHeight: '100vh'}} dangerouslySetInnerHTML={{__html: page.content.childMarkdownRemark.html}}></div>
        </Layout>
    )
}

export default ServicePage;

export const Head = (props:any) => {
    const page = get(props, 'data.contentfulServices');

    return (
        <title>C3sare | {page.title}</title>
    )
}

export const pageQuery = graphql`
    query menuById(
        $slug: String!
    ) {
        contentfulServices(slug: {eq: $slug}) {
            title
            content {
                childMarkdownRemark {
                  html
                }
              }
          }
    }
`