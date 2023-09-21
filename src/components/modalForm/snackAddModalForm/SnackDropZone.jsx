import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsFillCloudUploadFill } from "react-icons/bs";
// import { GrClose } from 'react-icons/gr';
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const SnackDropZone = ({ toggleOotdModal, setSelectedImage }) => {
	//ootdadddropzone은 자식컴포넌트, 부모인 ootdaddmodal에 uploadedFiles를 저쪽에 넘겨줘야하잖아요!
	const [uploadedFiles, setUploadedFiles] = useState("");
	useEffect(() => {
		setSelectedImage(uploadedFiles);
	}, [uploadedFiles]);

	const onDrop = (acceptedFiles) => {
		setUploadedFiles(acceptedFiles);
	};
	const navigate = useNavigate();
	const { getRootProps, getInputProps } = useDropzone({ onDrop });
	// const [selectedImage, setSelectedImage] = useState(null);
	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />

			{uploadedFiles.length === 0 && (
				<StImageUl>
					<BsFillCloudUploadFill size='50px' color='orange' />
					기기에 저장된 사진이나 동영상을 이곳에 업로드해주세요!
				</StImageUl>
			)}

			{uploadedFiles.length === 1 && (
				<div>
					{uploadedFiles.map((file) => (
						<ShowVideo>
							<video width="500px" autoPlay muted>
							<source
								key={file.name}
								src={URL.createObjectURL(file)}
								type="video/mp4"
								style={{
									minWidth: "480px",
									maxWidth: "480px",
									minHeight: "380px",
									maxHeight: "380px",
									display: "flex",
									justifyContent: "center",
									alignContent: "center",
								}}
							/>
							 <track kind="captions" src="" srclang="en" label="Disabled" default />
							</video>
						</ShowVideo>
					))}
				</div>
			)}
			{/* <StUploadBtn onClick={e => e.stopPropagation()}>Upload</StUploadBtn> */}
			{/* <StUploadBtn onClick={e => e.stopPropagation()}>Upload</StUploadBtn> 여기에 버튼 넣어서 사용하시면 됩니당 */}
		</div>
	);
};
export default SnackDropZone;

// 업로드하는곳
const StImageUl = styled.div`
	font-size: 15px;
	font-weight: bold;
	width: 500px;
	height: 700px;
	background-color: rgba(255, 255, 255, 0.492);
	display: flex;
	gap: 20px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ShowVideo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
