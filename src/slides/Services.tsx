import React from "react";
import * as style from "../styles/services.module.css";
import { graphql, Link, useStaticQuery } from "gatsby";

interface Service {
  title: string,
  text: string,
  icon: string,
  slug: string
}

const Services = () => {
  const services:Service[] = useStaticQuery(graphql`
    {
      allContentfulServices {
        nodes {
          title
          icon {
            url
          }
          content {
            childMarkdownRemark {
              excerpt(format: PLAIN, pruneLength: 300)
            }
          }
          slug
        }
      }
    }
  `).allContentfulServices.nodes.map((item:any) => ({
    title: item.title,
    icon: item.icon.url,
    text: item.content.childMarkdownRemark.excerpt,
    slug: item.slug
  }));

  return (
    <div className={style.services}>
      {services.map((service, index) => (
        <div key={index} className={style.service}>
          <img src={service.icon} alt="obraz"/>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <Link to={'/services/'+service.slug}><button>Więcej</button></Link>
        </div>
      ))}
    </div>
  );
};

export default Services;
