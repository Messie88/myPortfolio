import React from "react";

import './header.scss';

import Hamburger from "../hamburger-menu/hamburger-menu.component";

const Header = () => (
    <div className="header">
        <div className="logo">
            M
        </div>
        <div className="projects">
            Projects
        </div>
        <div className="menu">
            <div className="menu-logo"></div>
        </div>
        <Hamburger />
    </div>
)

export default Header;