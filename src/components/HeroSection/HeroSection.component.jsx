import React, { useRef, useEffect } from 'react'
import { Power3, gsap, Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import styles from './HeroSection.module.scss'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  let app = useRef(null),
    images = useRef(null),
    content = useRef(null),
    innerHero = useRef(null),
    freelance = useRef(null),
    footer = useRef(null)

  useEffect(() => {
    //Images Vars
    const firstImg = images.firstElementChild,
      secondImg = images.children[2],
      thirdImg = images.lastElementChild

    //Content Vars
    const headlineSecondChild1 = content.children[0].children[0].children[0],
      headlineSecondChild2 = content.children[0].children[0].children[1],
      headlineSecondChild3 = content.children[0].children[0].children[2],
      headlineSecondChild4 = content.children[0].children[0].children[3],
      headlineSecondChild5 = content.children[0].children[0].children[4],
      headlineSecondChild6 = content.children[0].children[0].children[5],
      headlineSecondChild7 = content.children[0].children[0].children[6],
      headlineSecondChild8 = content.children[0].children[0].children[7]

    const headlineThirdChild1 = content.children[1].children[0].children[0],
      headlineThirdChild2 = content.children[1].children[0].children[1],
      headlineThirdChild3 = content.children[1].children[0].children[2],
      headlineThirdChild4 = content.children[1].children[0].children[3],
      headlineThirdChild5 = content.children[1].children[0].children[4],
      headlineThirdChild6 = content.children[1].children[0].children[5],
      headlineThirdChild7 = content.children[1].children[0].children[6],
      headlineThirdChild8 = content.children[1].children[0].children[7],
      headlineThirdChild9 = content.children[1].children[0].children[8]

    // Freelance vars
    const freelanceLine = freelance.current,
      freelanceLine1 = freelanceLine.children[0],
      freelanceLine2 = freelanceLine.children[1],
      freelanceLine3 = freelanceLine.children[2],
      freelanceLine4 = freelanceLine.children[3],
      freelanceLine5 = freelanceLine.children[4],
      freelanceLine6 = freelanceLine.children[5],
      freelanceLine7 = freelanceLine.children[6],
      freelanceLine8 = freelanceLine.children[7],
      freelanceLine9 = freelanceLine.children[8]

    // Availability
    const footerContainer = footer.current,
      footerLine1 = footerContainer.children[0].children[0].children,
      footerLine2 = footerContainer.children[0].children[1].children,
      footerLine3 = footerContainer.children[0].children[2].children,
      footerLanguage = footerContainer.children[1].children[0]

    gsap.to(app, {
      css: { visibility: 'visible' },
      ease: Power3.easeOut,
      onComplete: null,
    })
    gsap.from(firstImg.children, {
      y: 500,
      opacity: 0,
      scale: 1.5,
      ease: Power4.easeOut,
      delay: 0.5,
      duration: 1,
    })
    gsap.from(secondImg.children, {
      y: 500,
      opacity: 0,
      scale: 1.5,
      ease: Power4.easeOut,
      delay: 0.6,
      duration: 1,
    })
    gsap.from(thirdImg.children, {
      y: 500,
      opacity: 0,
      scale: 1.5,
      ease: Power4.easeOut,
      delay: 0.7,
      duration: 1,
    })
    gsap.from(
      [
        headlineSecondChild1,
        headlineSecondChild2,
        headlineSecondChild3,
        headlineSecondChild4,
        headlineSecondChild5,
        headlineSecondChild6,
        headlineSecondChild7,
        headlineSecondChild8,
      ],
      {
        stagger: { each: 0.045 },
        y: 250,
        ease: Power4.easeOut,
        skewY: 50,
        delay: 0.3,
        duration: 0.5,
      }
    )
    gsap.from(
      [
        headlineThirdChild1,
        headlineThirdChild2,
        headlineThirdChild3,
        headlineThirdChild4,
        headlineThirdChild5,
        headlineThirdChild6,
        headlineThirdChild7,
        headlineThirdChild8,
        headlineThirdChild9,
      ],
      {
        stagger: { each: 0.045 },
        y: 250,
        ease: Power4.easeOut,
        skewY: 50,
        delay: 0.3,
        duration: 0.5,
      }
    )
    gsap.from(
      [
        freelanceLine1,
        freelanceLine2,
        freelanceLine3,
        freelanceLine4,
        freelanceLine5,
        freelanceLine6,
        freelanceLine7,
        freelanceLine8,
        freelanceLine9,
      ],
      {
        stagger: { each: 0.02 },
        y: 100,
        ease: Power4.easeOut,
        skewY: 50,
        delay: 2,
        duration: 0.4,
      }
    )
    gsap.to(footerContainer, {
      css: { visibility: 'visible' },
      onComplete: null,
    })
    gsap.from([footerLine1, footerLine2, footerLine3, footerLanguage], {
      stagger: { each: 0.04 },
      y: 100,
      ease: Power4.easeOut,
      delay: 1.3,
      duration: 1.5,
    })
  }, [])

  // SET THE PIN TO THE heroInner DIV, SO MAKE

  useEffect(() => {
    const headlineSecond = content.children[0]
    const headlineThirdChild1 = content.children[1].children[0].children[0],
      headlineThirdChild2 = content.children[1].children[0].children[1],
      headlineThirdChild3 = content.children[1].children[0].children[2],
      headlineThirdChild4 = content.children[1].children[0].children[3],
      headlineThirdChild5 = content.children[1].children[0].children[4],
      headlineThirdChild6 = content.children[1].children[0].children[5],
      headlineThirdChild7 = content.children[1].children[0].children[6],
      headlineThirdChild8 = content.children[1].children[0].children[7],
      headlineThirdChild9 = content.children[1].children[0].children[8]

    //Images Vars
    const firstImg = images.firstElementChild,
      secondImg = images.children[2],
      lastImg = images.lastElementChild

    gsap
      .timeline({
        scrollTrigger: {
          trigger: innerHero,
          // toggleActions Events:
          // -----> onEnter, onLeave, onEnterBack, onLeaveBack
          toggleActions: 'restart pause reverse reset',
          // toggleActions Options:
          // -----> play, pause, resume, reset, restart, complete, reverse, none
          start: 'top 70px', // When the top of content elt is at 33.4 % of the viewport, runs the animation
          end: 'bottom 100', //285px
          pin: true,
          //markers: true,
          scrub: 1,
        },
      })
      .to(
        firstImg,
        {
          // immediateRender: false,
          y: -100,
          ease: 'Power4.easeOut',
          duration: 5,
          opacity: 0,
          delay: 0.2,
        }
        // '<'
      )
      .to(
        secondImg,
        {
          // immediateRender: false,
          y: -100,
          ease: 'Power4.easeOut',
          duration: 5,
          opacity: 0,
          delay: 0.25,
        }
        // '<'
      )
      .to(
        lastImg,
        {
          // immediateRender: false,
          y: -100,
          ease: 'Power4.easeOut',
          duration: 5,
          opacity: 0,
          delay: 0.3,
        }
        // '<'
      )
    // .fromTo(
    //   headlineThirdChild1,
    //   {
    //     y: 0,
    //     immediateRender: false,
    //     ease: Power4.easeOut,
    //     // skewY: 30,
    //     // delay: 0.3,
    //     // duration: 0.8,
    //   },
    //   {
    //     y: 300,
    //     immediateRender: false,
    //     ease: Power4.easeOut,
    //     // skewY: 30,
    //     // delay: 0.3,
    //     // duration: 0.8,
    //   }
    // )
    // .to(headlineSecond, {
    //   x: 300,
    //   // y: 90,
    //   ease: 'Power4.easeOut',
    //   //skewY: 30,
    //   delay: 5,
    //   duration: 0.8,
    // })

    // .from(imagesText, {
    //   opacity: 0,
    // })
  })

  return (
    <>
      <div className={styles.hero} ref={(el) => (app = el)}>
        <div className={styles.container}>
          <div className={styles.heroInner} ref={(el) => (innerHero = el)}>
            <div className={styles.freelanceContainer} ref={freelance}>
              <p>F</p>
              <p>R</p>
              <p>E</p>
              <p>E</p>
              <p>L</p>
              <p>A</p>
              <p>N</p>
              <p>C</p>
              <p>E</p>
            </div>
            <div className={styles.heroContent} ref={(el) => (content = el)}>
              <div className={styles.heroContentLineInner}>
                <div style={{ display: 'flex', margin: 0 }}>
                  <h1>F</h1>
                  <h1>R</h1>
                  <h1>O</h1>
                  <h1>N</h1>
                  <h1>T</h1>
                  <h1>E</h1>
                  <h1>N</h1>
                  <h1>D</h1>
                </div>
              </div>
              <div className={styles.heroContentLineInner}>
                <div style={{ display: 'flex' }}>
                  <h1>D</h1>
                  <h1>E</h1>
                  <h1>V</h1>
                  <h1>E</h1>
                  <h1>L</h1>
                  <h1>O</h1>
                  <h1>P</h1>
                  <h1>E</h1>
                  <h1>R</h1>
                </div>
                {/* </div> */}
              </div>
              <div className={styles.heroTabletImage}></div>
            </div>
            {/* </div> */}
            <div className={styles.heroImages}>
              <div
                className={styles.heroImagesInner}
                ref={(el) => (images = el)}
              >
                <div className={styles.heroImage} id={styles.first}>
                  <img src='/images/image2.jpg' alt='front-img' />
                </div>
                <div className={styles.heroContentLineInner}></div>
                <div className={styles.heroImage} id={styles.second}>
                  <img src='/images/image1.jpg' alt='back-img' />
                </div>
                <div className={styles.heroImage} style={{ width: '100px' }}>
                  <img src='/images/image2.jpg' alt='back-img' />
                </div>
                {/* <div
                  className={styles.heroImage}
                  style={{ width: '30px', background: 'yellow' }}
                >
                  <img src='/images/image1.jpg' alt='back-img' />
                </div>
                <div
                  className={styles.heroImage}
                  style={{ width: '20px', background: 'yellow' }}
                >
                  <img src='/images/image1.jpg' alt='back-img' />
                </div> */}
              </div>
            </div>
          </div>
          <div className={styles.heroTabletPara}>
            <p>
              Hi! I'm <strong>Messie</strong>, a{' '}
              <strong>Frontend Developer</strong> based in France.
              <br />
              Sensitive to design, i stress the smaller details to deliver
              pixel-perfect products.
              <br />
              <br />I know how precious time is, especially in business, and how
              challenging it can be to retain the user attention, so i adapt
              quickly and listen carefully to your needs and i constantly try to
              always offer that little more that make the difference.
            </p>
            <p id={styles.tag}>
              <span>#ReactJS</span>
              <span className={styles.even}>#GatsbyJS</span>
              <span className={styles.odd}>#NextJS</span>
              <span className={styles.brown}>#Styled-Components</span>
              <br />
              <span className={styles.odd}>#JavaScript</span>
              <span>#Redux</span>
              <span className={styles.even}>#Scss</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.heroFooter} ref={footer}>
        <div>
          <div>
            <p>AVAILABLE</p>
          </div>
          <div>
            <p>FOR</p>
          </div>
          <div>
            <p>WORK</p>
          </div>
        </div>
        <div>
          <p>FR / EN</p>
        </div>
      </div>
    </>
  )
}

export default Hero
