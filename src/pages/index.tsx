import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout, { Page } from "../components/Layout";
import Home from "../slides/Home";

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
    title: "Wstęp",
    component: <Home />,
    icon: <FaHome />,
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
    title: "Cennik",
    component: <Prices />,
    icon: <FaMoneyBill />,
  },
  {
    title: "Kontakt",
    component: <Contact />,
    icon: <FaPhoneSquareAlt />,
  },
];

const IndexPage = () => {
  return <Layout pages={pages} />;
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>C3sare | Portfolio</title>
  </>
);
