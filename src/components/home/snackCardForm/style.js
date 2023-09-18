import { styled } from "styled-components";

export const SnackCardContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	margin: 60px auto 60px auto;
	width: 50vh;
	height: 80vh;
	background-color: beige;
	border-radius: 8px;
	scroll-snap-align: center;
	box-shadow: 0px -90px 16px 0px rgba(82,72,72,0.27) inset;
`;
export const ButtonBox = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	bottom: 15%;
	right: 5%;
	gap: 15px;
`;

export const CommentButton = styled.button`
	width: 50px;
	border: none;
	background-color: transparent;
	cursor: pointer;
	img {
		width: 50px;
		height: 50px;
		background-color: transparent;
	}
	&:hover {
		transform: scale(1.1);
	}
`;
export const DeleteButton = styled.button`
	width: 50px;
	border: none;
	background-color: transparent;
	cursor: pointer;
	img {
		width: 50px;
		height: 50px;
		background-color: transparent;
	}
	&:hover {
		transform: scale(1.1);
	}
`;

export const ContentContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 10px;
	left: 2%;
	bottom: 1%;
`

export const Content = styled.div`
	color: white;
	font-size: 20px;
`

export const User = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`

export const Profile = styled.div`
	img {
		width: 40px;
		height: 40px;
		border-radius: 100%;
	}
`

export const Nickname = styled.div`
	color: white;
	font-size: 20px;
`

export const Location = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 2%;
	right: 5%;
	font-size: 14px;
	color: white;
	img {
		width: 20px;
		height: 20px;
	}
`