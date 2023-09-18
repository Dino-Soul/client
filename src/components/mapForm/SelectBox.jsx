import React, { useState } from "react";
import styled from "styled-components";
import { gangwonLocation } from "../../utils/gangwonLocation";

const OPTIONS = [
  "강릉시",
  "고성군",
  "동해시",
  "삼척시",
  "속초시",
  "양구군",
  "양양군",
  "영월군",
  "원주시",
  "인제군",
  "정선군",
  "철원군",
  "춘천시",
  "태백시",
  "평창군",
  "홍천군",
  "화천군",
  "횡성군",
];

const SelectBox = ({ onOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState(""); // 선택된 옵션을 관리하는 상태

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue); // 선택된 값을 상태에 업데이트
    onOptionChange(selectedValue); // 선택된 값을 부모 컴포넌트로 전달
  };

  return (
    <StSelect onChange={handleChange} value={selectedOption}>
      <option value="" disabled>
        위치 선택
      </option>
      {OPTIONS.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StSelect>
  );
};

export default SelectBox;

const StSelect = styled.select`
  position: absolute;
  overflow: hidden;
  top: 10px;
  left: 320px;
  width: 125px;
  height: 52px;
  z-index: 10;
  border: 1px solid grey;
  border-radius: 5px;
`;
