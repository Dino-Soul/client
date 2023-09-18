import React from "react";

import styled from "styled-components";
import emptyHeartImg from "../../../assets/emptyHeartImg.png";
import heartImg from "../../../assets/heartImg.png";

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
	border: none;
	background-color: transparent;
	cursor: pointer;
	transition: transform 300ms ease;
	img {
		width: 48px;
		height: 48px;
	}
	&:hover {
		transform: scale(1.1);
	}
`;
