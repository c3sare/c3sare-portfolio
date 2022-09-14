import React from "react";
import * as style from "../styles/contact.module.css";
import {FaPhoneAlt} from "@react-icons/all-files/fa/FaPhoneAlt";
import {FaAt} from "@react-icons/all-files/fa/FaAt";

const Contact = () => {
  return (
    <>
      <div className={style.contactBoxes}>
        <a href="tel:+48531699319" aria-label="Kontakt telefoniczny">
          <FaPhoneAlt/>
          <br/>
          +48 531 699 319
        </a>
        <a href="mailto:marcinm222@gmail.com" aria-label="Kontakt przez pocztę elektroniczną">
          <FaAt/>
          <br/>
          marcinm222@gmail.com
        </a>
      </div>
      <form className={style.contactForm} onSubmit={e => e.preventDefault()}>
        <div className={style.infoInputs}>
          <label htmlFor="mail">E-Mail:</label>
          <input id="mail" type="email" placeholder="Twój E-Mail..." name="mail"/>
          <label htmlFor="firstname">Imię:</label>
          <input id="firstname" type="text" placeholder="Imię..." name="firstname"/>
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
    </>
  );
};

export default Contact;
