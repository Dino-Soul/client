import React, { useState } from "react";
import { styled } from "styled-components";

import profile from "../../assets/profile.jpg";
import Avatar from "../home/snackCardForm/Avatar";

export default function CommentInput() {
  const [Text, setText] = useState();

  return (
    <>
      {/* <Avatar image={profile} type="homeAvatar" />
      {item.isOpen ? (
        <StTextBox>
          <StIdText>{}</StIdText>
          <input autoFocus type="text" onChange={setText} value={Text} />
          <StDate>{}</StDate>
        </StTextBox>
      ) : (
        <StTextBox>
          <StIdText>{}</StIdText>
          <StContentText>{}</StContentText>
          <StDate>{}</StDate>
        </StTextBox>
      )}
      <StUserEditCancelBtnBox>
        {item.isOpen ? (
          <StUserBtn>완료</StUserBtn>
        ) : (
          <>
            <StUserBtn>수정</StUserBtn>
            <StUserBtn>삭제</StUserBtn>
          </>
        )}
      </StUserEditCancelBtnBox> */}
    </>
  );
}

const Update = styled.input``;

//여기서부터 map 돌려서 반복해야하는 댓글1개당 styled-components

const StTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  font-family: "Pretendard-Regular";
`;

const StIdText = styled.div`
  font-size: medium;
  display: flex;
  justify-content: flex-start;
  font-family: "LeferiPoint-SpecialItalicA";
`;

const StDate = styled.div`
  font-size: small;
`;

const StUserEditCancelBtnBox = styled.div`
  display: flex;
  gap: 5px;
  margin-left: 10px;
`;

const StUserBtn = styled.button`
  font-family: "Pretendard-Regular";
  width: 40px;
  height: 23px;
  cursor: pointer;
  border: none;
  border-radius: 100px;
  /* border: 1px solid rgb(89, 60, 60);
	border-radius: 8px; */
  background-color: transparent;
  &:hover {
    transform: scale(1.1);
    color: rgb(89, 60, 60);
    font-weight: 650;
  }
  font-weight: 550;
  background: linear-gradient(48deg, #e99bcd, #ffffff);
`;

const StContentText = styled.div`
  width: 280px;
`;
