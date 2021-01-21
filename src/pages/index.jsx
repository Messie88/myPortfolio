import React from "react";

import Header from "../components/Header";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";

const Home = () => (
  <Layout color>
    <Header />
    <HeroSection />
    <Projects />
  </Layout>
);

export default Home;
