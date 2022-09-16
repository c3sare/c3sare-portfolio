import React, { EventHandler } from "react";
import * as style from "../styles/prices.module.css";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaMinus } from "@react-icons/all-files/fa/FaMinus";

const priceBoxes = [
  {
    title: "Pakiet Standard",
    cost: [600, 0],
    popular: false,
    cons: [
      {
        title: "Strona w jednym języku",
        have: true,
      },
      {
        title: "Optymalizacja dla wyszukiwarek",
        have: true,
      },
      {
        title: "Panel Administracyjny",
        have: false,
      },
      {
        title: "Blog na stronie",
        have: false,
      },
      {
        title: "Sklep internetowy",
        have: false,
      },
      {
        title: "Analityka Google",
        have: false,
      },
    ],
  },
  {
    title: "Pakiet Medium",
    cost: [1200, 0],
    popular: true,
    cons: [
      {
        title: "Strona w jednym języku",
        have: true,
      },
      {
        title: "Optymalizacja dla wyszukiwarek",
        have: true,
      },
      {
        title: "Panel Administracyjny",
        have: true,
      },
      {
        title: "Blog na stronie",
        have: true,
      },
      {
        title: "Sklep internetowy",
        have: false,
      },
      {
        title: "Analityka Google",
        have: false,
      },
    ],
  },
  {
    title: "Pakiet Premium",
    cost: [3000, 0],
    popular: false,
    cons: [
      {
        title: "Strona w jednym języku",
        have: true,
      },
      {
        title: "Optymalizacja dla wyszukiwarek",
        have: true,
      },
      {
        title: "Panel Administracyjny",
        have: true,
      },
      {
        title: "Blog na stronie",
        have: true,
      },
      {
        title: "Sklep internetowy",
        have: true,
      },
      {
        title: "Analityka Google",
        have: true,
      },
    ],
  },
  {
    title: "Pakiet Premium",
    cost: [3000, 0],
    popular: false,
    cons: [
      {
        title: "Strona w jednym języku",
        have: true,
      },
      {
        title: "Optymalizacja dla wyszukiwarek",
        have: true,
      },
      {
        title: "Panel Administracyjny",
        have: true,
      },
      {
        title: "Blog na stronie",
        have: true,
      },
      {
        title: "Sklep internetowy",
        have: true,
      },
      {
        title: "Analityka Google",
        have: true,
      },
    ],
  },
  {
    title: "Pakiet Premium",
    cost: [3000, 0],
    popular: false,
    cons: [
      {
        title: "Strona w jednym języku",
        have: true,
      },
      {
        title: "Optymalizacja dla wyszukiwarek",
        have: true,
      },
      {
        title: "Panel Administracyjny",
        have: true,
      },
      {
        title: "Blog na stronie",
        have: true,
      },
      {
        title: "Sklep internetowy",
        have: true,
      },
      {
        title: "Analityka Google",
        have: true,
      },
    ],
  },
  {
    title: "Pakiet Premium",
    cost: [3000, 0],
    popular: false,
    cons: [
      {
        title: "Strona w jednym języku",
        have: true,
      },
      {
        title: "Optymalizacja dla wyszukiwarek",
        have: true,
      },
      {
        title: "Panel Administracyjny",
        have: true,
      },
      {
        title: "Blog na stronie",
        have: true,
      },
      {
        title: "Sklep internetowy",
        have: true,
      },
      {
        title: "Analityka Google",
        have: true,
      },
    ],
  },
  {
    title: "Pakiet Premium",
    cost: [3000, 0],
    popular: false,
    cons: [
      {
        title: "Strona w jednym języku",
        have: true,
      },
      {
        title: "Optymalizacja dla wyszukiwarek",
        have: true,
      },
      {
        title: "Panel Administracyjny",
        have: true,
      },
      {
        title: "Blog na stronie",
        have: true,
      },
      {
        title: "Sklep internetowy",
        have: true,
      },
      {
        title: "Analityka Google",
        have: true,
      },
    ],
  },
  {
    title: "Pakiet Premium",
    cost: [3000, 0],
    popular: false,
    cons: [
      {
        title: "Strona w jednym języku",
        have: true,
      },
      {
        title: "Optymalizacja dla wyszukiwarek",
        have: true,
      },
      {
        title: "Panel Administracyjny",
        have: true,
      },
      {
        title: "Blog na stronie",
        have: true,
      },
      {
        title: "Sklep internetowy",
        have: true,
      },
      {
        title: "Analityka Google",
        have: true,
      },
    ],
  },
];

