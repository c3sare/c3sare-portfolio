import React from "react";
import * as style from "../styles/loading.module.css";

const Loading = () => {
  return (
    <div className={style["lds-grid"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
