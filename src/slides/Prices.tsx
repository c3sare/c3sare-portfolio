import React from "react";
import * as style from "../styles/prices.module.css";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaMinus } from "@react-icons/all-files/fa/FaMinus";
import { graphql, Link, useStaticQuery } from "gatsby";

interface PriceBox {
  title: string;
  cost: [number, number];
  popular?: boolean;
  pros: string[];
  cons: string[];
  slug: string;
}

const Prices = () => {
  const activeSlide = React.useRef<boolean>(false);
  const trackSlider = React.useRef<HTMLDivElement>(null);
  const startPosition = React.useRef<number>(0);
  const actuallyPosition = React.useRef<number>(0);
  const positionBeforeMove = React.useRef<number>(0);
  const container = React.useRef<HTMLDivElement>(null);
  const [currentWidth, setCurrentWidth] = React.useState(300);
  const mount = React.useRef(false);

  React.useEffect(() => {
    mount.current = true;

    return () => {
      mount.current = false;
    };
  }, []);

  const priceBoxes: PriceBox[] = useStaticQuery(graphql`
    {
      allContentfulPrices {
        nodes {
          name
          pros
          cons
          cost
          popular
          slug
        }
      }
    }
  `).allContentfulPrices.nodes.map((item: any) => ({
    title: item.name,
    pros: item.pros === null ? [] : [...item.pros],
    cons: item.cons === null ? [] : [...item.cons],
    popular: item.popular,
    cost: [item.cost, 0],
    slug: item.slug,
  }));

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

    actuallyPosition.current = Math.round(actuallyPosition.current / 330) * 330;

    trackSlider.current!.style.transition = ".3s transform";
    trackSlider.current!.style.transform = `translate3d(${actuallyPosition.current}px, 0, 0)`;
    setTimeout(() => {
      if (mount.current) trackSlider.current!.style.transition = "";
    }, 500);
  };

  const deactivateTouchSlide = (e: React.TouchEvent<HTMLDivElement>) => {
    activeSlide.current = false;

    actuallyPosition.current = Math.round(actuallyPosition.current / 330) * 330;

    trackSlider.current!.style.transition = ".3s transform";
    trackSlider.current!.style.transform = `translate3d(${actuallyPosition.current}px, 0, 0)`;
    setTimeout(() => {
      if (mount.current) trackSlider.current!.style.transition = "";
    }, 500);
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
      if (
        actuallyPosition.current !== 0 &&
        330 * priceBoxes.length < container.current!.clientWidth
      ) {
        actuallyPosition.current = 0;
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
      onMouseDown={(e) => {
        if (e.currentTarget.clientWidth < 330 * priceBoxes.length) {
          activateMouseSlide(e);
        }
      }}
      onTouchStart={(e) => {
        if (e.currentTarget.clientWidth < 330 * priceBoxes.length) {
          activateTouchSlide(e);
        }
      }}
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
            {box.pros.map((pro, i) => (
              <div key={i} className={style.addon}>
                <FaCheck />
                <span>{pro}</span>
              </div>
            ))}
            {box.cons.map((con, i) => (
              <div key={i} className={style.addon + " " + style.minus}>
                <FaMinus />
                <span>{con}</span>
              </div>
            ))}
            <hr />
            <div className={style.buttonsPrice}>
              <Link to={`/prices/${box.slug}`}>
                <button>Więcej</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;
