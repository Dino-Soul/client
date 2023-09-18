import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Map from "../components/mapForm/Map";

function root() {
  return (
    <StContainer>
      <Map />
      <Outlet />
    </StContainer>
  );
}

export default root;

const StContainer = styled.div`
  display: flex;
  min-width: 1280px;
`;
