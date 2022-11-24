import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FaBook } from "@react-icons/all-files/fa/FaBook";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { FaCube } from "@react-icons/all-files/fa/FaCube";
import { FaDownload } from "@react-icons/all-files/fa/FaDownload";
import { FaClipboard } from "@react-icons/all-files/fa/FaClipboard";
import { FaClipboardCheck } from "@react-icons/all-files/fa/FaClipboardCheck";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaCodeBranch } from "@react-icons/all-files/fa/FaCodeBranch";
import { FaLanguage } from "@react-icons/all-files/fa/FaLanguage";
import { FaLaptop } from "@react-icons/all-files/fa/FaLaptop";
import * as style from "../styles/aboutme.module.css";

const percentRate = {
  0: "0",
  1: "20",
  2: "40",
  3: "60",
  4: "80",
  5: "100"
}

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
            localFile {
              publicURL
            }
          }
        }
      }
      allContentfulProgramming {
        nodes {
          title
          icon {
            localFile {
              publicURL
            }
          }
          knowledge
        }
      }
      allContentfulAdditionalTechnologies {
        nodes {
          title
          icon {
            localFile {
              publicURL
            }
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
        publicURL: string;
      };
      filename: string;
    }[];
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

  const files: File[] = aboutme.allContentfulToDownload.nodes;

  return (
    <div className={style.aboutMeContainer}>
      <div className={style.personDetails}>
        <div className={style.details}>
          <span className={style.name}>Marcin Marciniuk</span>
          <span>
            <a href="tel:531699319">+48 531 699 319</a>
          </span>
          <span>
            <a href="mailto:marcinm222@gmail.com">marcinm222@gmail.com</a>
          </span>
        </div>
        <div className={style.avatar}>
          <StaticImage
            placeholder="dominantColor"
            src="../images/avatar.png"
            alt="Avatar"
            width={300}
          />
        </div>
      </div>
      <div className={style.eduJobBox}>
        <h3>
          <span>
            <FaBook />
          </span>
          <span>Wykształcenie</span>
        </h3>
        {education.map((item) => (
          <div className={style.eduJobItem}>
            <p>
              <span>{item.specialization.toUpperCase()}</span>
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
        <h3>
          <span>
            <FaUserTie />
          </span>
          <span>Doświadczenie</span>
        </h3>
        {experience.map((item) => (
          <div className={style.eduJobItem}>
            <p>
              <span>{item.position.toUpperCase()}</span>
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
          <h3>
            <span>
              <FaLanguage />
            </span>
            <span>Języki</span>
          </h3>
          {langugages.map((item) => (
            <div className={style.langSoftwareItem}>
              <span
                dangerouslySetInnerHTML={{
                  __html: item.flag.localFile.svg.content,
                }}
              />
              <span>{item.title}</span>
              <div className={style.knowledge}>
                <div className={style.percentBar}>
                  <div className={style.knowPercent} style={{width: `${percentRate[item.knowledge]}%`}}>{percentRate[item.knowledge]}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.langSoftwareBox}>
          <h3>
            <span>
              <FaLaptop />
            </span>
            <span>Oprogramowanie</span>
          </h3>
          {software.map((item) => (
              <div className={style.langSoftwareItem}>
                <span>
                  <img src={item.icon.localFile.publicURL} width="32px" height="32px" alt={item.title} />
                </span>
                <span>{item.title}</span>
                <div className={style.knowledge}>
                  <div className={style.percentBar}>
                    <div className={style.knowPercent} style={{width: `${percentRate[item.knowledge]}%`}}>{percentRate[item.knowledge]}%</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className={style.langSoftwareBox}>
        <h3>
          <span>
            <FaCode />
          </span>
          <span>Programowanie</span>
        </h3>
        {programming.map((item) => (
            <div className={style.langSoftwareItem}>
              <span>
                <img src={item.icon.localFile.publicURL} width="32px" height="32px" alt={item.title} />
              </span>
              <span>{item.title}</span>
              <div className={style.knowledge}>
                <div className={style.percentBar}>
                  <div className={style.knowPercent} style={{width: `${percentRate[item.knowledge]}%`}}>{percentRate[item.knowledge]}%</div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className={style.langSoftwareBox}>
        <h3>
          <span>
            <FaCodeBranch />
          </span>
          <span>Dodatkowe technologie</span>
        </h3>
        {additionalTechs.map((item) => (
            <div className={style.langSoftwareItem}>
              <span>
                <img src={item.icon.localFile.publicURL} width="32px" height="32px" alt={item.title} />
              </span>
              <span>{item.title}</span>
            </div>
          )
        )}
      </div>
      <div className={style.langSoftwareContainer}>
        <div className={style.langSoftwareBox}>
          <h3>
            <span>
              <FaClipboard />
            </span>
            <span>Umiejętności</span>
          </h3>
          {personalSkills.map((item) => (
            <div className={style.langSoftwareItem}>✓ {item.title}</div>
          ))}
        </div>
        <div className={style.langSoftwareBox}>
          <h3>
            <span>
              <FaClipboardCheck />
            </span>
            <span>Dodatkowe atuty</span>
          </h3>
          {personalAdvantages.map((item) => (
            <div className={style.langSoftwareItem}>✓ {item.title}</div>
          ))}
        </div>
      </div>
      <div className={style.langSoftwareBox}>
        <h3>
          <span>
            <FaCube />
          </span>
          <span>Zainteresowania</span>
        </h3>
        {hobby.map((item) => (
          <div className={style.langSoftwareItem}>
            <span dangerouslySetInnerHTML={{ __html: item.icon.svg.content }} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div className={style.langSoftwareBox}>
        <h3>
          <span>
            <FaDownload />
          </span>
          <span>Pobierz</span>
        </h3>
        {files.map((item) => (
          <div className={style.langSoftwareItem}>
            {item.file.map((link) => (
              <a href={link.localFile.publicURL}>{link.filename}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutme;
