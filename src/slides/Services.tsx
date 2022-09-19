import React from "react";
import * as style from "../styles/services.module.css";
import Code from "../images/icons/code.svg";
import Handshake from "../images/icons/handshake.svg";
import Server from "../images/icons/server.svg";
import Web from "../images/icons/web.svg";
import Post from "../images/icons/post.svg";
import Ads from "../images/icons/ads.svg";
import Tools from "../images/icons/tools.svg";
import Backup from "../images/icons/backup.svg";

const services = [
  {
    title: "Oprogramowanie",
    text: `Tworzymy dedykowane systemy, które są przyjaźnie dostosowane do indywidualnych potrzeb Klienta. Tworzymy aplikacje umożliwiające niezbędny dostęp do informacji z każdego miejsca i o każdej porze.`,
    icon: <Code />,
  },
  {
    title: "Doradztwo IT",
    text: `Chętnie podzielimy się z Państwem naszą wiedzą i doświadczeniem, tak aby Państwa firma, jak najlepiej wykorzystała możliwości, jakie daje wdrożenie systemów IT. Wybór odpowiednich rozwiązań z dziedziny IT niejednokrotnie decyduje o sukcesie firmy.`,
    icon: <Handshake />,
  },
  {
    title: "Hosting",
    text: `Hosting to usługa, która udostępnienia miejsca na Twoją stronę WWW na specjalnie do tego przygotowanym serwerze. Jest ona niezbędna, gdy chcemy, aby nasza strona była widoczna w Internecie cały czas.`,
    icon: <Server />,
  },
  {
    title: "Strony internetowe",
    text: `Internet to szybki i tani sposób na dotarcie do Klientów z całego świata. Projektujemy i tworzymy strony WWW wraz z hostingiem i opieką informatyczną.`,
    icon: <Web />,
  },
  {
    title: "Poczta elektroniczna",
    text: `Tworzymy pocztę elektroniczną we własnej domenie. Załóż bezpieczną skrzynkę z nazwą doskonale dopasowaną do Twojego nazwiska lub nazwy firmy.`,
    icon: <Post />,
  },
  {
    title: "Pozycjonowanie / SEO / Adwords",
    text: `Poprawiamy wszystkie elementy, które mają wpływ na pozycję strony w wyszukiwarkach internetowych (np. Google).`,
    icon: <Ads />,
  },
  {
    title: "Serwis komputerowy",
    text: `Naprawiamy komputery stacjonarne oraz laptopy. Nie działa Ci ekran? Zostałeś zainfekowany, a może potrzebujesz nowego systemu?`,
    icon: <Tools />,
  },
  {
    title: "Kopie zapasowe",
    text: `Backup firmowych danych to inaczej tworzenie kopii zapasowej informacji, aby po ich uszkodzeniu lub utracie bez przeszkód je odtworzyć.`,
    icon: <Backup />,
  },
];

const Services = () => {
  return (
    <div className={style.services}>
      {services.map((service, index) => (
        <div key={index} className={style.service}>
          {service.icon}
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <button>Więcej</button>
        </div>
      ))}
    </div>
  );
};

export default Services;
