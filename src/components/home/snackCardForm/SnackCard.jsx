import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import comment from "../../../assets/comment.png";
import trash from "../../../assets/trash.png";
import marker from "../../../assets/marker.png";
import LikeButton from "./LikeButton";
import CommentModal from "../../modalForm/commentForm/CommentModal";
import { useMutation } from "react-query";
import { getcomment } from "../../../api/postApi";

function SnackCard({ snackItem }) {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const checkVideoVisibility = () => {
      const rect = video.getBoundingClientRect();
      const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      setIsPlaying(isFullyVisible);
    };

    window.addEventListener('scroll', checkVideoVisibility);
    window.addEventListener('resize', checkVideoVisibility);

    checkVideoVisibility(); // 초기화 할 때 한 번 실행

    return () => {
      window.removeEventListener('scroll', checkVideoVisibility);
      window.removeEventListener('resize', checkVideoVisibility);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (isPlaying) {
      video.autoPlay = false;
      video.muted = false;
	  console.log('이게되나보쟈 :>> ');
    } else {
      video.autoPlay = true;;
      video.muted = true;
    }
  }, [isPlaying]);



	//좋아요
	const [like, setLike] = useState(false);

	//게시글 더보기
	const [moreContents, setMoreContents] = useState(true);

	//댓글창 모달(댓글작성란)
	const [openComments, setOpenComments] = useState(false);

	const getcommentMutation = useMutation(getcomment, {
		onSuccess: (data) => {
			console.log('data왜요??', data)
			setOpenComments((pre) => !pre);
		},
	  });


	//게시글 더보기핸들러
	const moreViewHandler = () => {
		setMoreContents((pre) => !pre);
	};

	//댓글창 모달핸들러
	const toggleCommentsHandler = () => {
		getcommentMutation.mutate(snackItem.snackId);
	};

	const toggleLike = () => {
		setLike(!like);
	};

	return (
		<S.SnackCardContainer>
			<video width="100%" ref={videoRef} autoPlay muted>
				<source key={snackItem.snackId} src={snackItem.videoUrl} type="video/mp4" />
				<track kind="captions" src="" srclang="en" label="Disabled" default />
			</video>
			<S.ButtonBox>
				<LikeButton like={like} onClick={toggleLike} />
				<S.CommentButton onClick={toggleCommentsHandler}>
					<img src={comment} alt="댓글" />
				</S.CommentButton>
				<S.DeleteButton>
					<img src={trash} alt="댓글" />
				</S.DeleteButton>
			</S.ButtonBox>
			<S.ContentContainer>
				<S.Content>{snackItem.Content}</S.Content>
				<S.User>
					<S.Profile>
						<img src={like} alt="유저프로필" />
					</S.Profile>
					<S.Nickname>@{snackItem.Nickname}</S.Nickname>
				</S.User>
			</S.ContentContainer>
			<S.Location>
				<img src={marker} alt="위치아이콘" />
				강원특별자치도 태백시 번영로
			</S.Location>
			<CommentModal
				openComments={openComments}
				toggleCommentsHandler={toggleCommentsHandler}
				snackId={snackItem.snackId}
			/>
		</S.SnackCardContainer>
	);
}

export default SnackCard;
