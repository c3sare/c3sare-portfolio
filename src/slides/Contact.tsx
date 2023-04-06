import React from "react";
import * as style from "../styles/contact.module.css";
import FaPhoneAlt from "../icons/FaPhoneAlt";
import FaAt from "../icons/FaAt";
import { useForm } from "react-hook-form";
import Loading from "../components/Loading";
import logo from "../images/logo.webp";

const Contact = () => {
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();

  const sendData = (data: any) => {
    setLoading(true);
    fetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setValue("mail", "");
          setValue("firstname", "");
          setValue("mailTitle", "");
          setValue("message", "");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className={style.contactContainer}>
      <div className={style.imageContainer}>
        <img src={logo} alt="logo" width="160px" height="auto" />
        <div className={style.contactMailPhone}>
          <div className={style.contactBoxes}>
            <a href="tel:+48531699319" aria-label="Kontakt telefoniczny">
              <div className={style.contactIcon}>
                <FaPhoneAlt />
              </div>
              <br />
              +48 531 699 319
            </a>
            <a
              href="mailto:marcinm222@gmail.com"
              aria-label="Kontakt przez pocztę elektroniczną"
            >
              <div className={style.contactIcon}>
                <FaAt />
              </div>
              <br />
              marcinm222@gmail.com
            </a>
          </div>
        </div>
      </div>
      <form className={style.contactForm} onSubmit={handleSubmit(sendData)}>
        <div>
          <label htmlFor="mail">E-Mail:</label>
          <input
            id="mail"
            type="email"
            disabled={loading}
            placeholder="Twój E-Mail..."
            {...register("mail", {
              required: "To pole jest wymagane!",
              pattern: {
                value:
                  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                message: "Nieprawidłowa wartość!",
              },
              maxLength: {
                value: 35,
                message: "Nieprawidłowa wartość!",
              },
            })}
          />
          {errors.mail && (
            <span className={style.error}>{errors.mail.message as string}</span>
          )}
        </div>
        <div>
          <label htmlFor="firstname">Imię:</label>
          <input
            id="firstname"
            type="text"
            disabled={loading}
            placeholder="Imię..."
            {...register("firstname", {
              required: "To pole jest wymagane!",
              pattern: {
                value:
                  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                message: "Nieprawidłowa wartość!",
              },
              maxLength: {
                value: 18,
                message: "Max. 18 znaków!",
              },
            })}
          />
          {errors.firstname && (
            <span className={style.error}>
              {errors.firstname.message as string}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="mailTitle">Temat:</label>
          <input
            id="mailTitle"
            type="text"
            disabled={loading}
            placeholder="Temat wiadomości..."
            {...register("mailTitle", {
              required: "To pole jest wymagane!",
              pattern: {
                value:
                  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                message: "Nieprawidłowa wartość!",
              },
              maxLength: {
                value: 50,
                message: "Max. 50 znaków!",
              },
            })}
          />
          {errors.mailTitle && (
            <span className={style.error}>
              {errors.mailTitle.message as string}
            </span>
          )}
        </div>
        <div className={style.textArea}>
          <label htmlFor="message">Treść:</label>
          <textarea
            id="message"
            disabled={loading}
            placeholder="Treść..."
            {...register("message", {
              required: "To pole jest wymagane!",
              pattern: {
                value: /^(.|\s)*[a-zA-Z]+(.|\s)*$/,
                message: "Nieprawidłowa wartość!",
              },
              maxLength: {
                value: 400,
                message: "Max. 400 znaków!",
              },
            })}
          />
          {errors.message && (
            <span className={style.error}>
              {errors.message.message as string}
            </span>
          )}
        </div>
        <button disabled={loading} type="submit">
          Wyślij formularz
        </button>
        {loading && (
          <div className={style.loadingBox}>
            <Loading />
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
