import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import blackLogo from "../assets/blackLogo.png";
import { useMutation } from "react-query";
import { login } from "../api/userApi";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/modules/loginSlice";

function SignIn() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // ----------------------------------------로그인 로직
  const loginMutation = useMutation(login, {
    onError: (error) => {
      alert("아이디와 비밀번호를 확인해주세요!");
    },
    onSuccess: () => {
      dispatch(logIn());
      navigate("/");
    },
  });
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const loginInformation = {
      loginId: userId,
      password,
    };
    loginMutation.mutate(loginInformation);
  };
  return (
    <StOotdGramContainer>
      <StSignLogo
        onClick={() => {
          navigate("/");
        }}
        src={blackLogo}
        alt="로고"
      />

      <StInputForm onSubmit={onSubmitHandler}>
        <StSignInput
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Id"
          value={userId}
          type="text"
        />
        <StSignInput
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <StSignButton type="submit" $bgColor={"blue"}>
          Sign in
        </StSignButton>
      </StInputForm>
      <p style={{ color: "#dfdbdb" }}>――――――――　OR　――――――――</p>
      <StSignButton
        $bgColor={"gray"}
        onClick={() => {
          navigate("/signup");
        }}
      >
        Sign up
      </StSignButton>
    </StOotdGramContainer>
  );
}

export default SignIn;

export const StSignLogo = styled.img`
  width: 230px;
  height: 120px;
  margin-bottom: 40px;
  cursor: pointer;
`;

export const StOotdGramContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100vh;
  background-color: #fafafa;
`;

export const StInputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const StSignInput = styled.input`
  background-color: #dfdbdb;
  width: 320px;
  height: 20px;
  border: none;
  border-radius: 6px;
  margin: 8px;
  padding: 10px;
`;

export const StSignButton = styled.button`
  width: 320px;
  height: 40px;
  border: none;
  border-radius: 6px;
  margin: 8px;
  padding: 10px;
  margin-top: 32px;
  cursor: pointer;
  &:hover {
    filter: brightness(70%);
  }
  ${(props) => colorHandler(props.$bgColor)};

  ${({ $bgColor }) => colorHandler($bgColor)};
`;

const colorHandler = (color) => {
  switch (color) {
    case "blue":
      return `background-color:rgba(72, 132, 238, 0.6); color : white;`;
    case "gray":
      return `color: black; background-color: #dfdbdb`;
    default:
      return "";
  }
};
