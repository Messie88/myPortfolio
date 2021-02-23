import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, Power3 } from "gsap";

import classes from "./Hamburger.module.scss";

const images = [
  { image: "/images/portfolio2.jpeg" },
  { image: "/images/about2.jpeg" },
  { image: "/images/contact.jpeg" },
  { image: "/images/gitRepo.jpg" },
  { image: "/images/linkedin.jpg" },
];

const Hamburger = ({ state }) => {
  const { clicked, initial } = state;

  // Vars for our animations
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  //let line4 = useRef(null);
  //let line5 = useRef(null);
  let social = useRef(null);
  let menuLinks = useRef(null);

  useEffect(() => {
    //Open our menu
    if (clicked === true || (clicked === true && initial === null)) {
      gsap.to(menu, {
        duration: 0,
        css: {
          display: "block",
        },
      });
      gsap.to(revealMenu, {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenu);
      fadeInUp(social);
      staggertext(line1, line2, line3);
    } else if (clicked === false) {
      //Close our Menu
      gsap.to([revealMenu], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });

      gsap.from(
        [line3, line2, line1],
        {
          bottom: "-80px",
          duration: 2,
          ease: "power3.inOut",
        },
        1000
      );

      gsap.from(
        [social.children[0], social.children[1], social.children[2]],
        {
          bottom: "-20px",
          duration: 2,
          ease: "power3.inOut",
          position: "relative",
        },
        500
      );
    }
  }, [initial, clicked]);

  const staggerReveal = (node) => {
    gsap.from(node, {
      duration: 0.6,
      height: 0,
      delay: 0,
      transformOrigin: "right top",
      skewY: 5,
      stagger: {
        amount: 0.1,
      },
    });
  };

  const staggertext = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.6,
      y: 400,
      delay: 0.15,
      ease: Power3.easeOut,
      stagger: {
        amount: 0.3,
      },
    });
    gsap.to(menuLinks, {
      top: 0,
    });
  };

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 100,
      duration: 1,
      delay: 0.6,
      opacity: 0,
      ease: Power3.easeInOut,
    });
  };

  const handleOver = (e) => {
    gsap.to(e.target, {
      duration: 0.2,
      y: 5,
      skewX: 4,
      ease: Power3.easeOut,
      delay: 0,
    });
  };

  const handleOverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.2,
      y: -5,
      skewX: 0,
      ease: Power3.inOut,
      delay: 0,
    });
  };

  const handleCity = (image) => {
    gsap.to(cityBackground, {
      duration: 0,
      background: `url(${image}) center center`,
    });
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 1,
      ease: Power3.inOut,
    });
    gsap.from(cityBackground, {
      duration: 0.4,
      //skewY: 2,
      transformOrigin: "right top",
    });
  };

  const handleCityReturn = () => {
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 0,
    });
  };

  return (
    <div className={classes.hamburgerMenu} ref={(el) => (menu = el)}>
      <div
        className={classes.menuContainer}
        ref={(el) => {
          revealMenu = el;
        }}
      >
        <div
          className={classes.backgroundImage}
          ref={(el) => (cityBackground = el)}
        ></div>
        <div className={classes.container}>
          <div
            className={classes.menuLinks}
            ref={(el) => {
              menuLinks = el;
            }}
          >
            <nav>
              <ul>
                <li>
                  <Link href="/projects">
                    <a
                      ref={(el) => {
                        line1 = el;
                      }}
                      onMouseEnter={(e) => {
                        handleOver(e);
                        handleCity(images[0].image);
                      }}
                      onMouseOut={(e) => {
                        handleOverExit(e);
                        handleCityReturn(e);
                      }}
                    >
                      Projects
                      <span className={classes.bigSpan}>
                        01<span className={classes.smallSpan}>Recent Ones</span>
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a
                      ref={(el) => {
                        line2 = el;
                      }}
                      onMouseEnter={(e) => {
                        handleOver(e);
                        handleCity(images[1].image);
                      }}
                      onMouseOut={(e) => {
                        handleOverExit(e);
                        handleCityReturn(e);
                      }}
                    >
                      About
                      <span className={classes.bigSpan}>
                        02
                        <span className={classes.smallSpan}>
                          A bit more of me
                        </span>
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-me">
                    <a
                      ref={(el) => {
                        line3 = el;
                      }}
                      onMouseEnter={(e) => {
                        handleOver(e);
                        handleCity(images[2].image);
                      }}
                      onMouseOut={(e) => {
                        handleOverExit(e);
                        handleCityReturn(e);
                      }}
                    >
                      Contact
                      <span className={classes.bigSpan}>
                        03
                        <span className={classes.smallSpan}>
                          Let's give a five
                        </span>
                      </span>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className={classes.social}
            ref={(el) => {
              social = el;
            }}
          >
            <h3>
              <em>Let's go social:</em>
            </h3>
            <a
              //ref={el => { line3 = el }}
              onMouseEnter={(e) => {
                //handleOver(e);
                handleCity(images[3].image);
              }}
              onMouseOut={(e) => {
                handleOverExit(e);
                handleCityReturn(e);
              }}
              target="_blank"
              href="https://github.com/Messie88"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              //ref={el => { line3 = el }}
              onMouseEnter={(e) => {
                //handleOver(e);
                handleCity(images[4].image);
              }}
              onMouseOut={(e) => {
                handleOverExit(e);
                handleCityReturn(e);
              }}
              target="_blank"
              href="https://www.linkedin.com/in/pathe-messie-nungi-pambu/"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
