import * as React from "react";
import { HeadFC } from "gatsby";
import Layout, { Page } from "../components/Layout";
import Home from "../slides/Home";

import FaHome from "../icons/FaHome";
import FaQuestionCircle from "../icons/FaQuestionCircle";
import FaRegHospital from "../icons/FaRegHospital";
import FaProjectDiagram from "../icons/FaProjectDiagram";
import FaMoneyBill from "../icons/FaMoneyBill";
import FaPhoneSquareAlt from "../icons/FaPhoneSquareAlt";
import Aboutme from "../slides/Aboutme";
import Services from "../slides/Services";
import Projects from "../slides/Projects";
import Prices from "../slides/Prices";
import Contact from "../slides/Contact";

const pages: Page[] = [
  {
    title: "Home",
    component: Home,
    icon: <FaHome />,
    hideTitle: true,
  },
  {
    title: "About me",
    component: Aboutme,
    icon: <FaQuestionCircle />,
  },
  {
    title: "Services",
    component: Services,
    icon: <FaRegHospital />,
  },
  {
    title: "My Projects",
    component: Projects,
    icon: <FaProjectDiagram />,
  },
  {
    title: "Offer",
    component: Prices,
    icon: <FaMoneyBill />,
  },
  {
    title: "Contact",
    component: Contact,
    icon: <FaPhoneSquareAlt />,
  },
];

const IndexPage = ({ location }: any) => {
  return <Layout location={location} pages={pages} />;
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
