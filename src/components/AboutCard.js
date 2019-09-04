import React from "react";
import styled from "styled-components";
import { primaryLight } from "../utilities/index";

const AboutCard = () => {
  return (
    <StyledAboutCard>
      <h1>About</h1>
      <p>
        My name is Yanrong Xu and I am a full-stack developer from
        Fort Lauderdale, Florida. I started my journey as a developer in the fall
        of 2017. Ever since starting my development journey, I have fallen
        more in love with the process. I am currently enrolled at Lambda
        School. I love Javascript and learn more about it everyday. I also
        know: HTML, CSS, LESS, and Python. And like use framework like React.
      </p>
      <div>
        <h2>Let's Connect</h2>
        <ul>
          <li>
            <a href="http://gmail.com">Email</a>
          </li>
          <li>
            <a href="http://gmail.com">Linkedin</a>
          </li>
          <li>
            <a href="http://gmail.com">Github</a>
          </li>
          <li>
            <a href="http://gmail.com">Twitter</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML/CSS</li>
          <li>Python</li>
          <li>Node</li>
          <li>Express</li>
          <li>SQL</li>
          <li>Docker</li>
        </ul>
      </div>
    </StyledAboutCard>
  );
};
const StyledAboutCard = styled.div`
  background: ${primaryLight};
`;
export default AboutCard;