import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Layout from "../../../components/Layout";

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

  useEffect(() => {
    gsap.from(heroTitle, 1.1, {
      y: 200,
      ease: "back",
      delay: 0.5
    });
    gsap.from(image, 1, {
      scrollTrigger: {
        trigger: heroTitle,
        toggleActions: "play",
        end: "top 1%",
      },
      width: "100vw",
    })
  })

  return (
    <Layout color>
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
            <h3>Role :</h3>
            <p>{role}</p>
          </div>
          <div>
            <h3>Challenges</h3>
            <p>{challenges}</p>
          </div>
        </div>
        <div className={styles.descriptionRight}>
          <div>
            <h3>Technos :</h3>
            <p>{technos}</p>
          </div>
          <div className={styles.descriptionRightLink}>
            <a href={linkToSeeLive}>See live</a>
          </div>
        </div>
      </div>

      <p className={styles.screen}>DESKTOP</p>
      <div className={styles.images}>
          <img src={imageOne} alt="" />
          <img src={imageTwo} alt="" className={styles.imageTwo} />
          <img src={imageThree} alt="" className={styles.imageThree} />
      </div>

      <p className={styles.screen}>TABLET</p>
      <div className={styles.images}>
          <img src={tabletImageOne} alt="" id={styles.tabletImage} />
          <img src={tabletImageTwo} alt="" id={styles.tabletImage} className={styles.imageTwo} />
          <img src={tabletImageThree} alt="" id={styles.tabletImage} className={styles.imageThree} />
      </div>

      <p className={styles.screen}>MOBILE</p>
      <div className={styles.images}>
          <img src={mobileImageOne} alt="" id={styles.mobileImage} />
          <img src={mobileImageTwo} alt="" id={styles.mobileImage} className={styles.imageTwo} />
          <img src={mobileImageThree} alt="" id={styles.mobileImage} className={styles.imageThree} />
      </div>
      <div>Previous Project / next Project</div>
    </div>
    </Layout>
  );
};

export default ProjectItem;
