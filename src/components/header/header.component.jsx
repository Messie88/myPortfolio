import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { TimelineLite, TweenMax } from "gsap";

import Hamburger from "./Hamburger";

import classes from "./Header.module.scss";

const Header = () => {
  let close1 = useRef(null);
  let close2 = useRef(null);
  let close3 = useRef(null);
  let menuLogo = useRef(null);
  let menuProject = useRef(null);
  let menuIcon = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });

  // State for menu button
  const [state, setState] = useState({
    initial: false,
    clicked: null,
  });

  // State for disabled button
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // HEADER ANIMATIONS
    tl.to(
      menuLogo,
      0.1,
      {
        top: "0px",
        ease: "back",
        opacity: 1,
        delay: 0
      }
    );
    tl.to(
      menuProject,
      0.1,
      {
        top: "0px",
        ease: "back",
        delay: .1,
        opacity: 1,
      }
    );
    tl.to(
      menuIcon,
      0.1,
      {
        top: 0,
        ease: "back",
        opacity: 1,
        delay: .2
      }
    );

    // Menu icon animations
    if (state.clicked === true) {
      TweenMax.to(close1, {
        css: {
          rotation: 45,
          top: 20,
        },
      });
      TweenMax.to(close2, {
        opacity: 0,
      });
      TweenMax.to(close3, {
        css: {
          rotation: -45,
          top: 20,
        },
      });
    } else if (state.clicked === false) {
      TweenMax.to([menuLogo, /*menuProject,*/ menuIcon], 0, {
        y: 0,
        delay: 0,
      });
      TweenMax.to(close1, {
        css: {
          rotation: 0,
          top: 10,
        },
        delay: 0.3,
        duration: 0.5,
      });
      TweenMax.to(close2, {
        opacity: 1,
        delay: 0.5,
        duration: 0.5,
      });
      TweenMax.to(close3, {
        css: {
          rotation: 0,
          top: 24,
        },
        delay: 0.5,
        duration: 0.3,
      });
    }

    // Page changing
    // history.listen(() => {
    // setState({ clicked: false });
    // });
  }, []);

  const handleMenu = () => {
    disableMenu();
    // This will be rendered when the app first open
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
      });
    }
    //The next two, for the toggle
    else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
      });
    }
  };

  /* Determined if our menu should be disabled. 
    This is useful to prevent spam */
  const disableMenu = () => {
    setState(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <div className={classes.header}>
      <Link href="/">
        <div
          className={classes.logo}
          ref={(el) => (menuLogo = el)}
          onClick={() => setState({ clicked: false })}
        >
          <a>M</a>
        </div>
      </Link>
      {/* <div className={classes.projects} ref={(el) => (menuProject = el)}>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </div> */}
      <Link href="/projects">
        <div className={classes.arrowIcon} ref={(el) => (menuProject = el)}>
          <img src="/images/DottedWhite.svg" alt="arrow" />
        </div>
      </Link>   
      <div
        className={classes.menu}
        onClick={handleMenu}
        disabled={disabled}
        ref={(el) => (menuIcon = el)}
      >
        <div
          className={classes.one}
          ref={(el) => {
            close1 = el;
          }}
        ></div>
        <div
          className={classes.two}
          ref={(el) => {
            close2 = el;
          }}
        ></div>
        <div
          className={classes.three}
          ref={(el) => {
            close3 = el;
          }}
        ></div>
      </div>
      {state.clicked && <Hamburger state={state} />}
    </div>
  );
};

export default Header;
