// TextInput 컴포넌트

import React from "react";
import styled from "styled-components";

// height이 입력 값으로 들어왔을 경우에만 높이 값을 설정 
const StyledTextarea = styled.textarea`
    width: calc(100%-32px);
    ${(props) =>
        props.height &&
        `
            height: ${props.height}px;
        `
    }
    padding:16px;
    font-size: 16px;
    line-height: 20px;
`;

function TextInput(props){
    const {height, value, onChange} = props;

    return <StyledTextarea height={height} value={value} onChange={onChange}></StyledTextarea>;
}

export default TextInput;