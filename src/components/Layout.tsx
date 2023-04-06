import React from "react";
import * as style from "../styles/style.module.css";
import FaAngleDoubleDown from "../icons/FaAngleDoubleDown";
import FaBars from "../icons/FaBars";
import { Link } from "gatsby";
import logo from "../images/logo.webp";

export interface Page {
  title: string;
  component: any;
  icon: JSX.Element;
  hideTitle?: boolean;
}

const Layout = (props: {
  pages?: Page[];
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}) => {
  const { pages } = props;
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const [currentHeight, setCurrentHeight] = React.useState<number>(0);
  const [currentWidth, setcurrentWidth] = React.useState<number>(0);
  const [mobile, setMobile] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const blockScroll = React.useRef<boolean>(false);
  const sliderMain = React.useRef<HTMLDivElement>(null);
  const before = React.useRef(0);
  const scrollTopBefore = React.useRef(0);

  const changeSlideTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    before.current = event.touches[0].clientY;
    scrollTopBefore.current = event.currentTarget.scrollTop;
  };

  const changeSlideTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (before.current < event.changedTouches[0].clientY) {
      if (event.changedTouches[0].clientY - before.current < 70) return;
      if (event.currentTarget.scrollTop !== 0) return;
      if (event.currentTarget.scrollTop === scrollTopBefore.current) {
        if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
      }
    } else if (event!.changedTouches[0]!.clientY < before.current) {
      if (before.current - event.changedTouches[0].clientY < 70) return;
      if (
        Math.ceil(
          event.currentTarget.scrollTop + event.currentTarget.offsetHeight
        ) < event.currentTarget.scrollHeight
      ) {
        return;
      }
      if (event.currentTarget.scrollTop === scrollTopBefore.current) {
        if (currentSlide < pages!.length - 1) setCurrentSlide(currentSlide + 1);
      }
    }
  };

  React.useEffect(() => {
    if (currentWidth < 800 && mobile === false) {
      setMobile(true);
    } else if (currentWidth > 800 && mobile === true) {
      if (pages) sliderMain.current!.scrollTop = 0;
      setMobile(false);
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
          Math.ceil(e.currentTarget.scrollTop + e.currentTarget.offsetHeight) <
          e.currentTarget.scrollHeight
        ) {
          return;
        }
        if (pages!.length - 1 > currentSlide) {
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
    <>
      <div className={style.background}>
        <header className={style.header}>
          <Link to="/">
            <img src={logo} alt="C3sare logo" width="120px" height="30px" />
          </Link>
          <div className={style.menu}>
            <Link activeClassName={style.active} to="/">
              Strona Główna
            </Link>
            <Link activeClassName={style.active} to="/projects">
              Projekty
            </Link>
            <div className={style.navButton} onClick={() => setOpenMenu(true)}>
              <FaBars />
            </div>
          </div>
        </header>
        <div className={style.backgroundGradient}>
          {pages ? (
            <div className={style.sliderMain} ref={sliderMain}>
              <div
                style={{
                  transform: `translate3d(0, ${-currentSlide * 100}vh, 0)`,
                }}
              >
                {pages.map((page, index) => (
                  <div
                    className={style.page}
                    key={index}
                    style={mobile ? { ...bgColor(index) } : {}}
                    onWheel={handleScroll}
                    onTouchStart={changeSlideTouchStart}
                    onTouchEnd={changeSlideTouchEnd}
                  >
                    {page.hideTitle ? null : <h2>{page.title}</h2>}
                    <div className={style.pageContent}>
                      <page.component setCurrentSlide={setCurrentSlide} />
                    </div>
                    {index < pages.length - 1 && (
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
          ) : (
            <main className={style.main}>{props.children}</main>
          )}
          {pages && (
            <div
              className={style.rightBar}
              style={showMobileMenu ? { right: "8px" } : {}}
            >
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
              <div
                className={style.btnShowHideMenu}
                style={
                  showMobileMenu
                    ? { transform: "rotate(270deg)", right: "100%" }
                    : {}
                }
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <FaAngleDoubleDown />
              </div>
            </div>
          )}
        </div>
      </div>
      {openMenu && (
        <div className={style.menuMobile}>
          <div>
            <h2>Menu</h2>
            {pages &&
              pages.map((page, index) => (
                <button
                  key={index}
                  className={currentSlide === index ? style.activeSlide : ""}
                  onClick={() => {
                    if (index !== currentSlide) {
                      setCurrentSlide(index);
                      setOpenMenu(false);
                    }
                  }}
                >
                  {page.icon} <span>{page.title}</span>
                </button>
              ))}
          </div>
          <div>
            <h2>Inne strony</h2>
            <div>
              <Link activeClassName={style.active} to="/">
                <button>Strona Główna</button>
              </Link>
              <Link activeClassName={style.active} to="/projects">
                <button>Projekty</button>
              </Link>
            </div>
          </div>
          <button onClick={() => setOpenMenu(false)}>Zamknij nawigację</button>
        </div>
      )}
    </>
  );
};

export default Layout;
