import React from "react";
import * as style from "../styles/services.module.css";
import { graphql, useStaticQuery } from "gatsby";

interface Service {
  title: string,
  text: string,
  icon: string,
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
          text {
            raw
          }
        }
      }
    }
  `).allContentfulServices.nodes.map((item:any) => ({
    title: item.title,
    icon: item.icon.url,
    text: JSON.parse(item.text.raw).content[0].content[0].value
  }));

  return (
    <div className={style.services}>
      {services.map((service, index) => (
        <div key={index} className={style.service}>
          <img src={service.icon} alt="obraz"/>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <button>Więcej</button>
        </div>
      ))}
    </div>
  );
};

export default Services;
