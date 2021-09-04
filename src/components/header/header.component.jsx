import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { TweenMax, gsap, Power4 } from "gsap";

import Hamburger from "./Hamburger";

import styles from "./Header.module.scss";

const Header = () => {
  let close1 = useRef(null);
  let close2 = useRef(null);
  let close3 = useRef(null);
  let menuLogo = useRef(null);
  let menuProject = useRef(null);
  let menuIcon = useRef(null);


  // State for menu button
  const [state, setState] = useState({
    initial: false,
    clicked: null,
  });

  // State for disabled button
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    gsap.to(menuLogo, {
      y: 0,
      opacity: 1,
      ease: Power4.easeOut,
      delay: 1.3,
      duration: 0.8,
    })
    gsap.to(menuIcon, {
      y: 0,
      opacity: 1,
      ease: Power4.easeOut,
      delay: 1.3,
      duration: 0.8,
    })

    // Menu icon animations
    if (state.clicked === true) {
      TweenMax.to(close1, {
        css: {
          rotation: 45,
          top: 0,
        },
      });
      TweenMax.to(close2, {
        opacity: 0,
      });
      TweenMax.to(close3, {
        css: {
          rotation: -45,
          top: 0,
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
          top: 0,
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
          top: 14,
        },
        delay: 0.5,
        duration: 0.3,
      });
    }

    // Page changing
    // history.listen(() => {
    // setState({ clicked: false });
    // });
  }, [state.clicked]);

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
    <div className={styles.header}>
      <Link href="/">
        <div
          className={styles.logo}
          ref={(el) => (menuLogo = el)}
          onClick={() => setState({ clicked: false })}
        >
          <a>
            <p>mes</p>
            <p id={styles.last}>sie</p>
          </a>
        </div>
      </Link>
      <div
        className={styles.menu}
        onClick={handleMenu}
        disabled={disabled}
        ref={(el) => (menuIcon = el)}
      >
        <div
          className={styles.one}
          ref={(el) => {
            close1 = el;
          }}
        ></div>
        <div
          className={styles.two}
          ref={(el) => {
            close2 = el;
          }}
        ></div>
        <div
          className={styles.three}
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
