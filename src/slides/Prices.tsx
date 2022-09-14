import React from "react";
import * as style from "../styles/prices.module.css";
import {FaCheck} from "@react-icons/all-files/fa/FaCheck";
import {FaMinus} from "@react-icons/all-files/fa/FaMinus";

const Prices = () => {
  return (
    <div className={style.prices}>
      <div className={style.variant}>
        <div className={style.title}>
          <h3>Pakiet Standard</h3>
          <span className={style.price}>
            <span>600</span>
            <span>.00 zł</span>
          </span>
        </div>
        <div className={style.addon}>
          <FaCheck/>
          <span>Strona w jednym języku</span>
        </div>
        <div className={style.addon}>
          <FaCheck/>
          <span>Optymalizacja dla wyszukiwarek</span>
        </div>
        <div className={style.addon + ' ' + style.minus}>
          <FaMinus/>
          <span>Panel Administracyjny</span>
        </div>
        <div className={style.addon + ' ' + style.minus}>
          <FaMinus/>
          <span>Blog na stronie</span>
        </div>
        <div className={style.addon + ' ' + style.minus}>
          <FaMinus/>
          <span>Sklep internetowy</span>
        </div>
        <div className={style.addon + ' ' + style.minus}>
          <FaMinus/>
          <span>Analityka Google</span>
        </div>
        <hr/>
        <div className={style.buttonsPrice}>
          <button>Zamawiam</button>
          <button>Więcej</button>
        </div>
      </div>
      <div className={style.variant}>
        <div className={style.title}>
          <h3>Pakiet Medium</h3>
          <span className={style.price}>
            <span>1200</span>
            <span>.00 zł</span>
          </span>
        </div>
        <div className={style.addon}>
          <FaCheck/>
          <span>Strona w dwóch językach</span>
        </div>
        <div className={style.addon}>
          <FaCheck/>
          <span>Optymalizacja dla wyszukiwarek</span>
        </div>
        <div className={style.addon}>
          <FaCheck/>
          <span>Panel Administracyjny</span>
        </div>
        <div className={style.addon}>
          <FaCheck/>
          <span>Blog na stronie</span>
        </div>
        <div className={style.addon + ' ' + style.minus}>
          <FaMinus/>
          <span>Sklep internetowy</span>
        </div>
        <div className={style.addon + ' ' + style.minus}>
          <FaMinus/>
          <span>Analityka Google</span>
        </div>
        <hr/>
        <div className={style.buttonsPrice}>
          <button>Zamawiam</button>
          <button>Więcej</button>
        </div>
      </div>
      <div className={style.variant}>
        <div className={style.title}>
          <h3>Pakiet Premium</h3>
          <span className={style.price}>
            <span>3000</span>
            <span>.00 zł</span>
          </span>
        </div>
        <div className={style.addon}>
          <FaCheck/>
          <span>Strona w dwóch językach</span>
        </div>
        <div className={style.addon}>
          <FaCheck/>
          <span>Optymalizacja dla wyszukiwarek</span>
        </div>
        <div className={style.addon}>
          <FaCheck/>
          <span>Panel Administracyjny</span>
        </div>
        <div className={style.addon}>
          <FaCheck/>
          <span>Blog na stronie</span>
        </div>
        <div className={style.addon}>
          <FaCheck/>
          <span>Sklep internetowy</span>
        </div>
        <div className={style.addon}>
          <FaCheck/>
          <span>Analityka Google</span>
        </div>
        <hr/>
        <div className={style.buttonsPrice}>
          <button>Zamawiam</button>
          <button>Więcej</button>
        </div>
      </div>
    </div>
  );
};

export default Prices;
