import React from "react";
import { styled } from "styled-components";

function Map() {
  return (
    <>
      <StWeatherContainer></StWeatherContainer>
    </>
  );
}

export default Map;

const StWeatherContainer = styled.div`
  position: sticky;
  width: 40%;
  height: 100vh;
  background-color: rgba(155, 60, 168, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
