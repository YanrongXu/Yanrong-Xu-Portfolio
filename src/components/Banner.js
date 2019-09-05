import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import { Icon, black, primary} from "../utilities"

const Banner = () => {
  return (
    <StyledBanner>
      <Hero>
        <span className='name'>Yanrong Xu</span>
        <span className='tag'>Is a Web Developer</span>
      </Hero>
      <Link className='btn-link' to='/#projects'>
        <CodeIcon name='code' className='btn-icon' />
      </Link>
    </StyledBanner>
  )
}

const CodeIcon = styled(Icon)`
  margin-left: 5px;
  height: 20px;
  fill: red;
`

const StyledBanner = styled.div`
  min-height: calc(100vh - 50px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .btn-link {
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    padding: 1rem 2rem;
    background: transparent;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 2rem;
    font-weight: 300;
    color: #1f1f1f;
    text-decoration: none;
    text-transform: uppercase;
    font-style: italic;
    display: flex;
    align-items: center;
    justify-content: space-between;
     &:hover {
      border-color: #1f1f1f;
      color: ${primary};
    }
    span {
      margin-left: 5px;
    }
  }
`;

const Hero = styled.h1`
  width: 333px;
  height: 193px;
  position: relative;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5rem;
  .name,
  .tag {
    display: block;
    text-transform: uppercase;
    line-height: 0.9;
    z-index: 100;
    padding: 0 1.6rem;
  }
  .name {
    color: ${black};
    font-weight: 900;
    font-style: italic;
    font-size: 4.8rem;
  }
   .tag {
    color: ${primary};
    font-weight: 300;
    font-size: 3.6rem;
    text-transform: lowercase;
  }
`;

export default Banner;