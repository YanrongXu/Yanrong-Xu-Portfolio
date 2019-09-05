import React from "react";
import { Link } from "gatsby";
import { animated } from "react-spring";
import styled from "styled-components";
import { primary, white } from "../utilities";

const Navigation = ({ style, setToggle }) => {
  return (
    <StyledNav style={style}>
      <Link to="/" onClick={() => setToggle(false)}>
        Home
      </Link>
      <Link to="/#projects" onClick={() => setToggle(false)}>
        Projects
      </Link>
      <Link to="/#about" onClick={() => setToggle(false)}>
        About
      </Link>
      <Link to="/#contact" onClick={() => setToggle(false)}>
        Contact
      </Link>
    </StyledNav>
  );
};

const StyledNav = styled(animated.nav)`
  position: absolute;
  width: 105%;
  left: -2.5%;
  top: 50px;
  display: flex;
  flex-direction: column;
  background-color: rgba(7, 7, 7, 0.6);
   a {
    color: ${white};
    font-weight: 900;
    text-transform: uppercase;
    padding: 1rem 2.2rem;
    font-size: 3.6rem;
    text-decoration: none;
    transition: all 0.2s;
    &:hover {
      background-color: rgba(7, 7, 7, 0.7);
      color: ${primary};
    }
  }
`;

export default Navigation;