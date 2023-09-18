import React, { useState } from "react";
import { styled } from "styled-components";
import SnackDropZone from "./SnackDropZone";
import basicAvatar from "../../../assets/basicAvatar.png"

function SnackAddModal({
  isAddModalVisibleState,
  snackAddModalHandler,
  onImageSelected,
  setUploadedFiles,
}) {
  const [ootdText, setOotdText] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };
  const imgAndPostHandler = async () => {
    snackAddModalHandler();
  };

  return (
    <div>
      {isAddModalVisibleState && (
          <StBackGround>
            <StModalBox>
              <div onClick={(e) => e.stopPropagation()}>
                <SnackDropZone
                  onImageSelected={setUploadedFiles}
                  setSelectedImage={setSelectedImage}
                />
              </div>
              <div onClick={snackAddModalHandler}>
                <User><img src={basicAvatar} alt="프로필"/>닉네임넣어주세용</User>
                <WriteText
                  value={ootdText}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setOotdText(e.target.value)}
                  placeholder="문구 입력..."
                />
                <div>위치설정</div>
              </div>
              <div onClick={(e) => e.stopPropagation()}>
                <UploadButton onClick={imgAndPostHandler}>
                  공유하기
                </UploadButton>
              </div>
            </StModalBox>
          </StBackGround>
      )}
    </div>
  );
}

export default SnackAddModal;

const StBackGround = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const StModalBox = styled.div`
  display: flex;
  position: relative;
  background-color: rgba(255, 255, 255, 0.875);
  width: 900px;
  height: 700px;
  align-items: center;
`;

// 게시글
const WriteText = styled.textarea`
  font-family: "omyu_pretty";
  padding-left: 10px;
  width: 370px;
  height: 300px;
  font-size: 17px;
  border: none;
  resize: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const User = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 35px;
    height: 35px;
  }
`


const UploadButton = styled.button`
  position: absolute;
  top: 2%;
  right: 2%;
  font-family: "LeferiPoint-SpecialItalicA";
  font-weight: 600;
  font-size: 15px;
  border: none;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.655);
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
