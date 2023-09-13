import React, { useState } from "react";
import { HiPhotograph } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import add from "../../Icon/add.png";
import home from "../../Icon/home.png";
import people from "../../Icon/people.png";
import OotdAddModal from "../Modal/OotdAddModal";

function NavBarButton({ stCardCenterRef }) {
  const scrollToTop = () => {
    stCardCenterRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();
  const [addModal, setAddModal] = useState(false);

  const toggleOotdModal = () => {
    setAddModal((pre) => !pre);
  };

  return (
    <>
      <StDiv>
        <HomeButton onClick={scrollToTop}>
          <HomeIcon src={home} alt="홈버튼" />
          <StSpan>홈</StSpan>
        </HomeButton>
      </StDiv>
      <StDiv>
        <SingUpButton
          onClick={() => {
            navigate("signup");
          }}
        >
          <PeopleIcon src={people} alt="회원가입버튼" />
          <StSpan>회원가입</StSpan>
        </SingUpButton>
      </StDiv>
      <StDiv>
        <AddButton onClick={toggleOotdModal}>
          <AddIcon src={add} alt="게시물올리기버튼" />
          <StSpan>ootd 올리기</StSpan>
          <OotdAddModal addModal={addModal} toggleOotdModal={toggleOotdModal} />
        </AddButton>
      </StDiv>
      <StDiv>
        <EditButton
          onClick={() => {
            navigate("personaldata");
          }}
        >
          <HiPhotograph size={30} cursor="pointer" />
          <StSpan>프로필 수정</StSpan>
        </EditButton>
      </StDiv>
    </>
  );
}

export default NavBarButton;

const StDiv = styled.div`
  width: 90%;
`;

const StSpan = styled.span`
  font-weight: bold;
`;

const HomeButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 40px;
  margin-top: 20px;
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
  width: 23px;
  height: 25px;
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
  height: 25px;
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
