import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutCard from "../components/AboutCard"
import headshot from '../images/Lambda-Schools---Individual-Shots-33_burned-ConvertImage.png'

const About = () => (
  <Layout>
    <SEO title="about" />
    <img
      src={headshot}
      alt='Yanrong Shot'
      style={{width: '100%', display: 'block'}}
    />
    <AboutCard />
  </Layout>
);

export default About;