import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(async (config) => {
  const accessToken = getToken("accessToken");
  if (accessToken) {
    config.headers.Authorization = accessToken;
  } else {
    deleteToken("accessToken"); //accessToken 값 undefined 뜰때 쿠키에서 삭제
  }

  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
