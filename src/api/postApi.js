// 스낵 등록
const addPost = async (postData) => {
  const response = await instance.post(`/sanck`, postData);
  // console.log("스낵 등록", response)
  return response.data;
};

// 스낵 삭제
const deletePost = async (sanckId) => {
  const response = await instance.delete(`/sanck/${sanckId}`);
  // console.log("스낵 삭제", response)
  return response.data;
};

//  스낵 전체 조회
const getPosts = async () => {
  const response = await instance.get(`/sanck?${location}&${lastsnackid}`);
  // console.log("스낵 전체 조회", response)
  return response.data;
};

// 댓글 조회
const getcomment = async () => {
  const response = await instance.get(`/comment/snack/${snackId}`);
  // console.log("댓글 조회", response)
  return response.data;
};

// 댓글 작성
const addcomment = async (commentData) => {
  const response = await instance.post(
    `/comment/snack/${snackId}`,
    commentData
  );
  // console.log("댓글 작성", response)
  return response.data;
};
