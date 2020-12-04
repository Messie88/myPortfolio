import React, { useState, useEffect, useRef } from "react";
import { withRouter, Link } from "react-router-dom";
import './header.scss';

import Hamburger from "../hamburger-menu/hamburger-menu.component";
import {TimelineLite, gsap, Power3, TweenMax} from "gsap";

const Header = ({ history }) => {

    let close1 = useRef(null);
    let close2 = useRef(null);
    let close3 = useRef(null);
    let menuLogo = useRef(null);
    let menuProject = useRef(null);
    let menuIcon = useRef(null);

    let tl = new TimelineLite({delay: .8});


    // State for menu button
    const [state, setState] = useState({
      initial: false,
      clicked: null
    });

    // State for disabled button
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
      // HEADER ANIMATIONS
      tl.from(menuLogo, 0.1, {
        y: '15px',
        ease: "back",
        //delay: .5,
        opacity: 0
      }, 'Start');
      tl.from(menuProject, 0.1, {
        y: '15px',
        ease: "back",
        //delay: .7,
        opacity: 0
      }, 'Start');
      tl.from( menuIcon, 0.1, {
        y: '15px',
        ease: "back",
        //delay: .5,
        opacity: 0
      }, 'Start');

      // Menu icon animations
        if (state.clicked === true) {
          TweenMax.to(close1, {
            css: {
              rotation: 45,
              top: 20
            }
          });
          TweenMax.to(close2, {
            opacity: 0
          });
          TweenMax.to(close3, {
            css: {
              rotation: -45,
              top: 20
            }
          });
        } else if (state.clicked === false) {
          TweenMax.to([menuLogo, menuProject, menuIcon], 0, {
            y: 0,
            delay: 0
          });
          TweenMax.to(close1, {
            css: {
              rotation: 0,
              top: 10,
            },
            delay: .3,
            duration: .5
          });
          TweenMax.to(close2, {
            opacity: 1,
            delay: .5,
            duration: .5
          });
          TweenMax.to(close3, {
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
        <div className="logo" ref={ el => menuLogo=el}>
            <Link to='/'>M</Link>
        </div>
        <div className="projects" ref={ el => menuProject=el}>
            Projects
        </div>
        <div className="menu" 
        onClick={handleMenu} 
        disabled={disabled}
         ref={ el => menuIcon=el}>
            <div className="one" ref={el => {close1=el}}></div>
            <div className="two" ref={el => {close2=el}}></div>
            <div className="three" ref={el => {close3=el}}></div>
        </div>
        <Hamburger state={state} />
      </div>
    )
}

export default withRouter(Header);