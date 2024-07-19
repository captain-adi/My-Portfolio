import React from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import {Hero} from './Component/Hero/Hero'
import Contact from './Component/Contact/Contact'
import Project from './Component/Project/Project'
import About from './Component/About/About'
import Skill from './Component/Skill/Skill'
import styled from 'styled-components'
function App() {
  return (
    <>
    <Topcontainer>
      <Hero/>
       <About/>
       <Skill/>
      <Project/>  
      <Contact/>
      </Topcontainer>
   
    </>
  )
}

export default App

const Topcontainer = styled.div`
display: flex;
flex-direction: column;
gap: 150px;
padding-bottom: 200px;

@media screen and (max-width: 900px) {
  gap: 6rem;
}
`