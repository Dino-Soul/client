import React from "react";

import styled from "styled-components";
import emptyHeartImg from "../../../assets/emptyHeartImg.png"
import heartImg from "../../../assets/heartImg.png"

const LikeButton = ({ like, onClick }) => {
  return (
    <>
      <StButton onClick={onClick}>
        <img src={like ? heartImg : emptyHeartImg} />
      </StButton>
    </>
  );
};

export default LikeButton;

const StButton = styled.button`
  width: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
