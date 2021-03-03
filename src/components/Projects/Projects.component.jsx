import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import ProjectItemLeft from "./components/ProjectItemLeft";
import ProjectItemRight from "./components/ProjectItemRigth";
import Contact from "../Contact";

import styles from "./Projects.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  let paragraph = useRef(null);
  let paragraph2 = useRef(null);
  let title = useRef(null);
  let projectTitle1 = useRef(null);
  let projectTitle2 = useRef(null);

  useEffect(() => {
    gsap.from(paragraph, 1, {
      scrollTrigger: {
        trigger: paragraph,
        toggleActions: "restart play reverse",
        end: "top 58.3%",
      },
      y: -50,
      ease: Power3.easeOut,
    });
    gsap.from(title, 1, {
      scrollTrigger: {
        trigger: title,
        toggleActions: "restart play reverse",
        end: "top 80%",
      },
      y: 120,
      ease: "back",
    });
    gsap.from(paragraph2, 1, {
      scrollTrigger: {
        trigger: paragraph2,
        toggleActions: "restart play reverse",
        end: "top 32%",
      },
      y: -50,
      ease: "inOut",
      delay: 0.5,
    });
    gsap.from(projectTitle1, 1.5, {
      scrollTrigger: {
        trigger: projectTitle1,
        toggleActions: "restart play reverse",
        end: "top 63%",
      },
      y: 200,
      ease: "back",
    });
    gsap.from(projectTitle2, 1.5, {
      scrollTrigger: {
        trigger: projectTitle2,
        toggleActions: "restart play reverse",
        end: "top 80%",
      },
      y: 200,
      ease: "back",
      delay: 0.3,
    });
  });

  return (
    <>
    <div className={styles.projects}>
      <div className={styles.title}>
        <p ref={(el) => (paragraph = el)}>Look at some of my</p>
        <h1 ref={(el) => (title = el)}>WORKS</h1>
      </div>
      <ProjectItemLeft
        title="Telaqua"
        subtitle="The landing page"
        technos=" NextJs, GatsbyJs, ReactJs, TypeScript, Styled-Components, i18n
              (for translation )"
        image="/images/telaqua.png"
        link="/projects/telaqua-the-landing-page"
      />
      <div className={styles.tablet}>
      <ProjectItemLeft
        title="Telaqua"
        subtitle="The Web Application"
        technos=" ReactJs, TypeScript, Styled-Components, Apollo Client, GraphQL, i18n
        (for translation )"
        image="/images/telaquaWebApp.png"
        link="/projects/telaqua-the-landing-page"
      />
      </div>
      <ProjectItemRight
        title="Telaqua"
        subtitle="The Web Application"
        technos=" ReactJs, TypeScript, Styled-Components, Apollo Client, GraphQL, i18n
              (for translation )"
        image="/images/telaquaWebApp.png"
      />

      <div className={styles.projectTitle}>
        <p ref={(el) => (paragraph2 = el)}>And some of my</p>
        <h1 ref={(el) => (projectTitle1 = el)}>(PERSONAL)</h1>
      </div>
      <div className={styles.projectTitle} id={styles.second}>
        <h1 ref={(el) => (projectTitle2 = el)}>PROJECTS</h1>
      </div>

      <ProjectItemLeft
        title="Crown Clothing"
        subtitle="An e-commerce website"
        technos=" ReactJs,  Sass, Axios, React-Youtube"
        image="/images/crown-clothing.png"
        link="/projects/crown-clothing"
      />
      <ProjectItemRight
        title="Netflix"
        subtitle="The frontend Clone"
        technos=" ReactJs,  Sass, Axios, React-Youtube"
        image="/images/netflix.png"
        link="/"
      />
      <div className={styles.tablet}>
        <ProjectItemLeft
          title="Netflix"
          subtitle="The frontend Clone"
          technos=" ReactJs,  Sass, Axios, React-Youtube"
          image="/images/netflix.png"
          link="/"
        />
      </div>
      <ProjectItemLeft
        title="Amazon"
        subtitle="The Clone"
        technos=" ReactJs, ContextAPI, Firebase, React-Router-Dom"
        image="/images/amazon.png"
        link="/projects/telaqua-the-landing-page"
      />
    </div>
    <Contact />
    </>
  );
};

export default Projects;
