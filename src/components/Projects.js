import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import projectImageOneSRC from '../images/tresure-hunt.png'
import projectImageTwoSRC from '../images/chrome.png'

const Projects = () => {
  return (
    <StyledProjects>
      <SectionHeading>Projects</SectionHeading>
      <ProjectCard title="Treasure Hunt" src={projectImageOneSRC} />
      <ProjectCard title="Linkedin Chrome Extension" src={projectImageTwoSRC} />

    </StyledProjects>
  );
};

const StyledProjects = styled.section``;

const SectionHeading = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3.6rem;
  margin-bottom: 3rem;
`;

export default Projects;