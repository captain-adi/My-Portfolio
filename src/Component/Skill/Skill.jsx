import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

function Skill() {
  return (
    <>
      <SkillContainer id="skill">
        <h1 className=" text-center" data-aos="flip-down">
          Skills
        </h1>
        <p>
          <FaStar /> I am always looking to add more skills{" "}
        </p>
        <CardContainer>
          <SkillCard data-aos="fade-right">
            <h1>Skills</h1>
            <Skills>
              <span>HTML</span>
              <span>CSS</span>
              <span>Java Script</span>
              <span>React js</span>
              <span>Tailwind Css</span>
              <span>Styled Component</span>
            </Skills>
          </SkillCard>
          <SkillCard data-aos="fade-left">
            <h1>Tools</h1>
            <Skills>
              <span>Git</span>
              <span>Git Hub</span>
              <span>Vs code</span>
              <span>npm</span>
              <span>Figma</span>
            </Skills>
          </SkillCard>
        </CardContainer>
      </SkillContainer>
    </>
  );
}

export default Skill;
const SkillContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  h1 {
    text-transform: uppercase;
    text-shadow: 0 0 3px var(--text-color);
  }
  p {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

const CardContainer = styled.div`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 50px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;


const SkillCard = styled.div`
  border: 1px solid rgba(72, 72, 72, 1);
  background-image: url("./Image/background.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 350px;
  width: 350px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  h1 {
    all: unset;
    margin: 10px auto;
    
  }

  @media screen and (max-width: 460px) {
    width: 80%; 
     height: 100%;
     padding: 1rem 1rem;

     h1{
       font-size: 1.6rem;
       font-weight: bold;
       margin-bottom: 2.5rem;
    color: var(--theme);

     }
  }
  
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin:auto ;
  gap: 20px;
  justify-content: center;
  padding: 0px 20px;

  span {
    cursor: pointer;
    border: 1px solid rgba(72, 72, 72, 1);
    padding: 10px 30px;
    border-radius: 30px;
    justify-items: center;
  }
  @media screen and (max-width: 460px) {
    flex-direction: column;
    align-items: center;

   span{
    text-align: center;
     width: fit-content;
   } 
  }
`;
