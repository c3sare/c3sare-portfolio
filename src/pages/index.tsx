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
import Seo from "../components/Seo";

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

const IndexPage = () => {
  return <Layout pages={pages} />;
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;
