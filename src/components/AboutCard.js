import React from "react";
import styled from "styled-components";
import emailIcon from '../images/icons/email-icon.svg'
import fireIcon from '../images/icons/fire-icon.svg'
import linkedinIcon from '../images/icons/linkedin-icon.svg'
import githubIcon from '../images/icons/github-icon.svg'
import twitterIcon from '../images/icons/twitter-icon.svg'
import headshot from '../images/Lambda-Schools---Individual-Shots-33_burned-ConvertImage.png'
import {FlexContainer, Half, Heading} from '../elements';
import {above, darkGrey} from "../utilities"

const skills = [
  "JavaScript",
  "React",
  "HTML/CSS",
  "Python",
  "Node",
  "Express",
  "SQL",
  "Docker",
]

const AboutPage = () => {
  return (
    <AboutContainer id='about'>
      <AboutLeft>
        <img src={headshot} alt="It's me!" className='headshot' />
      </AboutLeft>
      <AboutRight>
        <div>
          <Heading style={{marginBottom: '3rem', color: '#eee'}}>
            About
          </Heading>
          <p
            style={{
              marginBottom: '5rem',
              color: '#eee',
              fontWeight: '300',
              fontSize: '1.8rem'
            }}
          >
            My name is Yanrong Xu, and I am a full-stack developer from Fort Lauderdale, Florida. I started my journey as a developer in the fall of 2017. Ever since starting my development journey, I have fallen more in love with the process. I love Javascript and learn more about it every day. I also know HTML, CSS, LESS, and Python. And like using a framework like React. {" "}
          </p>
          <FlexContainer>
            <Half>
              <SubHeading>Let's Connect</SubHeading>
              <ConnectListItem
                href='mailto:8xuyanrong@gmail.com'
                target='_blank'
              >
                <img src={emailIcon} />
                Email
              </ConnectListItem>
              <ConnectListItem
                href='https://www.linkedin.com/in/yanrong-xu/'
                target='_blank'
              >
                <img src={linkedinIcon} />
                Linkedin
              </ConnectListItem>
              <ConnectListItem
                href='https://github.com/YanrongXu'
                target='_blank'
              >
                <img src={githubIcon} />
                Github
              </ConnectListItem>
              <ConnectListItem
                href='https://twitter.com/8xuyanrong'
                target='_blank'
              >
                <img src={twitterIcon} />
                Twitter
              </ConnectListItem>
            </Half>
            <Half>
              <SubHeading>Skills</SubHeading>
              {skills.map(skill => (
                <SkillsListItem key={skill}>
                  <img src={fireIcon} alt='Fire' />
                  {skill}
                </SkillsListItem>
              ))}
            </Half>
          </FlexContainer>
        </div>
      </AboutRight>
    </AboutContainer>
  )
}

const AboutContainer = styled(FlexContainer)`
  flex-wrap: wrap;
  ${above.lg`
    height: calc(100vh - 400px);
  `}
`;

const AboutLeft = styled(Half)`
  /* display: flex; */
  position: relative;
  display: none;
  height: 70%;
  color: #eee;
  ${above.xs`
    height: 100%;
  `}
  ${above.md`
    width: 0%;
  `}
  ${above.lg`
    width: 50%;
    display: block
  `}
  .headshot {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    max-height: 100%;
    display: none;
 
    ${above.lg`
      display: block;
    `}
  }
`;
const AboutRight = styled(Half)`
  align-items: center;
  flex-wrap: wrap;
  padding: 5rem;
  background-color: #9e976b;
  height: auto;
  ${above.md`
    width: 100%;
  `}
  ${above.lg`
    width: 50%;
    height: 107%
  `}
`;
const SubHeading = styled.h2`
  width: 100%;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #eee;
`;
const SkillsListItem = styled.p`
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 300;
  color: #eee;
  display: flex;
  align-items: center;
  width: 100%;
  img {
    width: 20px;
    height: 20px;
    margin-right: 1.5rem;
    color: #ef4d4f;
  }
`;
const ConnectListItem = styled.a`
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
  color: #eee;
  text-decoration: none;
  transition: all 0.2s;
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  img {
    width: 30px;
    height: 30px;
    margin-right: 1.5rem;
  }
  &:visited {
    color: #eee;
  }
   &:hover {
    color: ${darkGrey};
  }
`;

export default AboutPage;