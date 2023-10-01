import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Skill from "./Skill";
import Project from "./Project";
import Education from "./Education";
import Hobby from "./Hobby";

export const Main = () => {
  return (
    <div container>
      
      {/* <Router>
      <Header />

        <Routes>
          <Route path="/home" component={Home} />
          <Route path="/skills" component={Skill} />
          <Route path="/projects" component={Project} />
          <Route path="/educations" component={Education} />
          <Route path="/hobbies" component={Hobby} />
        </Routes>
      </Router> */}
      {/* <Home /> */}
      <Skill/>
    </div>
  );
};
