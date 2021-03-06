import React from "react";

import ProjectItem from "./ProjectItem";
import Contact from "../../components/Contact";
import Layout from "../../components/Layout";



const telaquaLandingPage = () => {
  return (   
    <Layout color>
      <ProjectItem
        heroImage="/images/telaqua.png"
        title="Telaqua"
        role="WEB DEVELOPMENT"
        challenges="Learn Nextjs, i18n, TypeScript, the Scrum workflow and then, migrating the project to gatsby. All this in less than 3 months"
        technos="NextJs, GatsbyJs, ReactJs, TypeScript, Styled-Components, i18n
        (for translation )"
        linkToSeeLive="https://www.telaqua.com/"
        imageOne="/images/telaqua.png"
        imageTwo="/images/agromote.png"
        imageThree="/images/howItWorks.png"
        tabletImageOne="/images/agromoteTablet.png"
        tabletImageTwo="/images/tabletPresence.png"
        tabletImageThree="/images/tabletSolution.png"
        mobileImageOne="/images/mobileApp.png"
        mobileImageTwo="/images/mobileHowItWorks.png"
        mobileImageThree="/images/mobileAgro.png" 
        previousLink="/"
      />
      <Contact />
    </Layout>
  );
};

export default telaquaLandingPage;
