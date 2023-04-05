import { graphql } from "gatsby";
import get from "lodash/get";
import React from "react";
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as style from "./project.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaArrowCircleLeft } from "@react-icons/all-files/fa/FaArrowCircleLeft";
import { FaArrowCircleRight } from "@react-icons/all-files/fa/FaArrowCircleRight";

const PricesPage = (props: any) => {
  const slideShow = React.useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const [currentWidth, setCurrentWidth] = React.useState<number>(0);
  const page = get(props, "data.contentfulProjects");
  const socials = get(props, "data.allContentfulSocials.nodes");

  const handleNextSlide = () => {
    setCurrentSlide((state) => {
      if (state + 1 >= page.images.length) return 0;
      else return state + 1;
    });
  };

  const handlePrevSlide = () => {
    setCurrentSlide((state) => {
      if (state - 1 >= 0) return state - 1;
      else return page.images.length - 1;
    });
  };

  React.useEffect(() => {
    setCurrentWidth(slideShow.current!.clientWidth);

    function setWidth() {
      setCurrentWidth(slideShow.current!.clientWidth);
    }

    window.addEventListener("resize", setWidth, true);

    return () => window.removeEventListener("resize", setWidth, true);
  }, [slideShow]);

  return (
    <Layout socials={socials}>
      <h1 style={{ textAlign: "center" }}>{page.title}</h1>
      <div
        style={{
          padding: "5px",
          borderRadius: "5px",
          boxShadow: "0 0 3px black",
          background:
            "linear-gradient( to left, rgba(54, 0, 42, 0.6), rgba(51, 0, 118, 0.6) )",
          overflow: "hidden",
          position: "relative",
          margin: "25px",
        }}
      >
        <div className={style.slider} ref={slideShow}>
          <div
            className={style.sliderContainer}
            style={{
              width: page.images.length * currentWidth + "px",
              transform: `translate3d(${
                -currentWidth * currentSlide
              }px, 0px, 0px)`,
            }}
          >
            {page.images.map((screen: any, i: number) => {
              const gimg: any = getImage(screen);
              return (
                <GatsbyImage
                  key={i}
                  style={{ width: currentWidth + "px" }}
                  image={gimg}
                  alt={screen.title}
                />
              );
            })}
          </div>
          {page.images.length > 1 && (
            <>
              <div className={style.slideBtnLeft} onClick={handlePrevSlide}>
                <FaArrowCircleLeft />
              </div>
              <div className={style.slideBtnRight} onClick={handleNextSlide}>
                <FaArrowCircleRight />
              </div>
            </>
          )}
        </div>
      </div>
      <div className={style.techUsed}>
        <h3>Technologie użyte do budowy projektu</h3>
        <div className={style.techs}>
          {page.technologies.map((tech: any, i: number) => (
            <div className={style.tech} key={i}>
              <img
                src={tech.img.url}
                alt={tech.name}
                width="32px"
                height="auto"
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
        <div className={style.siteUrl}>
          <h3>Adres Strony</h3>
          <a target="_blank" href={page.demo}>
            {page.demo}
          </a>
        </div>
      </div>
      <div>{documentToReactComponents(JSON.parse(page.content.raw))}</div>
    </Layout>
  );
};

export default PricesPage;

export const Head = (props: any) => {
  const page = get(props, "data.contentfulProjects");

  return <title>C3sare | {page.title}</title>;
};

export const pageQuery = graphql`
  query getProjectPage($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      title
      demo
      images {
        gatsbyImageData(
          width: 1920
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      technologies {
        img {
          url
        }
        name
      }
      content {
        raw
      }
    }
    allContentfulSocials {
      nodes {
        icon {
          svg {
            content
          }
        }
        name
        url
      }
    }
  }
`;
