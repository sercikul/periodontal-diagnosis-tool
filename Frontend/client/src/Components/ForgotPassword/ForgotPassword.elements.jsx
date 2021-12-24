import styled from "styled-components";

export const PopupBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(98, 97, 97, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ForgotPasswordWindow = styled.div`
    display: flex;
    width: 80vw;
    height: 50vh;
    background-color: #ffff;
    box-shadow: 0 5px 16px rgba(71,69,69,0.2);
    z-index: 2;
    border-radius: 10px;
    margin-top: -20vh;  
`;

export const MainFieldsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  flex:2;
`;

export const ForgotPasswordHeader = styled.h1`
  line-height: 36px;
  font-weight: 700;  
  font-size: 35px;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  color: #af1058;
  padding-bottom: 2px;
`;

export const ForgotPasswordText = styled.div`
  line-height: 24px;
  font-weight: 250;  
  font-size: 1em;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  text-align: center;
  color: #193d66;
  padding: 5px;
  
`;

export const FormInput = styled.input`
  margin: 10px;
  padding: 7px;
  width: 40vw;
  height: 50px;
  font-size: 16px;
  background: #e8ebef;
  border-radius: 10px;
  border-color: #fff;
  box-shadow: 0 0 0 #758aa3;
`;

export const PasswordResetButton = styled.button`
  border-radius: 10px;
  width: 30%;
  background: #ac145a;
  box-shadow: 0 0 5px #758aa3;
  padding: 5px;
  color: #fff;
  font-size:25px;
  font-weight: 350;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

export const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    > .error {border-color: red;}
    > .error_message{color: red;}
`;