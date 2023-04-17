import { graphql } from "gatsby";
import get from "lodash/get";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination } from "swiper";

import Layout from "../components/Layout";

import * as style from "./project.module.css";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PricesPage = (props: any) => {
  const page = get(props, "data.contentfulProjects");

  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>{page.title}</h1>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
            margin: "25px",
          } as any
        }
        zoom={true}
        autoHeight={true}
        navigation={true}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        {page.images.map((screen: any, i: number) => {
          const gimg: any = getImage(screen);
          return (
            <SwiperSlide key={i}>
              <div style={{ maxHeight: "calc(100vh - 200px)" }}>
                <GatsbyImage
                  style={{ maxHeight: "calc(100vh - 200px)" }}
                  imgStyle={{
                    maxHeight: "100%",
                    width: "auto",
                    margin: "0 auto",
                  }}
                  image={gimg}
                  alt={screen.title}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={style.techUsed}>
        <h3>Technologies used to build</h3>
        <div className={style.techs}>
          {page.technologies.map((tech: any, i: number) => (
            <div className={style.tech} key={i}>
              <img
                src={tech.img.url}
                alt={tech.name}
                width="32px"
                height="32px"
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
        <div className={style.siteUrl}>
          <h3>Site URL</h3>
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
          url
        }
        name
        url
      }
    }
  }
`;
