import React from "react";
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
  hideTitle?: boolean;
}

const Layout = (props: { pages: Page[] }) => {
  const { pages } = props;
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const [currentHeight, setCurrentHeight] = React.useState<number>(0);
  const [currentWidth, setcurrentWidth] = React.useState<number>(0);
  const [mobile, setMobile] = React.useState(false);
  const blockScroll = React.useRef<boolean>(false);
  const sliderMain = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (currentWidth < 800 && mobile === false) {
      sliderMain.current!.scrollTop = 0;
      setMobile(true);
      setCurrentSlide(0);
    } else if (currentWidth > 800 && mobile === true) {
      sliderMain.current!.scrollTop = 0;
      setMobile(false);
      setCurrentSlide(0);
    }
  }, [currentHeight, currentWidth]);

  React.useEffect(() => {
    let before: number;
    const setHeightWidth = () => {
      setCurrentHeight(window.innerHeight);
      setcurrentWidth(window.innerWidth);
    };
    setHeightWidth();

    const changeSlideTouch = (event: TouchEvent) => {
      before = event.touches[0].clientY;
    };

    const changeSlideTouchEnd = (event: TouchEvent) => {
      if (before < event.changedTouches[0].clientY) {
        if (event.changedTouches[0].clientY - before < 70) return;
        if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
      } else if (event!.changedTouches[0]!.clientY < before) {
        if (before - event.changedTouches[0].clientY < 70) return;
        if (currentSlide < pages.length - 1) setCurrentSlide(currentSlide + 1);
      }
    };

    window.addEventListener("resize", setHeightWidth, true);
    if (!mobile) {
      window.addEventListener("touchstart", changeSlideTouch, true);
      window.addEventListener("touchend", changeSlideTouchEnd, true);
    }

    return () => {
      window.removeEventListener("resize", setHeightWidth, true);
      window.removeEventListener("touchstart", changeSlideTouch, true);
      window.removeEventListener("touchend", changeSlideTouchEnd, true);
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
          <img src={logo} alt="C3sare logo" width="120px" height="30px" />
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
                style={mobile ? { ...bgColor(index) } : {}}
                onWheel={mobile ? undefined : handleScroll}
              >
                {mobile ? (
                  <h2>{page.title}</h2>
                ) : page.hideTitle ? (
                  <></>
                ) : (
                  <h5>{page.title}</h5>
                )}
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
          <span>Created for C3sare.pl</span>
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
