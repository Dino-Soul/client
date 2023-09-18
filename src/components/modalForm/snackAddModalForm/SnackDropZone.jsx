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
		console.log(acceptedFiles);
	};
	const navigate = useNavigate();
	const { getRootProps, getInputProps } = useDropzone({ onDrop });
	// const [selectedImage, setSelectedImage] = useState(null);
	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />

			{uploadedFiles.length === 0 && (
				<StImageUl>
					<BsFillCloudUploadFill size='50px' color='pink' />
				</StImageUl>
			)}

			{uploadedFiles.length === 1 && (
				<div>
					{uploadedFiles.map((file) => (
						<StShowImg>
							<img
								key={file.name}
								src={URL.createObjectURL(file)}
								alt={file.name}
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
						</StShowImg>
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
	width: 480px;
	height: 380px;
	background-color: rgba(255, 255, 255, 0.492);
	display: flex;
	align-items: center;
	justify-content: center;
	border: 12px ridge rgba(255, 202, 244, 0.298);
`;

export const StShowImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
