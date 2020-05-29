import React from 'react';

import { Route, Switch } from "react-router-dom";


import Header from "./components/header/header.component";
import Hero from "./components/hero-section/hero.component";
import Projects from "./components/projects/projects.component";

import './App.scss';

function App() {
  

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Hero} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
    </div>
    
  );
}


export default App;
