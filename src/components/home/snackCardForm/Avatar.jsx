import React from "react";
import { styled } from "styled-components";

export default function Avatar({ image, type }) {
	return (
		<>
			<StPhoto src={image} alt='avatar' type={type} />
		</>
	);
}

const StPhoto = styled.img`
	border-radius: 100%;
	object-fit: cover;
	${({ type }) => sizeHandler(type)};
`;

const sizeHandler = (type) => {
	switch (type) {
		case "editAvatar":
			return `width: 80px; height: 80px; `;
		case "homeAvatar":
			return `width: 36px; height: 37px;`;
		default:
			return ``;
	}
};
