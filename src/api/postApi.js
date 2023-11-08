import { instance } from "./instance";

// 스낵 등록
export const addPost = async (postData) => {
  const response = await instance.post(`/snack`, postData);
  // console.log("스낵 등록", response)
  return response.data;
};

// 스낵 삭제
export const deletePost = async (snackId) => {
  const response = await instance.delete(`/snack/${snackId}`);
  // console.log("스낵 삭제", response)
  return response.data;
};

//  스낵 전체 조회
export const getPosts = async () => {
  const response = await instance.get(`/snack`);
  // console.log("스낵 전체 조회", response)
  return response.data;
};

// 댓글 조회
export const getcomment = async (snackId) => {
  const response = await instance.post(`/comments`, snackId);
  // console.log("댓글 조회", response)
  return response;
};

// 댓글 작성
export const addcomment = async (snackId, commentData) => {
  const response = await instance.post(
    `/comment/snack/${snackId}`,
    commentData
  );
  console.log("댓글 작성", response)
  return response.data;
};
