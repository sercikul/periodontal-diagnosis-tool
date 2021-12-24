import styled from "styled-components";

export const FormInput = styled.input`
  padding: 15px;
  width: 325px;
  height: 24px;
  font-size: 16px;
  background: #e8ebef;
  border-radius: 3px;
  border-color: #193d66;

  &:focus {
    outline: none;
    box-shadow: 0 0 20px #bac4d1;}

  @media screen and (max-width: 800px) {
    max-width: 80%;
  }
`;