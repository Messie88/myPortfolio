import React from "react";

import ProjectItem from "./ProjectItem";
import Contact from "../../components/Contact";
import Layout from "../../components/Layout";



const telaquaLandingPage = () => {
  return (   
    <Layout color>
      <ProjectItem
        heroImage="/images/crown-clothing.png"
        title="Crown Clothing"
        role="WEB DEVELOPMENT"
        challenges="Learn Nextjs, i18n, TypeScript, the Scrum workflow and then, migrating the project to gatsby. All this in less than 3 months"
        technos="NextJs, GatsbyJs, ReactJs, TypeScript, Styled-Components, i18n
        (for translation )"
        linkToSeeLive="https://crown-clothing-project.herokuapp.com/"
        imageOne="/images/crown-clothing.png"
        imageTwo="/images/crown-clothing-desktop-1.png"
        imageThree="/images/crown-clothing-desktop-2.png"
        tabletImageOne="/images/crown-clothing-tablet.png"
        tabletImageTwo="/images/crown-clothing-tablet-1.png"
        tabletImageThree="/images/crown-clothing-tablet-2.png"
        mobileImageOne="/images/crown-clothing-mobile.png"
        mobileImageTwo="/images/crown-clothing-mobile-1.png"
        mobileImageThree="/images/crown-clothing-mobile-2.png" 
        previousLink="/"
      />
      <Contact />
    </Layout>
  );
};

export default telaquaLandingPage;
