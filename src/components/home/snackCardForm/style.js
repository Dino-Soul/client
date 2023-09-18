import { styled } from "styled-components";

export const SnackCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 30px auto;
	width: 50vh;
	height: 80vh;
	background-color: yellow;
    scroll-snap-align: center;

`;

export const CommentButton = styled.button`
	width: 50px;
	border: none;
	background-color: transparent;
	cursor: pointer;
`;
export const CommentIcon = styled.img`
	width: 30px;
	height: 30px;
	background-color: transparent;
`;
