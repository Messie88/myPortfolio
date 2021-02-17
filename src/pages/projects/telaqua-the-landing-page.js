import React from "react";

import ProjectItem from "../../components/Projects/components/ProjectItem";
import Layout from "../../components/Layout";

const telaquaLandingPage = () => {
  return (
    <Layout color>
      <ProjectItem
        heroImage="/images/telaqua.png"
        title="Telaqua"
        role="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              quam aliquid earum, porro quisquam perspiciatis iusto amet
              nesciunt officiis cupiditate?"
        challenges="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
        quam aliquid earum, porro"
        technos="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
        quam aliquid earum"
        linkToSeeLive="link"
        imageOne="/images/telaqua.png"
        imageTwo="/images/telaqua.png"
        imageThree="/images/telaqua.png"
        previousLink="/"
      />
    </Layout>
  );
};

export default telaquaLandingPage;
