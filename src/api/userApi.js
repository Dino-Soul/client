import { instance } from "./instance";

// 회원가입
const addUser = async (newUser) => {
  const response = await instance.post(`/auth/signup`, newUser);
  // console.log("회원가입", response)
  return response.data;
};

// 로그인
const login = async (loginInformation) => {
  const response = await instance.post(`/auth/login`, loginInformation);
  const accesstoken = response.headers.authorization;
  sessionStorage.setItem("accesstoken", accesstoken);
  // console.log("로그인", response)
  return response.data;
};

// 내정보 수정
const editUser = async (newUserInfomation) => {
  const response = await instance.patch(`/auth/profile`, newUserInfomation);
  // console.log("내정보 수정", response)
  return response.data;
};

export { addUser, login, editUser };
