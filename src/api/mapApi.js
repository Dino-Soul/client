import { instance } from "./instance";

//  관광지 조회
const gettravlespot = async () => {
  const response = await instance.get(`/travlespot`);
  return response.data;
};



export { gettravlespot };
