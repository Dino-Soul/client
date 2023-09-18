import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import home from "../../../assets/home.png"
import people from "../../../assets/people.png"
import add from "../../../assets/add.png"
import SnackAddModal from "../../modalForm/snackAddModalForm/SnackAddModal";

function NavBarButton({ CardCenterRef }) {
  //홈버튼 눌렀을때 스크롤위치 맨 위쪽으로
  const scrollToTop = () => {
    CardCenterRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();
  //스낵올리기
  const [isAddModalVisibleState, setIsAddModalVisibleState] = useState(false);
  const snackAddModalHandler = () => {
    setIsAddModalVisibleState((pre) => !pre);
  };

  return (
    <>
      <Section>
        <HomeButton onClick={scrollToTop}>
          <HomeIcon src={home} alt="홈버튼" />
          <Span>홈</Span>
        </HomeButton>
      </Section>
      <Section>
        <SingUpButton
          onClick={() => {
            navigate("signup");
          }}
        >
          <PeopleIcon src={people} alt="회원가입버튼" />
          <Span>회원가입/로그인</Span>
        </SingUpButton>
      </Section>
      <Section>
        <AddButton onClick={snackAddModalHandler}>
          <AddIcon src={add} alt="게시물올리기버튼" />
          <Span>Snack 올리기</Span>
          <SnackAddModal isAddModalVisibleState={isAddModalVisibleState} snackAddModalHandler={snackAddModalHandler} />
        </AddButton>
      </Section>
      <Section>
        <EditButton
          onClick={() => {
            navigate("personaldata");
          }}
        >
          <Span>프로필 수정</Span>
        </EditButton>
      </Section>
    </>
  );
}

export default NavBarButton;

const Section = styled.section`
  width: 90%;
`;

const Span = styled.span`
  font-weight: bold;
  color : white;
`;

const HomeButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 40px;
  gap: 20px;
  width: 100%;
  height: 40px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgba(214, 221, 234, 0.2);
  }
`;

const HomeIcon = styled.img`
  width: 22px;
  height: 22px;
  background-color: transparent;
`;

const SingUpButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 40px;
  margin-top: 10px;
  gap: 20px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: rgba(214, 221, 234, 0.2);
  }
`;

const PeopleIcon = styled.img`
  width: 20px;
  height: 20px;
  background-color: transparent;
`;

const AddButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 38px;
  margin-top: 10px;
  gap: 17px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: rgba(214, 221, 234, 0.2);
  }
`;

const AddIcon = styled.img`
  width: 25px;
  height: 25px;
  background-color: transparent;
`;

const EditButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 38px;
  margin-top: 10px;
  gap: 17px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: rgba(214, 221, 234, 0.2);
  }
`;
