import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(async (config) => {
  // const accessToken = getToken("accessToken");
  // if (accessToken) {
  //   config.headers.Authorization = accessToken;
  // } else {
  //   deleteToken("accessToken"); //accessToken 값 undefined 뜰때 쿠키에서 삭제
  // }
  console.log("요청 완료", config);
  return config;
});

instance.interceptors.response.use(
  (response) => {
    console.log("응답 완료", response);
    return response;
  },
  async (error) => {
    console.log("응답 에러", error);
    return Promise.reject(error);
  }
);
