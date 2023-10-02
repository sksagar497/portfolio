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
      
      <Router>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/hobbies" element={<Hobby />} />
          <Route path="/educations" element={<Education />} />
        </Routes>
      </Router>
     
    </div>
  );
};
