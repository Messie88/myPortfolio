import React from "react";

import Header from "../components/Header";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => (
  <Layout color>
    <Header />
    <HeroSection />
    <Projects />
    <Contact />
  </Layout>
);

export default Home;
