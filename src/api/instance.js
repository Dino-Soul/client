import axios from "axios";
export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(async (config) => {
  const accesstoken = sessionStorage.getItem('accesstoken');

  if (accesstoken) {
    config.headers.authorization = accesstoken;
  }
console.log('config', config)
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
