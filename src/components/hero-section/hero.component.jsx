import React, { useRef, useEffect } from "react";

import Parallax from 'parallax-js';

import { TweenMax, Power3, TimelineLite } from "gsap";

import './hero.scss';

//Assests
import arrow from "../../images/arrow-rigth.svg";
import firstImage from "../../images/image1.jpg";
import secondImage from "../../images/image2.jpg";

const Hero = () => {

  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  let tl = new TimelineLite({delay: .8});

  useEffect(() => {
    // Parallax effect on images
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      calibrateX: true
    });
    parallaxInstance.calibrate(10, .5);

    //Images Vars
    const firstImg = images.firstElementChild;
    const secondImg = images.lastElementChild;

    //Content Vars
    const headlineFirst = content.children[0].children[0].children[0];
    //const headlineSecond = headlineFirst.nextSibling;
    const headlineSecond = content.children[0].children[0].children[1];
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //console.log( headlineFirst, headlineSecond)

    TweenMax.to(app, 0, {
      css: {visibility: 'visible', background: '#394359'},
      ease: Power3.easeOut
    });
    
    //Images Animations
    tl.from( secondImg,1.2,{y: 1280, ease: Power3.easeOut}, 'Start')
    .from( secondImg.firstElementChild,
      2,
      {scale: 1.6, ease: Power3.easeOut },
      .2
    )
    .from( firstImg, 1.5, {y: 1580, ease: Power3.easeOut}, .2)
    .from( firstImg.firstElementChild, 
      2, 
      { scale: 1.6, ease: Power3.easeOut },
      .2
    )

    //Content Animations
    tl.staggerFrom([headlineFirst, headlineSecond], 1, {
      y: 70,
      ease: "back",
      delay: .8,
    }, .15, 'Start')
    .from(contentP, 1, {
      y:20,
      opacity: 0,
      ease: "back",
    }, 1.4)
    .from(contentButton, 1, {
      y:20,
      opacity: 0,
      ease: "back",
    }, 1.6)

  });

  return (
    <div className="hero" ref={el => app=el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content=el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner small">
                    Messie NUNGI PAMBU
                  </div>
                  <div className="hero-content-line-inner">
                    WEB DEVELOPPER
                  </div>
                </div>
              </h1>
              <p>Hi! I'm <strong>Messie</strong> living in Marseille
               (France). I'm a <strong>Web Developer</strong>, 
               design and drawing buff, and an entrepreneur in the 
               soul. I like meeting new challenges and I don't miss 
               an opportunity to learn</p>
               <div className="btn-row">
                 <button className="explore-button">
                   explore
                   <div className="arrow-icon">
                     <img src={arrow} alt="arrow"/>
                   </div>
                 </button>
               </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" 
            ref={el => images = el}
            data-relative-input="true"
            data-calibrate-x='true'
            id="scene"
            >
              <div className="hero-image first"
              data-depth="0.2"
              >
                <img src={firstImage} alt="front-img"/>
              </div>
              <div className="hero-image second"
              data-depth="0.4"
              >
                <img src={secondImage} alt="back-img"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Hero;