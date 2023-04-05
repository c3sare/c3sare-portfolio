import * as React from "react";
import { HeadFC, graphql } from "gatsby";
import Layout, { Page } from "../components/Layout";
import Home from "../slides/Home";
import get from "lodash/get";

import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaQuestionCircle } from "@react-icons/all-files/fa/FaQuestionCircle";
import { FaRegHospital } from "@react-icons/all-files/fa/FaRegHospital";
import { FaProjectDiagram } from "@react-icons/all-files/fa/FaProjectDiagram";
import { FaMoneyBill } from "@react-icons/all-files/fa/FaMoneyBill";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import Aboutme from "../slides/Aboutme";
import Services from "../slides/Services";
import Projects from "../slides/Projects";
import Prices from "../slides/Prices";
import Contact from "../slides/Contact";

const pages: Page[] = [
  {
    title: "Start",
    component: <Home />,
    icon: <FaHome />,
    hideTitle: true,
  },
  {
    title: "O mnie",
    component: <Aboutme />,
    icon: <FaQuestionCircle />,
  },
  {
    title: "Usługi",
    component: <Services />,
    icon: <FaRegHospital />,
  },
  {
    title: "Projekty",
    component: <Projects />,
    icon: <FaProjectDiagram />,
  },
  {
    title: "Oferta",
    component: <Prices />,
    icon: <FaMoneyBill />,
  },
  {
    title: "Kontakt",
    component: <Contact />,
    icon: <FaPhoneSquareAlt />,
  },
];

const IndexPage = (props: any) => {
  const socials = get(props, "data.allContentfulSocials.nodes");

  return <Layout socials={socials} pages={pages} />;
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>C3sare | Strona Główna</title>
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

export const query = graphql`
  {
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
