import React, { useState } from "react";
import { styled } from "styled-components";
import SnackDropZone from "./SnackDropZone";
import basicAvatar from "../../../assets/basicAvatar.png";
import marker02 from "../../../assets/marker02.png";
import DaumPostcodeEmbed from "react-daum-postcode";

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

  const handleComplete = (data) => {
    console.log("data", data); // '서울 성동구 왕십리로2길 20 (성수동1가)'
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
            <TextContainer onClick={snackAddModalHandler}>
              <User>
                <img src={basicAvatar} alt="프로필" />
                닉네임넣어주세용
              </User>
              <WriteText
                value={ootdText}
                onKeyDown={handleKeyDown}
                onChange={(e) => setOotdText(e.target.value)}
                placeholder="문구 입력..."
              />
              <AddLocationButton>
                <p>위치를 추가해주세요</p>
                <div>
                  <img src={marker02} alt="위치아이콘" />
                </div>
              </AddLocationButton>
              <DaumPostcodeEmbed
                onComplete={handleComplete}
                style={{ height: "400px" }}
              />
            </TextContainer>
            <div onClick={(e) => e.stopPropagation()}>
              <UploadButton onClick={imgAndPostHandler}>공유하기</UploadButton>
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
  overflow: hidden;
`;

const TextContainer = styled.div`
  height: 600px;
`;

const WriteText = styled.textarea`
  font-family: "omyu_pretty";
  padding-left: 10px;
  padding-top: 10px;
  width: 370px;
  height: 150px;
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
`;

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

const AddLocationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 200px;
  margin-left: 10px;
  p {
    width: 130px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
  }
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
