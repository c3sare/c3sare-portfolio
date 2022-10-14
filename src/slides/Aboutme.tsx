import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import * as style from "../styles/aboutme.module.css";

const Aboutme = () => {
  const aboutme = useStaticQuery(graphql`
    query MyQuery {
      allContentfulAboutMe {
        nodes {
          title
          content {
            raw
          }
        }
      }
    }  
  `).allContentfulAboutMe.nodes;

  return (
    <>
      <h2>O mnie</h2>
      {aboutme.map((cont:any) => (
        <div className={style.aboutMeBox}>
          <h3>{cont.title}</h3>
          <div>
            {documentToReactComponents(JSON.parse(cont.content.raw))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Aboutme;
