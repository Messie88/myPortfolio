import React, { useRef, useEffect } from "react";
import Parallax from "parallax-js";
import { TweenMax, Power3, TimelineLite } from "gsap";
import Link from "next/link";

//Assests
// import arrow from "../../images/arrow-rigth.svg";

import styles from "./HeroSection.module.scss";

const Hero = () => {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    // Parallax effect on images
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      calibrateX: true,
    });
    parallaxInstance.calibrate(10, 0.5);

    //Images Vars
    const firstImg = images.firstElementChild;
    const secondImg = images.lastElementChild;

    //Content Vars
    const headlineFirst = content.children[0].children[0].children[0];
    //const headlineSecond = headlineFirst.nextSibling;
    const headlineSecond = content.children[0].children[0].children[1];
    const headlineThrid = content.children[0].children[0].children[2];
    const headlineFourth = content.children[0].children[0].children[3];
    const contentP = content.children[1];
    const contentButton = content.children[2];

    console.log(firstImg, secondImg);

    TweenMax.to(app, 0, {
      css: { visibility: "visible" },
      ease: Power3.easeOut,
    });

    //Images Animations
    tl.from(secondImg, 1.2, { y: 1280, ease: Power3.easeOut }, "Start")
      .from(
        secondImg.lastElementChild,

        2,
        { y: 1200, scale: 1.6, ease: "back" },
        0.2
      )
      .from(firstImg, 1.5, { y: 1280, ease: "Power3.easeOut" }, 0.2)
      .from(
        firstImg.firstElementChild,
        2,
        { y: -1200, scale: 1.6, ease: "back" },
        0.2
      );

    //Content Animations
    tl.staggerFrom(
      [headlineFirst, headlineSecond, headlineThrid, headlineFourth],
      1,
      {
        y: 320,
        ease: "back",
        delay: 0.8,
      },
      0.15,
      "Start"
    )
      .from(
        contentP,
        1,
        {
          y: 20,
          opacity: 0,
          ease: "back",
        },
        1.4
      )
      .from(
        contentButton,
        1,
        {
          y: 20,
          opacity: 0,
          ease: "back",
        },
        1.6
      );
  });

  return (
    <div className={styles.hero} ref={(el) => (app = el)}>
      <div className={styles.container}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div
              className={styles.heroContentInner}
              ref={(el) => (content = el)}
              data-depth="0.5"
            >
              <h1>
                <div className={styles.heroContentLine}>
                  <div className={styles.small}>Messie NUNGI PAMBU</div>
                  <div className={styles.heroContentLineInner}>REACTJS</div>
                  <div className={styles.heroContentLineInner}>FRONTEND</div>
                  <div className={styles.heroContentLineInner}>DEVELOPER</div>
                </div>
              </h1>
              <p>
                Hi, I'm <strong>Messie</strong>, a{" "}
                <strong>Frontend Developer</strong> based in France. I am
                passionate about startup's world, design, pencil drawing, music,
                anthropology, the economy. Web development is for me, a way to
                combine some aspects of my personality, with a part on one side
                artistic (design, UX, UI), my centers interests and on the other
                my appetite for problem solving.
              </p>
              <div className={styles.btnRow}>
                <Link href="/projects">
                  <a className={styles.exploreButton}>
                    <span>projects</span>
                    {/* <div className={styles.arrowIcon}>
                    <img src="/images/arrow-rigth.svg" alt="arrow" />
                  </div> */}
                    <div className={styles.arrowIcon}>
                      <img src="/images/DottedWhite.svg" alt="arrow" />
                    </div>
                  </a>
                </Link>
                <div className={styles.social}>
                  <a
                    href="https://github.com/Messie88"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/github.svg" alt="arrow" />
                    <span>github</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pathe-messie-nungi-pambu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/linkedin.svg" alt="arrow" />
                    <span>linkedin</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heroImages}>
            <div
              className={styles.heroImagesInner}
              ref={(el) => (images = el)}
              data-relative-input="true"
              data-calibrate-x="true"
              id="scene"
            >
              <div
                className={styles.heroImage}
                id={styles.first}
                data-depth="0.5"
              >
                <img src="/images/image1.jpg" alt="front-img" />
              </div>
              <div
                className={styles.heroImage}
                id={styles.second}
                data-depth="0.4"
              >
                <img src="/images/image2.jpg" alt="back-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
