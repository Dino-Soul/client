import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import OotdCard from "../components/home/OotdCard";
import RightNavBar from "../components/home/RightNavBar";

function Home() {
  const stCardCenterRef = useRef();
  const [data, setData] = useState([]);

  //게시글 조회
  const fetchBoard = async () => {
    try {
      console.log("게시글 조회 성공:", data);
      setData(data);
    } catch (error) {
      console.error("게시글 조회 실패:", error);
    }
  };
  useEffect(() => {
    fetchBoard();
  }, []);

  return (
    <StOotdContainer>
      <StCardCenter ref={stCardCenterRef}>
        {data.map((item) => (
          <div key={item.id}>
            <OotdCard
              postId={item.id}
              Ootdimage={item.image}
              content={item.content}
              nickname={item.nickname}
            />
          </div>
        ))}
      </StCardCenter>
      <RightNavBar stCardCenterRef={stCardCenterRef} />
    </StOotdContainer>
  );
}

export default Home;

const StOotdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  height: 100vh;
`;

const StCardCenter = styled.div`
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
