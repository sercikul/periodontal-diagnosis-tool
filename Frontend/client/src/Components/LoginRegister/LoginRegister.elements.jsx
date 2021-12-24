import styled from "styled-components";

export const LoginRegisterContainer = styled.div`
  //Box Formatting
  width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 50px;
  padding-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 0 15px #758aa3;
  margin: 20px auto;
  position: relative;
  overflow: hidden;
  justify-content: center;

  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
`;

export const LoginRegisterTop = styled.div`
  width: 400px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 43px;
  padding-left: 43px;
`;

export const TopSectionLoginRegister = styled.div`
  width: 190%;
  height: 550px;
  border-radius: 50%;
  position: absolute;
  background: #af1058;
  flex-direction: column;
  top: -380px;
  left: -200px;
`;

export const LoginRegisterHeader = styled.header`
  line-height: 36px;
  word-spacing: 100vw;
  font-weight: 700;
  font-size: 2em;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: #fff;
  z-index: 1;
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 10px;
  > .error {
    border-color: red;
  }
  > .error_message {
    color: red;
  }
`;

export const FormInput = styled.input`
  margin: 3px;
  padding: 7px;
  width: 280px;
  font-size: 16px;
  background: #e8ebef;
  border-radius: 10px;
  border-color: #fff;
  //box-shadow: 0 0 0 #758aa3;
`;

export const LoginSignUpButton = styled.button`
  margin-top: 20px;
  border-radius: 10px;
  width: 60%;
  background: #ac145a;
  box-shadow: 0 0 5px #758aa3;
  padding: 5px;
  color: #fff;
  font-size: 25px;
  font-weight: 350;
  outline: none;
  border: none;
  cursor: pointer;
  position: inherit;
  :disabled {
    opacity: 0.5;
    cursor: not-allowed !important;
`;

export const FadedLink = styled.a`
  align-self: center;
  padding-top: 5px;
  font-size: 11px;
  color: rgba(104, 104, 109, 0.8);
  font-weight: 500;
`;

export const BoldLink = styled.a`
  padding-top: 2px;
  font-size: 12px;
  color: #193d66;
  font-weight: 500;
  cursor: pointer;
  align-self: center;
`;
