import React from "react";
import * as style from "../styles/loader.module.css";

const Checkmark: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130.2 130.2"
      height="128px"
      width="128px"
    >
      <circle
        className={style.path + " " + style.circle}
        fill="none"
        stroke="#73AF55"
        stroke-width="6"
        stroke-miterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <polyline
        className={style.path + " " + style.check}
        fill="none"
        stroke="#73AF55"
        stroke-width="6"
        stroke-linecap="round"
        stroke-miterlimit="10"
        points="100.2,40.2 51.5,88.8 29.8,67.5 "
      />
    </svg>
    <p className={style.message + " " + style.success}>{children}</p>
  </>
);

export default Checkmark;
