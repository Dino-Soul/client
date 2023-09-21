import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

function PersonalDataEditModal({ editModal, toggleEditModal, setImage }) {
	const [uploadedFiles, setUploadedFiles] = useState('');

	useEffect(() => {
		setImage(uploadedFiles);
	}, [uploadedFiles]);

	const onDrop = acceptedFiles => {
		setUploadedFiles(acceptedFiles);
	};
	const navigate = useNavigate();
	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<div>
			{editModal && (
				<>
					<StEditModal>
						<StModalBox onClick={e => e.stopPropagation()}>
							<div>
								<div {...getRootProps()}>
									<input {...getInputProps()} />

									<STdropBoxTitle onClick={e => e.stopPropagation()}>
										Drag & Drop
										<GrClose onClick={toggleEditModal} />
									</STdropBoxTitle>

									{uploadedFiles.length === 0 && (
										<StImageUl>
											<BsFillCloudUploadFill size="100px" />
										</StImageUl>
									)}
									{uploadedFiles.length === 1 && (
										<div>
											{uploadedFiles.map(file => (
												<StShowImg>
													<img
														key={file.name}
														src={URL.createObjectURL(file)}
														alt={file.name}
														style={{
															maxWidth: '500px',
															maxHeight: '500px',
															display: 'flex',
															justifyContent: 'center',
															alignContent: 'center',
														}}
													/>
												</StShowImg>
											))}
										</div>
									)}
								</div>
								<StUploadBtn onClick={toggleEditModal}>Upload</StUploadBtn>
							</div>
						</StModalBox>
					</StEditModal>
				</>
			)}
		</div>
	);
}

export default PersonalDataEditModal;

const StEditModal = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
`;

const StModalBox = styled.div`
	display: flex;
	background-color: rgba(255, 255, 255, 0.875);
	width: 800px;
	height: 800px;
	border-radius: 12px;
	align-items: center;
	justify-content: center;
`;

const StUploadBtn = styled.button`
	font-family: 'LeferiPoint-SpecialItalicA';
	font-weight: 600;
	font-size: 20px;
	border: none;
	border-radius: 100px;
	margin-top: 30px;
	padding-top: 6px;
	background: linear-gradient(45deg, #1fa0f0, #e67bcd, #ffffff, #a7d2ec);
	color: black;
	width: 500px;
	height: 50px;
	&:hover {
		letter-spacing: 5px;
		transform: scale(1.2);
		cursor: pointer;
	}
`;

const StShowImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const STdropBoxTitle = styled.div`
	font-family: 'LeferiPoint-SpecialItalicA';
	font-size: 35px;
	font-weight: 900;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
`;

const StImageUl = styled.div`
	width: 500px;
	height: 500px;
	background-color: rgba(255, 255, 255, 0.492);
	border-radius: 15%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
