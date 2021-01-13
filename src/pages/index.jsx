import React from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Header from "../components/Header";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";

gsap.registerPlugin(ScrollTrigger);

const Home = () => (
  <Layout color>
    <Header />
    <HeroSection />
    <Projects />
  </Layout>
);

export default Home;
