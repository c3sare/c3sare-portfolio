import { FaLink } from "@react-icons/all-files/fa/FaLink";
import { FaInfo } from "@react-icons/all-files/fa/FaInfo";
import React from "react";
import * as style from "../styles/projects.module.css";
import { graphql, Link, useStaticQuery } from "gatsby";

interface Project {
  img: {
    url: string;
  };
  title: string;
  slug: string;
  demo: string;
  technologies: {
    name: string;
    img: {
      url: string;
    };
  }[];
}

const Projects = () => {
  const projects: Project[] = useStaticQuery(graphql`
    {
      allContentfulProjects {
        nodes {
          title
          img {
            url
          }
          technologies {
            name
            img {
              url
            }
          }
          demo
          slug
        }
      }
    }
  `).allContentfulProjects.nodes;

  return (
    <div className={style.projects}>
      {projects.map((project, i) => (
        <div className={style.project}>
          <div className={style.imageBox}>
            <img src={project.img.url} alt={project.title} />
          </div>
          <div className={style.contentMenu}>
            <Link to={"/projects/" + project.slug}>
              <FaInfo />
            </Link>
            <a target="_blank" href={project.demo}>
              <FaLink />
            </a>
          </div>
          <div className={style.techs}>
            {project.technologies.map((tech) => (
              <img src={tech.img.url} alt={tech.name} />
            ))}
          </div>
        </div>
      ))}
      <div className={style.more}>
        <Link to="/projects/">
          <button>Wszystkie Projekty</button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
