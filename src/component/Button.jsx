// Button 컴포넌트
// 버튼에 들어갈 내용을 props로 받아 스타일을 쉽게 변경 가능

import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props){
    // 사용자 입력으로 title과 onClick 함수를 입력 받음
    const {title, onClick} = props;

    return <StyledButton onClick={onClick}> {title || "button"} </StyledButton>
}

export default Button;