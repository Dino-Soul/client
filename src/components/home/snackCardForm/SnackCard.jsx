import React, { useState } from "react";
import { useMutation } from "react-query";
import * as S from "./style";
import profile from "../../../assets/profile.jpg";
import comment from "../../../assets/comment.png";
import trash from "../../../assets/trash.png";
import example from "../../../assets/example.jpg";
import marker from "../../../assets/marker.png";
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
		<S.SnackCardContainer>
			<S.ButtonBox>
			<LikeButton like={like} onClick={toggleLike} />
			<S.CommentButton onClick={toggleCommentsHandler}>
				<img src={comment} alt="댓글" />
			</S.CommentButton>
			<S.DeleteButton >
				<img src={trash} alt="댓글" />
			</S.DeleteButton>
			</S.ButtonBox>
			<S.ContentContainer>
			<S.Content>내용내용</S.Content>
			<S.User>
			<S.Profile><img src={example} alt="유저프로필"/></S.Profile>
			<S.Nickname>@eunji</S.Nickname>
			</S.User>
			</S.ContentContainer>
			<S.Location><img src={marker} alt="위치아이콘"/>강원특별자치도 태백시 번영로</S.Location>
			<CommentModal
				postId={postId}
				openComments={openComments}
				toggleCommentsHandler={toggleCommentsHandler}
				Ootdimage={Ootdimage}
			/>
		</S.SnackCardContainer>
	);
}

export default SnackCard;
