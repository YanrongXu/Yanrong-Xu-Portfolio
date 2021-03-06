import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import {StaticQuery, graphql} from "gatsby"
import {primary} from "../utilities"

const PROJECT_LIST_QUERY = graphql`
  query ProjectListQuery {
    allMarkdownRemark (
      limit: 3
      sort: {order: DESC, fields: [frontmatter___date]}
     ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            description
            mobile
            links {
              github
              website
            }
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
        <SectionHeading>
          Projects
        </SectionHeading>
        <ProjectsContainer>
          {allMarkdownRemark.edges.map((edge, index) => (
            <ProjectCard
              key={edge.node.frontmatter.path}
              title={edge.node.frontmatter.title}
              description={edge.node.frontmatter.description}
              src={edge.node.frontmatter.imgUrl.childImageSharp.fluid.src}
              path={edge.node.frontmatter.path}
              links={edge.node.frontmatter.links}
              index={index}
              mobile={edge.node.frontmatter.mobile}
            />
          ))}
        </ProjectsContainer>
      </StyledProjects>
    )}
  />
);

const StyledProjects = styled.section`
  padding-top: 50px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionHeading = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
  font-size: 2.4rem;
  margin-bottom: 3rem;
  text-align: center;
  span {
    color: ${primary};
    text-transform: lowercase;
  }
`;

export default Projects;