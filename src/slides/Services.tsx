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
            localFile {
              svg {
                content
              }
            }
          }
          slug
          description {
            description
          }
        }
      }
    }
  `).allContentfulServices.nodes.map((item:any) => ({
    title: item.title,
    icon: item.icon.localFile.svg.content,
    text: item.description.description,
    slug: item.slug
  }));

  return (
    <div className={style.services}>
      {services.map((service, index) => (
        <div key={index} className={style.service}>
          <span dangerouslySetInnerHTML={{__html: service.icon}}/>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <Link to={'/services/'+service.slug}><button>Więcej</button></Link>
        </div>
      ))}
    </div>
  );
};

export default Services;
