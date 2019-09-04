import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import {StaticQuery, graphql} from "gatsby"
import projectImageOneSRC from '../images/tresure-hunt.png'
import projectImageTwoSRC from '../images/chrome.png'

const PROJECT_LIST_QUERY = graphql`
  query ProjectListQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            imgUrl {
              childImageSharp {
                fluid(maxWidth: 956) {
                  src
                }
              }  
            }
          }
        }
      }
    }
  }
`;

const Projects = () => (
  <StaticQuery
    query={PROJECT_LIST_QUERY}
    render={({ allMarkdownRemark }) => (
      <StyledProjects id="projects">
        <SectionHeading>Projects</SectionHeading>
        {allMarkdownRemark.edges.map(edge => (
          <ProjectCard
            key={edge.node.frontmatter.path}
            title={edge.node.frontmatter.title}
            src={edge.node.frontmatter.imageUrl.childImageSharp.fluid.src}
            path={edge.node.frontmatter.path}
          />
        ))}
      </StyledProjects>
    )}
  />
);

const StyledProjects = styled.section`
  padding-top: 50px;
`;

const SectionHeading = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3.6rem;
  margin-bottom: 3rem;
`;

export default Projects;