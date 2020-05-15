import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Header from "./components/header/header.component";
import Hero from "./components/hero-section/hero.component";

import './App.scss';

function App() {
  

  return (
    <div>
      <Header />
      <Hero />
    </div>
    
  );
}

export default App;
