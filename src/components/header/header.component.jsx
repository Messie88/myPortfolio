import React, { useState, useEffect, useRef } from "react";
import { withRouter, Link } from "react-router-dom";
import './header.scss';

import Hamburger from "../hamburger-menu/hamburger-menu.component";
import gsap from "gsap";
import { delay } from "q";

const Header = ({ history }) => {

    let close1 = useRef(null);
    let close2 = useRef(null);
    let close3 = useRef(null);


    // State for menu button
    const [state, setState] = useState({
      initial: false,
      clicked: null
    });

    // State for disabled button
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
      // Menu icon animations
        if (state.clicked === true) {
          gsap.to(close1, {
            css: {
              rotation: 45,
              top: 17
            }
          });
          gsap.to(close2, {
            opacity: 0
          });
          gsap.to(close3, {
            css: {
              rotation: -45,
              top: 17
            }
          });
        } else if (state.clicked === false) {
          gsap.to(close1, {
            css: {
              rotation: 0,
              top: 10,
            },
            delay: .3,
            duration: .5
          });
          gsap.to(close2, {
            opacity: 1,
            delay: .5,
            duration: .5
          });
          gsap.to(close3, {
            css: {
              rotation: 0,
              top: 24,
            },
            delay: .5,
            duration: .3
          });
        }

        // Page changing
        history.listen(() => {
          setState({clicked: false})
        });
    })

    const handleMenu = () => {
      disableMenu();
      // This will be rendered when the app first open
      if (state.initial === false) {
        setState({
          initial: null,
          clicked: true
        });
      }
        //The next two, for the toggle
      else if (state.clicked === true) {
        setState({
          clicked: !state.clicked
        });
      } else if (state.clicked === false) {
        setState({
          clicked: !state.clicked
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
      <div className="header">
        <div className="logo">
            <Link to='/'>M</Link>
        </div>
        <div className="projects">
            Projects
        </div>
        <div className="menu" 
        onClick={handleMenu} 
        disabled={disabled}>
            <div className="one" ref={el => {close1=el}}></div>
            <div className="two" ref={el => {close2=el}}></div>
            <div className="three" ref={el => {close3=el}}></div>
        </div>
        <Hamburger state={state} />
      </div>
    )
}

export default withRouter(Header);