import styled from "styled-components";

export const StyledTextArea = styled.textarea`
    padding: 15px;
    height: 200px;
    font-size: 16px;
    background: #e8ebef;
    border-radius: 3px;
    border-color: #193d66;
    resize: none;

    &:focus {
        outline: none;
        box-shadow: 0 0 20px #bac4d1;}
`;