const Prices = () => {
  const activeSlide = React.useRef<boolean>(false);
  const trackSlider = React.useRef<HTMLDivElement>(null);
  const startPosition = React.useRef<number>(0);
  const actuallyPosition = React.useRef<number>(0);
  const positionBeforeMove = React.useRef<number>(0);
  const container = React.useRef<HTMLDivElement>(null);
  const [currentWidth, setCurrentWidth] = React.useState(300);

  const activateMouseSlide = (e: React.MouseEvent<HTMLDivElement>) => {
    activeSlide.current = true;
    startPosition.current = e.clientX;
    positionBeforeMove.current = actuallyPosition.current;
  };

  const activateTouchSlide = (e: React.TouchEvent<HTMLDivElement>) => {
    activeSlide.current = true;
    startPosition.current = e.touches[0].clientX;
    positionBeforeMove.current = actuallyPosition.current;
  };

  const deactivateMouseSlide = (e: React.MouseEvent<HTMLDivElement>) => {
    activeSlide.current = false;
  };

  const deactivateTouchSlide = (e: React.TouchEvent<HTMLDivElement>) => {
    activeSlide.current = false;
  };

  const handleOnMouseMove = (e: React.MouseEvent) => {
    if (activeSlide.current) {
      actuallyPosition.current =
        positionBeforeMove.current - (startPosition.current - e.clientX);
      if (actuallyPosition.current < -330 * priceBoxes.length + currentWidth) {
        actuallyPosition.current = -330 * priceBoxes.length + currentWidth;
      } else if (actuallyPosition.current > 0) {
        actuallyPosition.current = 0;
      }
      trackSlider.current!.style.transform = `translate3d(${actuallyPosition.current}px, 0, 0)`;
    }
  };

  const handleOnTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (activeSlide.current) {
      actuallyPosition.current =
        positionBeforeMove.current -
        (startPosition.current - e.touches[0].clientX);
      if (actuallyPosition.current < -330 * priceBoxes.length + currentWidth) {
        actuallyPosition.current = -330 * priceBoxes.length + currentWidth;
      } else if (actuallyPosition.current > 0) {
        actuallyPosition.current = 0;
      }
      trackSlider.current!.style.transform = `translate3d(${actuallyPosition.current}px, 0, 0)`;
    }
  };

  React.useEffect(() => {
    const handleSetContainerWidth = () => {
      setCurrentWidth(container.current!.clientWidth);
      if (
        actuallyPosition.current <
        -330 * priceBoxes.length + container.current!.clientWidth
      ) {
        actuallyPosition.current =
          -330 * priceBoxes.length + container.current!.clientWidth;
        trackSlider.current!.style.transform = `translate3d(${actuallyPosition.current}px, 0, 0)`;
      }
    };
    handleSetContainerWidth();

    window.addEventListener("resize", handleSetContainerWidth, true);

    return () => {
      window.removeEventListener("resize", handleSetContainerWidth, true);
    };
  }, [container.current]);

  return (
    <div
      className={style.prices}
      onMouseDown={activateMouseSlide}
      onTouchStart={activateTouchSlide}
      onMouseUp={deactivateMouseSlide}
      onTouchEnd={deactivateTouchSlide}
      onMouseMove={handleOnMouseMove}
      onMouseLeave={deactivateMouseSlide}
      onTouchMove={handleOnTouch}
      ref={container}
    >
      <div
        style={{ minWidth: `${330 * priceBoxes.length}px`, cursor: "pointer" }}
        ref={trackSlider}
      >
        {priceBoxes.map((box, index) => (
          <div key={index} className={style.variant}>
            {box.popular && <div className={style.popular}>Popularny</div>}
            <div className={style.title}>
              <h3>{box.title}</h3>
              <span className={style.price}>
                <span>{box.cost[0]}</span>
                <span>
                  .
                  {String(box.cost[1]).length < 2
                    ? String(box.cost[1]) + "0"
                    : box.cost[1]}{" "}
                  zł
                </span>
              </span>
            </div>
            {box.cons.map((con, i) => (
              <div
                key={i}
                className={style.addon + " " + (con.have ? "" : style.minus)}
              >
                {con.have ? <FaCheck /> : <FaMinus />}
                <span>{con.title}</span>
              </div>
            ))}
            <hr />
            <div className={style.buttonsPrice}>
              <button>Zamawiam</button>
              <button>Więcej</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;
