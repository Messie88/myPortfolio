import React, { useEffect, useRef, useState } from "react";
import { TweenMax, Power3, TimelineLite } from "gsap";
import $ from "jquery";

import ProjectItemLeft from "./components/ProjectItemLeft";
import ProjectItemRight from "./components/ProjectItemRigth";

// SwiperJS
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

//Swiper styles
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";

import classes from "./Projects.module.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Projects = () => {
  var title1 = useRef(null);
  var title2 = useRef(null);
  var title3 = useRef(null);
  var titleSpan1 = useRef(null);
  var titleSpan2 = useRef(null);
  var titleSpan3 = useRef(null);
  var num1 = useRef(null);
  var num2 = useRef(null);
  var num3 = useRef(null);

  // useEffect(() => {
  //   TweenMax.from(
  //     [
  //       title1,
  //       title2,
  //       title2,
  //       titleSpan1,
  //       titleSpan2,
  //       titleSpan3,
  //       num1,
  //       num2,
  //       num3,
  //     ],
  //     1.5,
  //     {
  //       y: 200,
  //     }
  //   );
  // });

  return (
    <div className={classes.projects}>
      <p>Look at some of my</p>
      <h1>WORKS</h1>
      <ProjectItemLeft
        title="Telaqua"
        subtitle="The landing page"
        technos=" NextJs, GatsbyJs, ReactJs, TypeScript, Styled-Components, i18n
              (for translation )"
        image="/images/telaqua.png"
      />
      <ProjectItemRight
        title="Telaqua"
        subtitle="The Web Application"
        technos=" ReactJs, TypeScript, Styled-Components, Apollo Client, GraphQL, i18n
              (for translation )"
        image="/images/telaquaWebApp.png"
      />

      {/* TO DELETE */}

      <p>And some of my</p>
      <h1>
        (PERSONAL) <br /> PROJECTS
      </h1>

      <ProjectItemLeft
        title="Netflix"
        subtitle="The frontend Clone"
        technos=" ReactJs,  Sass, Axios, React-Youtube"
        image="/images/netflix.png"
      />
      <ProjectItemRight
        title="Amazon"
        subtitle="The Clone"
        technos=" ReactJs, ContextAPI, Firebase, React-Router-Dom"
        image="/images/amazon.png"
      />
    </div>
  );
};

export default Projects;
