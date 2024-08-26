import React from "react";
import "./App.css";
import { Hero } from "./Component/Hero/Hero";
import Contact from "./Component/Contact/Contact";
import Project from "./Component/Project/Project";
import About from "./Component/About/About";
import Skill from "./Component/Skill/Skill";
import styled from "styled-components";
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // duration of the animation in milliseconds
    });
  }, []);
  return (
    <>
      <Topcontainer>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
      </Topcontainer>
    </>
  );
}

export default App;

const Topcontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
  padding-bottom: 200px;
  overflow-x: hidden;

  @media screen and (max-width: 900px) {
    gap: 6rem;
  }
`;
