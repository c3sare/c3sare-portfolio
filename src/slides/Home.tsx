import React from "react";
import * as style from "../styles/home.module.css";

const Home = () => {
  return (
    <div className={style.home}>
      <span>Portfolio</span>
      <h1>
        Zajmuję się Projektowaniem<br/>
        Tworzeniem stron internetowych<br/>
        oraz rozwiązań dla małych i dużych przedsiębiorstw
      </h1>
    </div>
  );
};

export default Home;
