import { FaInfo } from "@react-icons/all-files/fa/FaInfo";
import { FaLink } from "@react-icons/all-files/fa/FaLink";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as style from "../styles/projects.module.css";
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

const ProjectsPage = () => {
  const projects: Project[] = useStaticQuery(graphql`
    {
      allContentfulProjects {
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
              localFile {
                publicURL
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
    technologies: item.technologies.map((item: any) => ({
      name: item.name,
      img: item.img.localFile.publicURL,
    })),
    demo: item.demo,
    slug: item.slug,
  }));

  return (
    <Layout>
      <div className={style.projects}>
        {projects.map((project, i) => (
          <div className={style.project}>
            <div className={style.imageBox}>
              <GatsbyImage image={project.img} alt={project.title} />
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
                <img src={tech.img} alt={tech.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <title>C3sare | Projekty</title>
      <meta
        name="description"
        content="Portfolio C3sare - Strony internetowe, prace graficzne, systemy dla firm"
      />
      <meta
        name="keywords"
        content="portfolio, c3sare, website, tworzenie, stron, internetowych, systemy, rozwiązania, firmy, firm"
      />
    </>
  );
};

export default ProjectsPage;
