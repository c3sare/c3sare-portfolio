import React from "react";
import * as style from "../styles/services.module.css";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FaServer } from "@react-icons/all-files/fa/FaServer";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";
import { FaMailBulk } from "@react-icons/all-files/fa/FaMailBulk";
import { FaChartLine } from "@react-icons/all-files/fa/FaChartLine";
import { FaTools } from "@react-icons/all-files/fa/FaTools";
import { FaDatabase } from "@react-icons/all-files/fa/FaDatabase";

const services = [
  {
    title: "Oprogramowanie",
    text: `Tworzymy dedykowane systemy, które są przyjaźnie dostosowane do indywidualnych potrzeb Klienta. Tworzymy aplikacje umożliwiające niezbędny dostęp do informacji z każdego miejsca i o każdej porze.`,
    icon: <FaCode />,
  },
  {
    title: "Doradztwo IT",
    text: `Chętnie podzielimy się z Państwem naszą wiedzą i doświadczeniem, tak aby Państwa firma, jak najlepiej wykorzystała możliwości, jakie daje wdrożenie systemów IT. Wybór odpowiednich rozwiązań z dziedziny IT niejednokrotnie decyduje o sukcesie firmy.`,
    icon: <FaHandshake />,
  },
  {
    title: "Hosting",
    text: `Hosting to usługa, która udostępnienia miejsca na Twoją stronę WWW na specjalnie do tego przygotowanym serwerze. Jest ona niezbędna, gdy chcemy, aby nasza strona była widoczna w Internecie cały czas.`,
    icon: <FaServer />,
  },
  {
    title: "Strony internetowe",
    text: `Internet to szybki i tani sposób na dotarcie do Klientów z całego świata. Projektujemy i tworzymy strony WWW wraz z hostingiem i opieką informatyczną.`,
    icon: <FaGlobe />,
  },
  {
    title: "Poczta elektroniczna",
    text: `Tworzymy pocztę elektroniczną we własnej domenie. Załóż bezpieczną skrzynkę z nazwą doskonale dopasowaną do Twojego nazwiska lub nazwy firmy.`,
    icon: <FaMailBulk />,
  },
  {
    title: "Pozycjonowanie / SEO / Adwords",
    text: `Poprawiamy wszystkie elementy, które mają wpływ na pozycję strony w wyszukiwarkach internetowych (np. Google).`,
    icon: <FaChartLine />,
  },
  {
    title: "Serwis komputerowy",
    text: `Naprawiamy komputery stacjonarne oraz laptopy. Nie działa Ci ekran? Zostałeś zainfekowany, a może potrzebujesz nowego systemu?`,
    icon: <FaTools />,
  },
  {
    title: "Kopie zapasowe",
    text: `Backup firmowych danych to inaczej tworzenie kopii zapasowej informacji, aby po ich uszkodzeniu lub utracie bez przeszkód je odtworzyć.`,
    icon: <FaDatabase />,
  },
];

const Services = () => {
  return (
    <div className={style.services}>
      {services.map((service, index) => (
        <div key={index} className={style.service}>
          {service.icon}
          <h4>{service.title}</h4>
          <p>{service.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
