import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import blackLogo from "../assets/blackLogo.png";
import {
  StInputForm,
  StOotdGramContainer,
  StSignButton,
  StSignInput,
  StSignLogo,
} from "./SignIn";
import { addUser } from "../api/userApi";

// 아이디 체크 : 5자 이상~12자 이하 영문소문자+숫자 조합
export const isuserId = (asValue) => {
  const regExp = /^[a-z0-9]{5,12}$/;

  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
};
//비밀번호 체크 : 8~16자 영문,숫자,특수문자 조합
export const isPassword = (asValue) => {
  const regExp =
    /^(?=.*[A-Za-z])(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,21}$/im;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
};
//닉네임 체크 : 2글자 이상 10글자 이하
const isNickname = (asValue) => {
  const regExp = /^[a-zA-Z0-9가-힣]{2,10}$/;

  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
};

function SignUp() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [userId, setUserId] = useState("");

  // ---------------------------------------회원가입
  const signupMutation = useMutation(addUser, {
    onSuccess: () => {
      navigate("/signin");
    },
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (nickname.trim() === "" && password.trim() === "") {
      alert("닉네임과 비밀번호를 입력해주세요.");
      return;
    } else if (!userId) {
      alert("id를 입력해주세요.");
      return;
    } else if (!nickname) {
      alert("nickname을 입력해주세요.");
      return;
    } else if (!password) {
      alert("password를 입력해주세요.");
      return;
    } else if (password !== password2) {
      alert("password를 동일하게 입력해주세요.");
      return;
    } else if (!isuserId(userId)) {
      alert("아이디를 올바르게 입력해주세요.");
    } else if (!isPassword(password)) {
      alert("패스워드는 8~16자, 영문,숫자,특수문자 조합으로 입력해주세요.");
      return;
    } else if (!isNickname(nickname)) {
      alert("아이디는 5~12자, 영문자 또는 숫자로 입력해주세요.");
      return;
    } else {
      const newUser = {
        loginId: userId,
        password,
        passwordCheck: password2,
        nickname,
      };
      signupMutation.mutate(newUser);
    }
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
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          type="text"
        />
        <StSignInput
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <StSignInput
          placeholder="Password double check"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          type="password"
        />
        <StSignButton type="submit" $bgColor={"blue"}>
          Sign up
        </StSignButton>
      </StInputForm>
      <p style={{ color: "#dfdbdb" }}>――――――――　OR　――――――――</p>
      <StSignButton
        $bgColor={"gray"}
        onClick={() => {
          navigate("/signin");
        }}
      >
        Already have an account? &nbsp;{" "}
        <span
          style={{
            fontWeight: "700",
          }}
        >
          Sign in.
        </span>
      </StSignButton>
    </StOotdGramContainer>
  );
}

export default SignUp;
