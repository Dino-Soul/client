import React, { useState } from "react";
import { useMutation } from "react-query";
import * as S from "./style";
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
		<S.SnackCardContainer>
			<LikeButton like={like} onClick={toggleLike} />
			<S.CommentButton onClick={toggleCommentsHandler}>
				<S.CommentIcon src={comment} alt="댓글" />
			</S.CommentButton>
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
