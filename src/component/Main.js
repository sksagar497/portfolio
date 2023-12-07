import React ,{useState} from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import bak from './5073414.jpg'

import Home from "./Home";
import Skill from "./Skill";
import Project from "./Project";
import Education from "./Education";
import Hobby from "./Hobby";
import Footer from "./Footer";



export const Main = () => {
  const componentStyles = {
    paddingTop: '45px', // Adjust the value based on your header height
    paddingBottom: '85px'
  };
  const styles = {
    container: {
      backgroundImage: `url(${bak})`,
      backgroundSize: 'cover', // or 'contain' depending on your preference
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center fixed',

      minHeight: '100vh', // or any other height you prefer
      // Additional styles for padding, etc.
    }
  };
  const mergedStyles = { ...styles.container, ...componentStyles };
  return (
    <div style={mergedStyles}>
      
      <Router>
        <Header />
           
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/hobbies" element={<Hobby />} />
          <Route path="/educations" element={<Education />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
};
