import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import PersonalDataEditModal from "../components/modalForm/profileEditForm/PersonalDataEditModal";

import { StOotdGramContainer, StSignInput } from "./SignIn";

function PersonalData() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const [editModal, setEditModal] = useState(false);

  const toggleEditModal = () => {
    setEditModal((pre) => !pre);
  };

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  console.log(name);
  console.log(JSON.stringify(image));

  //서버에 사진 전송하기
  const editPersonalDataHandler = async () => {
    try {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      const headers = {
        Accept: "*/*",
        Authorization: `${token}`,
        "Content-Type": "multipart/form-data",
      };

      const formData = new FormData();

      const data = {
        nickname: name,
      };

      // formData.append('image', selectedImage[0]);
      formData.append("image", image[0]);
      formData.append(
        "data",
        new Blob([JSON.stringify(data)], { type: "application/json" })
      );
    } catch (error) {
      console.error("Personal 전송 실패:", error);
    }
  };

  return (
    <StOotdGramContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "320px",
          marginTop: "100px",
        }}
      >
        <GrClose
          size={20}
          style={{
            cursor: "pointer",
          }}
          onClick={navigateToHome}
        />
        <StFont> Edit profile</StFont>
        <FaCheck
          size={20}
          color="rgb(72, 132, 238)"
          cursor="pointer"
          onClick={editPersonalDataHandler}
        />
      </div>
      <img  alt="아바타" />
      <StFont
        $fontColor={"blue"}
        style={{ cursor: "pointer" }}
        onClick={toggleEditModal}
      >
        {" "}
        Change profile photo{" "}
      </StFont>

      <StSignInput
        placeholder="NickName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div
        style={{
          height: "500px",
        }}
      ></div>
      <PersonalDataEditModal
        editModal={editModal}
        toggleEditModal={toggleEditModal}
        setImage={setImage}
      />
    </StOotdGramContainer>
  );
}

export default PersonalData;

const StFont = styled.p`
  font-family: "GowunDodum-Regular";
  font-weight: 700;

  ${(props) => fontColorHandler(props.$fontColor)};

  ${({ $fontColor }) => fontColorHandler($fontColor)};
`;

const fontColorHandler = (color) => {
  switch (color) {
    case "blue":
      return `color:rgb(72, 132, 238);`;
    default:
      return "";
  }
};
