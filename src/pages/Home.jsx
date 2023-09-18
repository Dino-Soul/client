import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import RightNavBar from "../components/home/navBarForm/RightNavBar";
import SnackCard from "../components/home/snackCardForm/SnackCard";

function Home() {
	const CardCenterRef = useRef();

	return (
		<HomeContainer>
			<CardCenter ref={CardCenterRef}>
				<div>
					<SnackCard />
				</div>
			</CardCenter>
			<RightNavBar CardCenterRef={CardCenterRef} />
		</HomeContainer>
	);
}

export default Home;

const HomeContainer = styled.div`
	display: flex;
	/* justify-content: space-between; */
	width: 60%;
	height: 100vh;
`;

const CardCenter = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	max-height: 100vh;
	align-items: center;
	overflow-y: auto;
	/* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
	&::-webkit-scrollbar {
		display: none;
	}
`;
