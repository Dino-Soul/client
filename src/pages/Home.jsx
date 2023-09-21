import React, { useRef } from "react";
import { useQuery } from "react-query";
import { styled } from "styled-components";
import { getPosts } from "../api/postApi";
import RightNavBar from "../components/home/navBarForm/RightNavBar";
import SnackCard from "../components/home/snackCardForm/SnackCard";
// import { useDispatch } from "react-redux";
// import { fetchSnack } from "../redux/modules/snackSlice";

function Home() {
	const CardCenterRef = useRef();
	// const dispatch = useDispatch();

	const {
		data: snack,
		isLoading,
		isError,
	} = useQuery("snack", getPosts, {
		refetchOnWindowFocus: false,
		onSuccess: data => {

			// dispatch(fetchSnack(data))
		  },
	});

	if (isLoading) return <div>로딩중...</div>;
	if (isError) return <div>에러...</div>;

	return (
		<HomeContainer>
			<CardCenter ref={CardCenterRef}>
				<SnackCardBox>
					{snack.data.map((item) => (
						<SnackCard key={item.snackId} snackItem={item} />
					))}
				</SnackCardBox>
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
`;

const SnackCardBox = styled.div`
	width: 100%;
	flex-direction: column;
	overflow: hidden auto;
	scroll-snap-type: y mandatory;
	overflow-y: auto;
	/* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
	&::-webkit-scrollbar {
		display: none;
	}
`;
