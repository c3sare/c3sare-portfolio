import React from "react";
import * as style from "../styles/home.module.css";
import { graphql, useStaticQuery } from "gatsby";

interface Social {
  name: string;
  url: string;
  icon: {
    url: string;
  };
}

const Home = (props: any) => {
  const [offsetX, setOffsetX] = React.useState<"" | number>("");
  const [offsetY, setOffsetY] = React.useState<"" | number>("");
  const names = React.useRef<HTMLSpanElement>(null);
  const friction = 1 / 32;

  const socials: Social[] = useStaticQuery(graphql`
    {
      allContentfulSocials {
        nodes {
          icon {
            url
          }
          name
          url
        }
      }
    }
  `).allContentfulSocials.nodes;

  React.useEffect(() => {
    let mounted = true;
    const list = [
      "Marcin Marciniuk",
      "Fullstack Developer",
      "Website Designer",
    ];
    let x = 1;
    let y = 0;
    let r = false;

    let timer: any = null;

    const timeout = () => {
      if (!mounted) return;
      if (!r) {
        names.current!.textContent = list[y].slice(0, x);
        x++;
        if (x > list[y].length) {
          r = true;
          timer = setTimeout(timeout, 2000);
        } else {
          timer = setTimeout(timeout, 100);
        }
      } else {
        names.current!.textContent = list[y].slice(0, x);
        x--;
        if (x < 0) {
          x = 0;
          y++;
          r = false;
          timer = setTimeout(timeout, 1000);
        } else {
          timer = setTimeout(timeout, 100);
        }
      }

      if (y >= list.length) y = 0;
    };

    timer = setTimeout(timeout, 150);

    return () => {
      if (timer) clearTimeout(timer);
      mounted = false;
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    let followX = window.innerWidth / 2 - e.clientX;
    let followY = window.innerHeight / 2 - e.clientY;

    let x = 0,
      y = 0;
    x += (-followX - x) * friction;
    y += (followY - y) * friction;

    setOffsetX(x);
    setOffsetY(y);
  };

  let offset = {
    transform: `perspective(600px) rotateY(${offsetX}deg) rotateX(${offsetY}deg)`,
  };

  const handleOnMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setOffsetX(0);
    setOffsetY(0);
  };

  return (
    <div
      className={style.home}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleOnMouseLeave}
    >
      <div style={offset}>
        <p className={style.text}>
          Hi There!
          <br />
          <span className={style.typing}>
            I am <span ref={names}></span>
            <span className={style.cursor} />
          </span>
          <br />
          Welcome on my website
        </p>
        <div className={style.socials}>
          {socials.map((node) => (
            <a
              key={node.name}
              target="_blank"
              href={node.url}
              aria-label={node.name}
            >
              <img
                src={node.icon.url}
                alt={node.name}
                width="40px"
                height="40px"
              />
            </a>
          ))}
        </div>
        <button onClick={() => props.setCurrentSlide(5)}>
          Contact with me
        </button>
      </div>
    </div>
  );
};

export default Home;
