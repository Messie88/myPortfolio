import React from "react";

import './hamburger-menu.scss'

const Hamburger = () => (
    <div className="hamburger-menu">
        <div className="menu-container">
            <div className="background-image"></div>
            <div className="container">
                <div className="menu-links">
                    <nav>
                        <ul>
                            <li><a href="#">Projects<span className='big-span'>01<span className='small-span'>Recent Ones</span></span></a></li>
                            <li><a href="#">About<span className='big-span'>02<span className='small-span'>A bit more of me</span></span></a></li>
                            <li><a href="#">Contact<span className='big-span'>03<span className='small-span'>Let's give a five</span></span></a></li>
                        </ul>
                    </nav>
                </div>
                <div className="social">
                    <h3><em>Let's go social:</em></h3>
                    <a href="#">Github</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </div>
    </div>
)

export default Hamburger;