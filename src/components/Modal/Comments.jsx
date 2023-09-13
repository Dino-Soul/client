import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { GrClose } from "react-icons/gr";
import CommentInput from "../FixedComponent/CommentInput";

function Comments({ openComments, toggleCommentsHandler, postId, Ootdimage }) {
  //댓글조회 data
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");

  //댓글 조회 GET Api

  useEffect(() => {}, []);

  const AddCommentsHandler = (e) => {
    setContent(e.target.value);
  };

  //댓글 등록 POST Api
  const addComments = async () => {
    try {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      const headers = {
        Accept: "*/*",
        Authorization: `${token}`,
        "Content-Type": "application/json",
      };

      const payload = {
        content,
      };

      setContent("");
      // e.preventDefault();
    } catch (error) {
      console.error("댓글 등록 실패:", error);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addComments();
    setContent("");
    // document.location.reload(true); // 성공시 새로고침
  };

  //수정버튼클릭
  const openUpdateHandler = (event, index) => {
    data[index].isOpen = !data[index].isOpen;
    setData([...data]);
  };

  const onChangeUpdate = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      {openComments && (
        <>
          <StModalsFather>
            <StModalOneChild>
              <StImgBox>
                <StImg src={Ootdimage} />
              </StImgBox>
              <StCommentsBox>
                <StButtonBox>
                  <GrClose onClick={toggleCommentsHandler} />
                </StButtonBox>
                <StGetCommentsBox>
                  {data.map((item, index) => (
                    <UserComment key={item.id}>
                      <CommentInput
                        postId={postId}
                        data={data}
                        item={item}
                        index={index}
                        setData={setData}
                        openUpdateHandler={openUpdateHandler}
                      />
                    </UserComment>
                  ))}
                </StGetCommentsBox>
                <StInputBox>
                  <form onSubmit={AddCommentsHandler}>
                    <StInput
                      placeholder="댓글 달기..."
                      value={content}
                      onChange={AddCommentsHandler}
                    />
                    <StAddComments onClick={onSubmitHandler}>
                      게시
                    </StAddComments>
                  </form>
                </StInputBox>
              </StCommentsBox>
            </StModalOneChild>
          </StModalsFather>
        </>
      )}
    </div>
  );
}

export default Comments;

const StModalsFather = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StModalOneChild = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 900px;
  height: 700px;
`;

const StImgBox = styled.div`
  width: 450px;
  height: 700px;
`;

const StImg = styled.img`
  width: 450px;
  height: 700px;
`;

const StCommentsBox = styled.div`
  position: relative;
  width: 450px;
  height: 700px;
`;

const StButtonBox = styled.button`
  overflow: hidden;
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background-color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.6);
  }
`;

const StGetCommentsBox = styled.div`
  position: absolute;
  width: 450px;
  height: 585px;
  top: 50px;
  border-top: 1px solid #b4b0b0;
  border-bottom: 1px solid #b4b0b0;
`;

const StInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 15px;
  position: absolute;
  bottom: 0px;
  width: 440px;
  height: 65px;
`;

const StInput = styled.input`
  width: 380px;
  height: 35px;
  border: none;
  outline: none;
`;

const StAddComments = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  &:hover {
    transform: scale(1.1);
    color: rgb(89, 60, 60);
    font-weight: 650;
  }
  font-weight: 550;
`;

const UserComment = styled.div`
  display: flex;
  align-items: center;
  width: 445px;
  padding: 6px 2px 6px 6px;
  height: auto;
  overflow: hidden;
`;
