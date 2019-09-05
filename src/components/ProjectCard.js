import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { primary, black } from "../utilities";

const ProjectCard = ({ src, description, path, title }) => {
  return (
    <StyledProjectCard>
      <img src={src} alt="project" />
      <ProjectCardHeading>{title}</ProjectCardHeading>
      <p>{description}</p>
      <Link to={`/project${path}`}>See more...</Link>
    </StyledProjectCard>
  );
};

const StyledProjectCard = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  color: ${black};
  img {
    width: 100%;
    margin-bottom: 2rem;
  }
  a,
  a:visited {
    color: ${primary};
  }
   p {
    margin-bottom: 1rem;
  }
`;

const ProjectCardHeading = styled.h3`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${black};
`;

export default ProjectCard;