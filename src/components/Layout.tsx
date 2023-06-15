import React from "react";
import * as style from "../styles/style.module.css";
import FaBars from "../icons/FaBars";
import { Link } from "gatsby";
import logo from "../images/logo.webp";

const Layout = (props: {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <>
      <div className={style.background}>
        <header className={style.header}>
          <Link to="/">
            <img src={logo} alt="C3sare logo" width="120px" height="30px" />
          </Link>
          <nav className={style.menu}>
            <Link activeClassName={style.active} to="/">
              Home
            </Link>
            <Link activeClassName={style.active} to="/projects">
              Projects
            </Link>
            <div className={style.navButton} onClick={() => setOpenMenu(true)}>
              <FaBars />
            </div>
          </nav>
        </header>
        <div className={style.backgroundGradient + " " + style.scrollFix}>
          <main className={style.main}>{props.children}</main>
        </div>
      </div>
      {openMenu && (
        <aside className={style.menuMobile}>
          <nav>
            <h2>Navigation</h2>
            <div>
              <Link activeClassName={style.active} to="/">
                <button>Home</button>
              </Link>
              <Link activeClassName={style.active} to="/projects">
                <button>Projects</button>
              </Link>
            </div>
          </nav>
          <button onClick={() => setOpenMenu(false)}>Close</button>
        </aside>
      )}
    </>
  );
};

export default Layout;
