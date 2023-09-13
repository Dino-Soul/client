import React from "react";
import { styled } from "styled-components";
import logo from "../../Icon/logo.png";
import NavBarButton from "./NavBarButton";

function RightNavBar({ stCardCenterRef }) {
  return (
    <StNavContainer>
      <NavLogo src={logo} alt="로고" />
      <NavBarButton stCardCenterRef={stCardCenterRef} />
    </StNavContainer>
  );
}

export default RightNavBar;

const StNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 100vh;
  border-left: 1px solid rgb(0, 0, 0);
`;
const NavLogo = styled.img`
  width: 200px;
  height: 50px;
  margin-top: 50px;
`;
