import styled from "styled-components";

export const StyledInput = styled.textarea`
    margin-bottom: 1.5em;
    width: 50vw;
    padding: 5px;
    font-size: 16px;
    height: 300px;
    &:focus {
        outline: none;
        box-shadow: 0 0 20px #bac4d1;
    }
    resize: none;
    border-color: #193d66;
    background: #e8ebef;
    border-radius: 3px;
`;

export const FeedbackContainer = styled.div`
  
  //Box Formatting
  width: 55vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding-top: 20px;

  border: 2px solid #193d66;
  border-radius: 50px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 20px #758aa3;

  @media screen and (max-width: 500px) {
    max-width: 21em;
    display: flex;
    justify-content: center;
  }
`;

