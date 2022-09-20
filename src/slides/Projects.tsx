import { FaLink } from "@react-icons/all-files/fa/FaLink";
import { FaInfo } from "@react-icons/all-files/fa/FaInfo";
import React from "react";
import * as style from "../styles/projects.module.css";
import first from "../images/projects/1.png";
import gb from "../images/technologies/gatsby.png";
import ra from "../images/technologies/react.png";
import cf from "../images/technologies/contentful.png";
import { Link } from "gatsby";

const projects = [
  {
    img: first,
    title: 'Przykładowy Projekt 1',
    link: '/projects/1/my-project',
    demo: 'https://facebook.com/',
    technologies: [
      {
        name: 'GatsbyJS',
        img: gb,
      },
      {
        name: 'React',
        img: ra
      },
      {
        name: 'Contentful',
        img: cf
      }
    ]
  },
  {
    img: first,
    title: 'Przykładowy Projekt 1',
    link: '/projects/1/my-project',
    demo: 'https://facebook.com/',
    technologies: [
      {
        name: 'GatsbyJS',
        img: gb,
      },
      {
        name: 'React',
        img: ra
      },
      {
        name: 'Contentful',
        img: cf
      }
    ]
  },
  {
    img: first,
    title: 'Przykładowy Projekt 1',
    link: '/projects/1/my-project',
    demo: 'https://facebook.com/',
    technologies: [
      {
        name: 'GatsbyJS',
        img: gb,
      },
      {
        name: 'React',
        img: ra
      },
      {
        name: 'Contentful',
        img: cf
      }
    ]
  },
  {
    img: first,
    title: 'Przykładowy Projekt 1',
    link: '/projects/1/my-project',
    demo: 'https://facebook.com/',
    technologies: [
      {
        name: 'GatsbyJS',
        img: gb,
      },
      {
        name: 'React',
        img: ra
      },
      {
        name: 'Contentful',
        img: cf
      }
    ]
  },
  {
    img: first,
    title: 'Przykładowy Projekt 1',
    link: '/projects/1/my-project',
    demo: 'https://facebook.com/',
    technologies: [
      {
        name: 'GatsbyJS',
        img: gb,
      },
      {
        name: 'React',
        img: ra
      },
      {
        name: 'Contentful',
        img: cf
      }
    ]
  },
  {
    img: first,
    title: 'Przykładowy Projekt 1',
    link: '/projects/1/my-project',
    demo: 'https://facebook.com/',
    technologies: [
      {
        name: 'GatsbyJS',
        img: gb,
      },
      {
        name: 'React',
        img: ra
      },
      {
        name: 'Contentful',
        img: cf
      }
    ]
  }
]

const Projects = () => {

  return (
    <div className={style.projects}>
      {projects.map((project, i) => (
        <div className={style.project}>
          <div className={style.imageBox}>
            <img src={project.img} alt={project.title}/>
          </div>
          <div className={style.contentMenu}>
            <Link to={project.link}>
              <FaInfo/>
            </Link>
            <a target="_blank" href={project.demo}>
              <FaLink/>
            </a>
          </div>
          <div className={style.techs}>
            {project.technologies.map(tech => (
              <img src={tech.img} alt={tech.name}/>
            ))}
          </div>
        </div>
      ))}
      <div className={style.more}>
        <button>Więcej Projektów</button>
      </div>
    </div>
  );
};

export default Projects;