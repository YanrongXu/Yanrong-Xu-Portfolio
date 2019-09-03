import React, {useState, useRef} from "react"
import { Link} from "gatsby"
import {useTransition} from "react-spring"
import styled from "styled-components"
import Hamburger from "./Hamburger"
import Navigation from "./Navigation"
import {Icon, white} from "../utilities"
import useOnClickOutside from '../hooks/useOnClickOutside'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const transitions = useTransition(toggle, null, {
    from: { transform: "translate3d(-960px,0 ,0)" },
    enter: { transform: "translate3d(0,0 ,0)" },
    leave: { transform: "translate3d(-960px,0 ,0)" },
  })
  const ref = useRef()
  useOnClickOutside(ref, () => setToggle(false))

  return(
    <StyledHeader ref={ref}>
      <HeaderContainer>
        <Hamburger toggle={() => setToggle(!toggle)} />
        <h1>
          <Link
            to="/"
            style={{
              color: `#070707`,
              textDecoration: `none`,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon name="NavLogo" />
          </Link>
        </h1>
      </HeaderContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${white};
  box-shadow: 0 1px 3px -3px rgba(0, 0, 0, 0.3);
  z-index: 2000;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 956px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export default Header
