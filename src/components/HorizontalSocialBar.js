import React from "react";
import styled from "styled-components";
import { above, Icon, white } from "../utilities";

const HorizontalSocialBar = () => {
  return (
    <StyledSocialBar>
      <div className="container">
        <a
          href="https://github.com/YanrongXu"
          rel='noopener noreferrer'
          target="_blank"
        >
          <Icon name="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/yanrong-xu/"
          rel="noopener noreferrer"
          target="blank"
        >
          <Icon name="Linkedin" />
        </a>
        <a
          href="https://twitter.com/8xuyanrong"
          rel="noopener noreferrer"
          target="blank"
        >
          <Icon name="Twitter" />
        </a>
      </div>
    </StyledSocialBar>
  );
};

const StyledSocialBar = styled.div`
  height: 50px;
  margin-top: 20px;
  background-color: ${white};
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 85%;
    margin: 0 auto;
    ${above.lg`
      justify-content: space-evenly;
    `}
    a {
      height: 100%;
      display: flex;
      align-items: center;
      &:hover {
        color: blue;
      }
    }
  }
`;

export default HorizontalSocialBar;