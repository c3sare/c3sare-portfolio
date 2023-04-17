import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import FaBook from "../icons/FaBook";
import FaUserTie from "../icons/FaUserTie";
import FaCube from "../icons/FaCube";
import FaDownload from "../icons/FaDownload";
import FaClipboard from "../icons/FaClipboard";
import FaClipboardCheck from "../icons/FaClipboardCheck";
import FaCode from "../icons/FaCode";
import FaCodeBranch from "../icons/FaCodeBranch";
import FaLanguage from "../icons/FaLanguage";
import FaLaptop from "../icons/FaLaptop";
import * as style from "../styles/aboutme.module.css";

const percentRate = {
  0: "0",
  1: "20",
  2: "40",
  3: "60",
  4: "80",
  5: "100",
};

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
    url: string;
  };
}

interface Software {
  title: string;
  knowledge: 0 | 1 | 2 | 3 | 4 | 5;
  icon: {
    gatsbyImage: any;
  };
}

interface ProgLang {
  title: string;
  knowledge: 0 | 1 | 2 | 3 | 4 | 5;
  icon: {
    gatsbyImage: any;
  };
}

interface AddTech {
  title: string;
  icon: {
    gatsbyImage: any;
  };
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

interface Personal {
  name: string;
  mail: string;
  phone: string;
  photo: {
    gatsbyImage: any;
  };
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
            url
          }
        }
      }
      allContentfulSoftware {
        nodes {
          knowledge
          title
          icon {
            gatsbyImage(
              formats: WEBP
              placeholder: NONE
              quality: 100
              height: 32
            )
          }
        }
      }
      allContentfulProgramming {
        nodes {
          title
          icon {
            gatsbyImage(
              formats: WEBP
              placeholder: NONE
              quality: 100
              height: 32
            )
          }
          knowledge
        }
      }
      allContentfulAdditionalTechnologies {
        nodes {
          title
          icon {
            gatsbyImage(
              formats: WEBP
              placeholder: NONE
              quality: 100
              height: 32
            )
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
            url
            filename
          }
        }
      }
      contentfulPersonal {
        name
        mail
        phone
        photo {
          gatsbyImage(width: 300, placeholder: DOMINANT_COLOR, formats: WEBP)
        }
      }
    }
  `);

  interface File {
    file: {
      url: string;
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

  const personal: Personal = aboutme.contentfulPersonal;

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
          <span className={style.name}>{personal.name}</span>
          <span>
            <a
              href={`tel:${personal.phone.replaceAll(" ", "")}`}
              aria-label="Contact using phone number"
            >
              {personal.phone}
            </a>
          </span>
          <span>
            <a
              href={`mailto:${personal.mail}`}
              aria-label="Contact using e-mail address"
            >
              {personal.mail}
            </a>
          </span>
        </div>
        <div className={style.avatar}>
          <GatsbyImage image={personal.photo.gatsbyImage} alt={personal.name} />
        </div>
      </div>
      <div className={style.eduJobBox}>
        <h3>
          <span>
            <FaBook />
          </span>
          <span>Education</span>
        </h3>
        {education.map((item, i) => (
          <div className={style.eduJobItem} key={i}>
            <p>
              <span>{item.specialization.toUpperCase()}</span>
              <span>
                {item.schoolStart.split("-")[0]} -{" "}
                {item.stillStudy ? "until today" : item.schoolEnd.split("-")[0]}
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
          <span>Experience</span>
        </h3>
        {experience.map((item) => (
          <div className={style.eduJobItem} key={item.employer}>
            <p>
              <span>{item.position.toUpperCase()}</span>
              <span>
                {item.jobStart.split("-")[0]} -{" "}
                {item.stillWorking ? "until today" : item.jobEnd.split("-")[0]}
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
            <span>Languages</span>
          </h3>
          {langugages.map((item) => (
            <div className={style.langSoftwareItem} key={item.title}>
              <span>
                <img
                  src={item.flag.url}
                  alt={item.title}
                  height="32px"
                  width="32px"
                />
              </span>
              <span>{item.title}</span>
              <div className={style.knowledge}>
                <div className={style.percentBar}>
                  <div
                    className={style.knowPercent}
                    style={{ width: `${percentRate[item.knowledge]}%` }}
                  >
                    {percentRate[item.knowledge]}%
                  </div>
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
            <span>Software</span>
          </h3>
          {software.map((item) => (
            <div className={style.langSoftwareItem} key={item.title}>
              <span>
                <GatsbyImage
                  loading="eager"
                  image={item.icon.gatsbyImage}
                  alt={item.title}
                />
              </span>
              <span>{item.title}</span>
              <div className={style.knowledge}>
                <div className={style.percentBar}>
                  <div
                    className={style.knowPercent}
                    style={{ width: `${percentRate[item.knowledge]}%` }}
                  >
                    {percentRate[item.knowledge]}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.langSoftwareBox}>
        <h3>
          <span>
            <FaCode />
          </span>
          <span>Programming</span>
        </h3>
        {programming.map((item) => (
          <div className={style.langSoftwareItem} key={item.title}>
            <span>
              <GatsbyImage
                loading="eager"
                image={item.icon.gatsbyImage}
                alt={item.title}
              />
            </span>
            <span>{item.title}</span>
            <div className={style.knowledge}>
              <div className={style.percentBar}>
                <div
                  className={style.knowPercent}
                  style={{ width: `${percentRate[item.knowledge]}%` }}
                >
                  {percentRate[item.knowledge]}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.langSoftwareBox}>
        <h3>
          <span>
            <FaCodeBranch />
          </span>
          <span>Additional technologies</span>
        </h3>
        {additionalTechs.map((item) => (
          <div className={style.langSoftwareItem} key={item.title}>
            <span>
              <GatsbyImage
                loading="eager"
                image={item.icon.gatsbyImage}
                alt={item.title}
              />
            </span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div className={style.langSoftwareContainer}>
        <div className={style.langSoftwareBox}>
          <h3>
            <span>
              <FaClipboard />
            </span>
            <span>Soft Skills</span>
          </h3>
          {personalSkills.map((item) => (
            <div className={style.langSoftwareItem} key={item.title}>
              ✓ {item.title}
            </div>
          ))}
        </div>
        <div className={style.langSoftwareBox}>
          <h3>
            <span>
              <FaClipboardCheck />
            </span>
            <span>Additional advantages</span>
          </h3>
          {personalAdvantages.map((item) => (
            <div className={style.langSoftwareItem} key={item.title}>
              ✓ {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className={style.langSoftwareBox}>
        <h3>
          <span>
            <FaCube />
          </span>
          <span>Interests</span>
        </h3>
        {hobby.map((item) => (
          <div className={style.langSoftwareItem} key={item.title}>
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
          <span>Download</span>
        </h3>
        {files.map((item, i) => (
          <div className={style.langSoftwareItem} key={i}>
            {item.file.map((link, j) => (
              <a
                href={link.url}
                key={j}
                aria-label={`Download file named ${link.filename}`}
              >
                {link.filename}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutme;
