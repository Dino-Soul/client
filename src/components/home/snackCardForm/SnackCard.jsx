import React, { useState } from "react";
import { useMutation } from "react-query";
import { styled } from "styled-components";
import profile from "../../../assets/profile.jpg";
import comment from "../../../assets/comment.png";

import Avatar from "./Avatar";
import LikeButton from "./LikeButton";
import CommentModal from "../../modalForm/commentForm/CommentModal";

function SnackCard({ Ootdimage, content, nickname, postId }) {
  //좋아요
  const [like, setLike] = useState(false);

  //게시글 더보기
  const [moreContents, setMoreContents] = useState(true);

  //댓글창 모달(댓글작성란)
  const [openComments, setOpenComments] = useState(false);

  //게시글 더보기핸들러
  const moreViewHandler = () => {
    setMoreContents((pre) => !pre);
  };

  //댓글창 모달핸들러
  const toggleCommentsHandler = () => {
    setOpenComments((pre) => !pre);
  };

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <>
      <StOotdCardContainer>
        <StCardHead>
          <div
            style={{
              marginLeft: "-30px",
              marginRight: "260px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Avatar image={profile} type="homeAvatar" />
            <div
              style={{
                width: "50px",
              }}
            >
              {nickname}
            </div>
          </div>
        </StCardHead>
        <div className="card-img">
          <MainOotdImg src={Ootdimage} alt="userImage" />
        </div>
        <div
          className="like-comments-icon-container"
          style={{ display: "flex", width: "340px", marginTop: "px" }}
        >
          <div
            style={{
              marginLeft: "-40px",
              marginRight: "260px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LikeButton like={like} onClick={toggleLike} />
            <div
              style={{
                width: "50px",
                whiteSpace: "nowrap",
                fontSize: "small",
              }}
            >
              김광일님 외 5명이 이 게시글을 좋아합니다.
            </div>
          </div>
          <button
            style={{
              width: "50px",
              border: "none",
              backgroundColor: "white",
              cursor: "pointer",
            }}
            onClick={toggleCommentsHandler}
          >
            <StComment src={comment} alt="댓글" />
          </button>
        </div>
        {moreContents && (
          <div
            className="ellipsis"
            style={{
              width: "400px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {nickname} {content}
            <StMoreDetailBtn onClick={moreViewHandler}>더보기</StMoreDetailBtn>
          </div>
        )}
        {!moreContents && (
          <div
            className="ellipsis"
            style={{
              width: "400px",
            }}
          >
            {nickname} {content}
          </div>
        )}
      </StOotdCardContainer>
      <CommentModal
             postId={postId}
             openComments={openComments}
             toggleCommentsHandler={toggleCommentsHandler}
             Ootdimage={Ootdimage}
      />
    </>
  );
}

export default SnackCard;

const StOotdCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
  width: 400px;
  height: 100%;
  border-bottom: 1px solid black;
`;

const StCardHead = styled.div`
  display: flex;
  width: 340px;
  height: 50px;
`;


const MainOotdImg = styled.img`
  width: 100%;
  height: 380px;
`;

const StLike = styled.img`
  width: 30px;
  height: 30px;
  background-color: transparent;
`;

const StComment = styled.img`
  width: 30px;
  height: 30px;
  background-color: transparent;
`;

const StMoreDetailBtn = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 410px;
`;
