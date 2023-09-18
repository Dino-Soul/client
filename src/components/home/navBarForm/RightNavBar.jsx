import React from "react";
import { styled } from "styled-components";
import whiteLogo from "../../../assets/whiteLogo.png"
import NavBarButton from "./NavBarButton";

function RightNavBar({ CardCenterRef }) {
  return (
    <StNavContainer>
      <NavLogo src={whiteLogo} alt="로고" />
      <NavBarButton CardCenterRef={CardCenterRef} />
    </StNavContainer>
  );
}

export default RightNavBar;

const StNavContainer = styled.div`
background-color: #373737;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 100vh;
`;
const NavLogo = styled.img`
  width: 220px;
  height: 100px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
