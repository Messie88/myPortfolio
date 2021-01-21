import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "./ProjectItemRight.module.scss";

gsap.registerPlugin(ScrollTrigger);

const ProjectItemRight = ({ title, subtitle, technos, image }) => {
  let h3 = useRef(null);
  let para = useRef(null);
  let photo = useRef(null);

  useEffect(() => {
    gsap.from(h3, 1, {
      scrollTrigger: {
        trigger: h3,
        toggleActions: "restart play reverse",
        end: "top 94%",
      },
      y: 120,
      ease: "back",
    });
    gsap.from(para, 1, {
      scrollTrigger: {
        trigger: para,
        toggleActions: "restart play reverse",
        end: "top 94%",
      },
      opacity: 0,
      letterSpacing: "1rem",
      //delay: 5,
    });
    gsap.from(photo, 1.2, {
      scrollTrigger: {
        trigger: photo,
        toggleActions: "restart play reverse",
        end: "top 100%",
      },
      y: 250,
      scale: 1.2,
      ease: "back",
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt="Project" ref={(el) => (photo = el)} />
      </div>
      <div className={styles.content}>
        <div className={styles.h3}>
          <h3 ref={(el) => (h3 = el)}>{title}</h3>
        </div>
        <p>
          <span ref={(el) => (para = el)}>{subtitle}</span>
        </p>
        <div className={styles.technos}>
          <h5>Main Technos :</h5>
          <p>{technos}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItemRight;
