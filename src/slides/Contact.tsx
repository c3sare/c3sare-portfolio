import React from "react";
import * as style from "../styles/contact.module.css";
import {FaPhoneAlt} from "@react-icons/all-files/fa/FaPhoneAlt";
import {FaAt} from "@react-icons/all-files/fa/FaAt";
import { StaticImage } from "gatsby-plugin-image";

const Contact = () => {
  return (
    <div className={style.contactContainer}>
      <div className={style.imageContainer}>
        <StaticImage src="../images/logo.webp" alt="logo" width={160}/>
        <div className={style.contactMailPhone}>
          <div className={style.contactBoxes}>
            <a href="tel:+48531699319" aria-label="Kontakt telefoniczny">
              <div className={style.contactIcon}>
                <FaPhoneAlt/>
              </div>
              <br/>
              +48 531 699 319
            </a>
            <a href="mailto:marcinm222@gmail.com" aria-label="Kontakt przez pocztę elektroniczną">
              <div className={style.contactIcon}>
                <FaAt/>
              </div>
              <br/>
              marcinm222@gmail.com
            </a>
          </div>
        </div>
      </div>
      <form className={style.contactForm} onSubmit={e => e.preventDefault()}>
          <div>
            <label htmlFor="mail">E-Mail:</label>
            <input id="mail" type="email" placeholder="Twój E-Mail..." name="mail"/>
          </div>
          <div>
            <label htmlFor="firstname">Imię:</label>
            <input id="firstname" type="text" placeholder="Imię..." name="firstname"/>
          </div>
          <div>
            <label htmlFor="mailTitle">Temat:</label>
            <input id="mailTitle" type="text" placeholder="Temat wiadomości..." name="mailTitle"/>
          </div>
        <div className={style.textArea}>
          <label htmlFor="message">Treść:</label>
          <textarea id="message" name="message" placeholder="Treść..."/>
        </div>
        <button type="submit">
            Wyślij formularz
        </button>
      </form>
    </div>
  );
};

export default Contact;
