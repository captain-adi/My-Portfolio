import styled from "styled-components";
import { Data } from "./ProjectData";
import React from "react";

function Project() {
  return (
    <>
      <MainCotainer id="project">
        <h1 data-aos="flip-down">Project</h1>
        <ProjectCard>
          {Data.map((e, index) => {
            return (
              <Card data-aos={e.animation} key={index}>
                <img src={e.img} alt="" />
                <div className="content">
                  <h1>{e.SiteName} </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, facilis.
                  </p>
                </div>
              </Card>
            );
          })}
        </ProjectCard>
      </MainCotainer>
    </>
  );
}

export default Project;

const MainCotainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Mali", cursive;
    text-shadow: 0 0 3px var(--text-color);
  }
`;
const ProjectCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 25%;
  aspect-ratio: 7/4;
  cursor: pointer;
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
  }

  &:hover .content {
    bottom: 0px;
  }
  &:hover img {
    filter: brightness(0.4);
    transition: all 0.3s;
  }

  .content {
    position: absolute;
    bottom: -7.5rem;
    left: 15px;
    transition: all 0.4s;
  }

  h1 {
    all: unset;
    font-weight: bolder;
    color: var(--theme);
    font-size: 2rem;
  }
  p {
    font-size: small;
  }

  @media screen and (max-width: 900px) {
    width: 100%;

    h1 {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
