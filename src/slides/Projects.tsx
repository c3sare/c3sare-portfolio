import FaLink from "../icons/FaLink";
import FaInfo from "../icons/FaInfo";
import React from "react";
import * as style from "../styles/projects.module.css";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface Project {
  img: any;
  title: string;
  slug: string;
  demo: string;
  technologies: {
    name: string;
    img: string;
  }[];
}

const Projects = () => {
  const projects: Project[] = useStaticQuery(graphql`
    {
      allContentfulProjects(limit: 6) {
        nodes {
          title
          images {
            gatsbyImageData(
              width: 600
              height: 340
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
          technologies {
            name
            img {
              svg {
                content
              }
            }
          }
          demo
          slug
        }
      }
    }
  `).allContentfulProjects.nodes.map((item: any) => ({
    title: item.title,
    img: getImage(item.images[0]),
    technologies: item.technologies.slice(0, 3).map((item: any) => ({
      name: item.name,
      img: item.img.svg.content,
    })),
    demo: item.demo,
    slug: item.slug,
  }));

  return (
    <div className={style.projects}>
      {projects.map((project, i) => (
        <div className={style.project} key={i}>
          <div className={style.imageBox}>
            <GatsbyImage image={project.img} alt={project.title} />
          </div>
          <div className={style.contentMenu}>
            <Link
              to={"/projects/" + project.slug}
              aria-label="Look details about this project"
            >
              <FaInfo />
            </Link>
            <a
              target="_blank"
              href={project.demo}
              aria-label="Show demo of this project"
              rel="nofollow"
            >
              <FaLink />
            </a>
          </div>
          <div className={style.techs}>
            {project.technologies.map((tech, techi) => (
              <span
                style={{ margin: "4px" }}
                dangerouslySetInnerHTML={{ __html: tech.img }}
                key={techi}
              />
            ))}
          </div>
        </div>
      ))}
      <div className={style.more}>
        <Link to="/projects/" aria-label="Look all projects">
          <button>All projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
