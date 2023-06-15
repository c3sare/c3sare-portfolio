import * as style from "../styles/loader.module.css";
import React from "react";

const Crossmark: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130.2 130.2"
    >
      <circle
        className={style.path + " " + style.circle}
        fill="none"
        stroke="#D06079"
        stroke-width="6"
        stroke-miterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <line
        className={style.path + " " + style.line}
        fill="none"
        stroke="#D06079"
        stroke-width="6"
        stroke-linecap="round"
        stroke-miterlimit="10"
        x1="34.4"
        y1="37.9"
        x2="95.8"
        y2="92.3"
      />
      <line
        className={style.path + " " + style.line}
        fill="none"
        stroke="#D06079"
        stroke-width="6"
        stroke-linecap="round"
        stroke-miterlimit="10"
        x1="95.8"
        y1="38"
        x2="34.4"
        y2="92.2"
      />
    </svg>
    <p className={style.message + " " + style.error}>{children}</p>
  </>
);

export default Crossmark;
