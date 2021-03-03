import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "./ProjectItem.module.scss";

gsap.registerPlugin(ScrollTrigger);

const ProjectItem = ({
  heroImage,
  title,
  role,
  challenges,
  technos,
  linkToSeeLive,
  imageOne,
  imageTwo,
  imageThree,
  tabletImageOne,
  tabletImageTwo,
  tabletImageThree,
  mobileImageOne,
  mobileImageTwo,
  mobileImageThree
}) => {

  let heroTitle = useRef(null);
  let image = useRef(null);
  let descriptionRoleTitle = useRef(null);
  let descriptionTechosTitle = useRef(null);
  let descriptionChallengeTitle = useRef(null);
  let descriptionRoleContent = useRef(null);
  let descriptionTechosContent = useRef(null);
  let descriptionChallengeContent = useRef(null);
  let descriptionLink = useRef(null);
  let descriptionImageDesktop1 = useRef(null);
  let descriptionImageDesktop2 = useRef(null);
  let descriptionImageDesktop3 = useRef(null);
  let descriptionImageTablet1 = useRef(null);
  let descriptionImageTablet2 = useRef(null);
  let descriptionImageTablet3 = useRef(null);
  let descriptionImageMobile1 = useRef(null);
  let descriptionImageMobile2 = useRef(null);
  let descriptionImageMobile3 = useRef(null);
  let desktopTitle = useRef(null);
  let tabletTitle = useRef(null);
  let mobileTitle = useRef(null);

  useEffect(() => {
    gsap.from(heroTitle, {
      y: 200,
      ease: "back",
      delay: 0.5,
      duration: 1.1
    });
    gsap.from(image, {
      width: "100vw",
      duration: 1,
    });
    gsap.from(descriptionRoleTitle, {
      scrollTrigger: {
        trigger: descriptionRoleTitle,
        toggleActions: "play",
      },
      y: 200,
      duration: .5
    });
    gsap.from(descriptionTechosTitle, {
      scrollTrigger: {
        trigger: descriptionTechosTitle,
        toggleActions: "play",
      },
      y: 200,
      duration: .5
    });
    gsap.from(descriptionChallengeTitle, {
      scrollTrigger: {
        trigger: descriptionChallengeTitle,
        toggleActions: "play",
      },
      y: 200,
      duration: .5
    });
    gsap.from(descriptionRoleContent, {
      scrollTrigger: {
        trigger: descriptionRoleContent,
        toggleActions: "play",
      },
      y: 200,
      duration: .5,
      delay: .2
    });
    gsap.from(descriptionTechosContent, {
      scrollTrigger: {
        trigger: descriptionTechosContent,
        toggleActions: "play",
      },
      y: 200,
      duration: .5,
      delay: .2
    });
    gsap.from(descriptionChallengeContent, {
      scrollTrigger: {
        trigger: descriptionChallengeContent,
        toggleActions: "play",
      },
      y: 200,
      duration: .5,
      delay: .2
    });
    gsap.from(descriptionLink, {
      scrollTrigger: {
        trigger: descriptionLink,
        toggleActions: "play",
      },
      x: 200,
      duration: .5,
      delay: .2
    });
    gsap.from(desktopTitle, {
      scrollTrigger: {
        trigger: desktopTitle,
        toggleActions: "restart play reverse",
        end: "top 94%",
      },
      y: 200,
      duration: .5
    });
    gsap.from(tabletTitle, {
      scrollTrigger: {
        trigger: tabletTitle,
        toggleActions: "restart play reverse",
        end: "top 94%",
      },
      y: 200,
      duration: .5
    });
    gsap.from(mobileTitle, {
      scrollTrigger: {
        trigger: mobileTitle,
        toggleActions: "restart play reverse",
        end: "top 94%",
      },
      y: 200,
      duration: .5
    });
    gsap.from(descriptionImageDesktop1, {
      scrollTrigger: {
        trigger: descriptionImageDesktop1,
      },
      y: 200,
      duration: .8,
      delay: .2,
    });
    gsap.from(descriptionImageDesktop2, {
      scrollTrigger: {
        trigger: descriptionImageDesktop2,
      },
      y: 200,
      duration: .8,
      delay: .3,
    });
    gsap.from(descriptionImageDesktop3, {
      scrollTrigger: {
        trigger: descriptionImageDesktop3,
      },
      y: 200,
      duration: .8,
      delay: .4,
    });
    gsap.from(descriptionImageTablet1, {
      scrollTrigger: {
        trigger: descriptionImageTablet1,
      },
      y: 200,
      duration: .8,
      delay: .2,
    });
    gsap.from(descriptionImageTablet2, {
      scrollTrigger: {
        trigger: descriptionImageTablet2,
      },
      y: 200,
      duration: .8,
      delay: .3,
    });
    gsap.from(descriptionImageTablet3, {
      scrollTrigger: {
        trigger: descriptionImageTablet3,
      },
      y: 200,
      duration: .8,
      delay: .4,
    });
    gsap.from(descriptionImageMobile1, {
      scrollTrigger: {
        trigger: descriptionImageMobile1,
      },
      y: 200,
      duration: .8,
      delay: .2,
    });
    gsap.from(descriptionImageMobile2, {
      scrollTrigger: {
        trigger: descriptionImageMobile2,
      },
      y: 200,
      duration: .8,
      delay: .3,
    });
    gsap.from(descriptionImageMobile3, {
      scrollTrigger: {
        trigger: descriptionImageMobile3,
      },
      y: 200,
      duration: .8,
      delay: .4,
    });
  })

  return (
    <>
    <div className={styles.container}>
      <div className={styles.hero}>
        <img 
        src={heroImage} 
        alt="Project Screen" 
        ref={(el) => (image = el)} />
        <div className={styles.heroTitle}>
          <h1 ref={(el) => (heroTitle = el)}>{title}</h1>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.descriptionLeft}>
          <div>
            <div className={styles.titleContainer}>
              <h3 ref={(el) => (descriptionRoleTitle = el)}>Role :</h3>
            </div>
            <div className={styles.contentContainer}>
            <p ref={(el) => (descriptionRoleContent = el)}>{role}</p>
            </div>
          </div>
          <div>
            <div className={styles.titleContainer}>
              <h3 ref={(el) => (descriptionChallengeTitle = el)}>Challenges</h3>
            </div>
            <div className={styles.contentContainer}>
              <p ref={(el) => (descriptionChallengeContent = el)}>{challenges}</p>
            </div>
          </div>
        </div>
        <div className={styles.descriptionRight}>
          <div>
            <div className={styles.titleContainer}>
              <h3 ref={(el) => (descriptionTechosTitle = el)}>Technos :</h3>
            </div>
            <div className={styles.contentContainer}>
              <p ref={(el) => (descriptionTechosContent = el)}>{technos}</p>
            </div>
          </div>
          <div className={styles.descriptionRightLink}>
            <a 
            href={linkToSeeLive} 
            target="_blank" 
            rel="noopener noreferrer"
            ref={(el) => (descriptionLink= el)}
            >See live</a>
          </div>
        </div>
      </div>
      
      <div className={styles.screenTitle}>
        <p className={styles.screen} ref={(el) => (desktopTitle= el)}>DESKTOP</p>
      </div>
      <div className={styles.images}>
          <img src={imageOne} alt="" ref={(el) => (descriptionImageDesktop1= el)}/>
          <img src={imageTwo} alt="" className={styles.imageTwo}  ref={(el) => (descriptionImageDesktop2= el)}/>
          <img src={imageThree} alt="" className={styles.imageThree}  ref={(el) => (descriptionImageDesktop3 = el)}/>
      </div>

      <div className={styles.screenTitle}>
        <p className={styles.screen} ref={(el) => (tabletTitle= el)}>TABLET</p>
      </div>
      <div className={styles.images}>
          <img src={tabletImageOne} alt="" id={styles.tabletImage} ref={(el) => (descriptionImageTablet1= el)} />
          <img src={tabletImageTwo} alt="" id={styles.tabletImage} className={styles.imageTwo} ref={(el) => (descriptionImageTablet2 = el)} />
          <img src={tabletImageThree} alt="" id={styles.tabletImage} className={styles.imageThree} ref={(el) => (descriptionImageTablet3 = el)} />
      </div>

      <div className={styles.screenTitle} id={styles.screenTitleMobile}>
        <p className={styles.screen} ref={(el) => (mobileTitle= el)}>MOBILE</p>
      </div>
      <div className={styles.images}>
          <img src={mobileImageOne} alt="" id={styles.mobileImage} ref={(el) => (descriptionImageMobile1= el)} />
          <img src={mobileImageTwo} alt="" id={styles.mobileImage} className={styles.imageTwo} ref={(el) => (descriptionImageMobile2= el)} />
          <img src={mobileImageThree} alt="" id={styles.mobileImage} className={styles.imageThree} ref={(el) => (descriptionImageMobile3 = el)} />
      </div>
      <div>Previous Project / next Project</div>
    </div>
    </>
  );
};

export default ProjectItem;
