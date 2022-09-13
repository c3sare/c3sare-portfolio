import React, { TouchEventHandler, UIEventHandler } from "react";
import * as style from "../styles/style.module.css";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaAngleDoubleDown } from "@react-icons/all-files/fa/FaAngleDoubleDown";
import { FaRegWindowClose } from "@react-icons/all-files/fa/FaRegWindowClose";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { Link } from "gatsby";
import logo from "../images/logo.webp";

export interface Page {
  title: string;
  component: JSX.Element;
  icon: JSX.Element;
}

const Layout = (props: { pages: Page[] }) => {
  const { pages } = props;
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const [currentHeight, setCurrentHeight] = React.useState<number>(0);
  const [currentWidth, setcurrentWidth] = React.useState<number>(0);
  const [mobile, setMobile] = React.useState(false);
  const blockScroll = React.useRef<boolean>(false);
  const sliderMain = React.useRef<HTMLDivElement>(null);
  const startTouch = React.useRef<number>(0);
  const scrollTouchTop = React.useRef<number>(0);

  const changeSlideTouch = (event: React.TouchEvent<HTMLDivElement>) => {
    startTouch.current = event.touches[0].clientY;
    scrollTouchTop.current = event.currentTarget.scrollTop;
  };

  const changeSlideTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (scrollTouchTop.current !== event.currentTarget.scrollTop) {
      return;
    }
    if (startTouch.current < event.changedTouches[0]!.clientY) {
      if (event.currentTarget.scrollTop !== 0) {
        return;
      }
      if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
    } else if (event!.changedTouches[0]!.clientY < startTouch.current) {
      if (
        event.currentTarget.scrollTop + event.currentTarget.clientHeight <
        event.currentTarget.scrollHeight
      ) {
        return;
      }
      if (currentSlide < pages.length - 1) setCurrentSlide(currentSlide + 1);
    }
  };

  React.useEffect(() => {
    if (currentWidth < 800 && mobile === false) {
      sliderMain.current!.scrollTop = 0;
      setMobile(true);
      setCurrentSlide(0);
    } else if (currentWidth > 799 && mobile === true) {
      sliderMain.current!.scrollTop = 0;
      setMobile(false);
      setCurrentSlide(0);
    }
  }, [currentHeight, currentWidth]);

  React.useEffect(() => {
    const setHeightWidth = () => {
      setCurrentHeight(window.innerHeight);
      setcurrentWidth(window.innerWidth);
    };
    setHeightWidth();

    window.addEventListener("resize", setHeightWidth, true);

    return () => {
      window.removeEventListener("resize", setHeightWidth, true);
    };
  }, [currentSlide, mobile]);

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!blockScroll.current) {
      if (e.deltaY > 0) {
        if (
          e.currentTarget.scrollTop + e.currentTarget.clientHeight <
          e.currentTarget.scrollHeight
        ) {
          return;
        }
        if (pages.length - 1 > currentSlide) {
          setCurrentSlide(currentSlide + 1);
          blockScroll.current = true;
          setTimeout(() => (blockScroll.current = false), 900);
        }
      } else if (e.deltaY < 0) {
        if (e.currentTarget.scrollTop !== 0) {
          return;
        }
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
          blockScroll.current = true;
          setTimeout(() => (blockScroll.current = false), 900);
        }
      }
    }
  };

  function bgColor(index: number) {
    return index % 2 === 1
      ? {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }
      : {};
  }

  return (
    <div className={style.background}>
      <header className={style.header}>
        <Link to="/">
          <img src={logo} alt="C3sare logo" width="120px" height="39px" />
        </Link>
      </header>
      <div className={style.backgroundGradient}>
        <div
          className={style.sliderMain}
          ref={sliderMain}
          style={mobile ? { overflow: "auto" } : {}}
        >
          <div
            style={{
              transform: `translate3d(0, ${
                mobile ? "0" : -currentSlide * currentHeight
              }px, 0)`,
            }}
          >
            {pages.map((page, index) => (
              <div
                className={style.page}
                key={index}
                style={
                  mobile
                    ? { minHeight: "auto", height: "auto", ...bgColor(index) }
                    : {}
                }
                onTouchStart={mobile ? undefined : changeSlideTouch}
                onTouchEnd={mobile ? undefined : changeSlideTouchEnd}
                onWheel={mobile ? undefined : handleScroll}
              >
                {mobile ? <h2>{page.title}</h2> : <h5>{page.title}</h5>}
                <div className={style.pageContent}>{page.component}</div>
                {!mobile && index < pages.length - 1 && (
                  <footer
                    className={style.nextSlide}
                    onClick={() => setCurrentSlide(currentSlide + 1)}
                  >
                    <FaAngleDoubleDown />
                    <span>{pages[index + 1].title}</span>
                  </footer>
                )}
              </div>
            ))}
          </div>
        </div>
        {!mobile && (
          <div className={style.rightBar}>
            <div className={style.slideButtons}>
              {pages.map((page, index) => (
                <div
                  key={index}
                  className={currentSlide === index ? style.activeSlide : ""}
                  onClick={() => setCurrentSlide(index)}
                >
                  {page.icon} <span>{page.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <footer className={style.copyrights}>
          <span>Created by C3sare</span>
          <span>
            <a
              target="_blank"
              href="https://www.facebook.com/marcin.marciniuk.33/"
              aria-label="C3sare - Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/marcin-marciniuk-b35646220/"
              aria-label="C3sare - Linkedin"
            >
              <FaLinkedinIn />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/plc3sare/"
              aria-label="C3sare - Instagram"
            >
              <FaInstagram />
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
