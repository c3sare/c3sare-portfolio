import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import * as style from "../styles/aboutme.module.css";

interface Education {
  schoolName: string;
  specialization: string;
  schoolStart: string;
  schoolEnd: string;
  stillStudy: boolean;
}

interface Experience {
  employer: string;
  jobStart: string;
  jobEnd: string;
  position: string;
  stillWorking: boolean;
}

interface Language {
  title: string;
  knowledge: 0 | 1 | 2 | 3 | 4 | 5;
  flag: {
    localFile: {
      svg: {
        content: string;
      };
    };
  };
}

interface Software {
  title: string;
  knowledge: 0 | 1 | 2 | 3 | 4 | 5;
  icon: any;
}

interface ProgLang {
  title: string;
  knowledge: 0 | 1 | 2 | 3 | 4 | 5;
  icon: any;
}

interface AddTech {
  title: string;
  icon: any;
}

interface PersonalSkill {
  title: string;
}

interface PersonalAdv {
  title: string;
}

interface Interested {
  title: string;
  icon: any;
}

const Aboutme = () => {
  const aboutme = useStaticQuery(graphql`
    query MyQuery {
      allContentfulEducation {
        nodes {
          schoolName
          specialization
          schoolStart
          schoolEnd
          stillStudy
        }
      }
      allContentfulExperience {
        nodes {
          employer
          jobEnd
          jobStart
          position
          stillWorking
        }
      }
      allContentfulLangugages {
        nodes {
          title
          knowledge
          flag {
            localFile {
              svg {
                content
              }
            }
          }
        }
      }
      allContentfulSoftware {
        nodes {
          knowledge
          title
          icon {
            gatsbyImage(formats: PNG, height: 64)
          }
        }
      }
      allContentfulProgramming {
        nodes {
          title
          icon {
            gatsbyImage(height: 64)
          }
          knowledge
        }
      }
      allContentfulAdditionalTechnologies {
        nodes {
          title
          icon {
            gatsbyImage(height: 64)
          }
        }
      }
      allContentfulPersonalSkills {
        nodes {
          title
        }
      }
      allContentfulPersonalAdvantages {
        nodes {
          title
        }
      }
      allContentfulInterested {
        nodes {
          title
          icon {
            svg {
              content
            }
          }
        }
      }
      allContentfulToDownload {
        nodes {
          file {
            localFile {
              publicURL
            }
            filename
          }
        }
      }
    }
  `);

  interface File {
    file: {
      localFile: {
        publicURL: string,
      },
      filename: string
    }[]
  }

  function sortByDateEducation(a: Education, b: Education) {
    if (a.schoolStart > b.schoolStart) return 1;
    else if (b.schoolStart > a.schoolStart) return -1;
    else return 0;
  }

  function sortByDateExp(a: Experience, b: Experience) {
    if (a.jobStart > b.jobStart) return 1;
    else if (b.jobStart > a.jobStart) return -1;
    else return 0;
  }

  function sortByKnowledge(a: Language, b: Language) {
    if (a.knowledge > b.knowledge) return -1;
    else if (a.knowledge > b.knowledge) return 1;
    else return 0;
  }

  const education: Education[] =
    aboutme.allContentfulEducation.nodes.sort(sortByDateEducation);

  const experience: Experience[] =
    aboutme.allContentfulExperience.nodes.sort(sortByDateExp);

  const langugages: Language[] =
    aboutme.allContentfulLangugages.nodes.sort(sortByKnowledge);

  const software: Software[] =
    aboutme.allContentfulSoftware.nodes.sort(sortByKnowledge);

  const programming: ProgLang[] = aboutme.allContentfulProgramming.nodes;

  const additionalTechs: AddTech[] =
    aboutme.allContentfulAdditionalTechnologies.nodes;

  const personalSkills: PersonalSkill[] =
    aboutme.allContentfulPersonalSkills.nodes;

  const personalAdvantages: PersonalAdv[] =
    aboutme.allContentfulPersonalAdvantages.nodes;

  const hobby: Interested[] = aboutme.allContentfulInterested.nodes;

  const files:File[] = aboutme.allContentfulToDownload.nodes;

  return (
    <div className={style.aboutMeContainer}>
      <div className={style.eduJobBox}>
        <h3>Wykształcenie</h3>
        {education.map((item) => (
          <div className={style.eduJobItem}>
            <p>
              <span>{item.specialization}</span>
              <span>
                {item.schoolStart.split("-")[0]} -{" "}
                {item.stillStudy ? "do teraz" : item.schoolEnd.split("-")[0]}
              </span>
            </p>
            <span>{item.schoolName}</span>
          </div>
        ))}
      </div>
      <div className={style.eduJobBox}>
        <h3>Doświadczenie</h3>
        {experience.map((item) => (
          <div className={style.eduJobItem}>
            <p>
              <span>{item.position}</span>
              <span>
                {item.jobStart.split("-")[0]} -{" "}
                {item.stillWorking ? "do teraz" : item.jobEnd.split("-")[0]}
              </span>
            </p>
            <span>{item.employer}</span>
          </div>
        ))}
      </div>
      <div className={style.langSoftwareContainer}>
        <div className={style.langSoftwareBox}>
          <h3>Języki</h3>
          {langugages.map((item) => (
            <div className={style.langSoftwareItem}>
              <span
                dangerouslySetInnerHTML={{
                  __html: item.flag.localFile.svg.content,
                }}
              />
              <span>{item.title}</span>
              <div className={style.knowledge}>
                {[...Array(item.knowledge)].map((_dot) => (
                  <div className={style.full} />
                ))}
                {[...Array(5 - item.knowledge)].map((_dot) => (
                  <div className={style.empty} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={style.langSoftwareBox}>
          <h3>Oprogramowanie</h3>
          {software.map((item) => {
            const gimg:any = getImage(item.icon);

            return (
              <div className={style.langSoftwareItem}>
                <span>
                  <GatsbyImage image={gimg} alt={item.title} />
                </span>
                <span>{item.title}</span>
                <div className={style.knowledge}>
                  {[...Array(item.knowledge)].map((_dot) => (
                    <div className={style.full} />
                  ))}
                  {[...Array(5 - item.knowledge)].map((_dot) => (
                    <div className={style.empty} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.langSoftwareBox}>
        <h3>Programowanie</h3>
        {programming.map((item) => {
          const gimg:any = getImage(item.icon);

          return (
            <div className={style.langSoftwareItem}>
              <span>
                <GatsbyImage image={gimg} alt={item.title} />
              </span>
              <span>{item.title}</span>
              <div className={style.knowledge}>
                {[...Array(item.knowledge)].map((_dot) => (
                  <div className={style.full} />
                ))}
                {[...Array(5 - item.knowledge)].map((_dot) => (
                  <div className={style.empty} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.langSoftwareBox}>
        <h3>Dodatkowe Technologie</h3>
        {additionalTechs.map((item) => {
          const gimg:any = getImage(item.icon);
          return (
            <div className={style.langSoftwareItem}>
              <span>
                <GatsbyImage image={gimg} alt={item.title} />
              </span>
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <div className={style.langSoftwareContainer}>
        <div className={style.langSoftwareBox}>
          <h3>Umiejętności</h3>
          {personalSkills.map((item) => (
            <div className={style.langSoftwareItem}>✓ {item.title}</div>
          ))}
        </div>
        <div className={style.langSoftwareBox}>
          <h3>Dodatkowe atuty</h3>
          {personalAdvantages.map((item) => (
            <div className={style.langSoftwareItem}>✓ {item.title}</div>
          ))}
        </div>
      </div>
      <div className={style.langSoftwareBox}>
        <h3>Zainteresowania</h3>
        {hobby.map((item) => (
          <div className={style.langSoftwareItem}>
            <span
              dangerouslySetInnerHTML={{ __html: item.icon.svg.content }}
            />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div className={style.langSoftwareBox}>
        <h3>Pobierz</h3>
        {files.map((item) => (
          <div className={style.langSoftwareItem}>
            {item.file.map(link => (
              <a href={link.localFile.publicURL}>{link.filename}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutme;
