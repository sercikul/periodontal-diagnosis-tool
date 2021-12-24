import styled from "styled-components";

export const FadedLink = styled.a`
  align-self: center;
  padding-top: 5px;
  font-size: 11px;
  color: rgba(104, 104, 109, 0.8);
  font-weight: 500;
`;

export const StyledInput = styled.textarea`
    width: 100%;
    font-size: 16px;
    height: 100px;
    &:focus {
        outline: none;
        box-shadow: 0 0 20px #bac4d1;}
    resize: none;
    border-color: #193d66;
    background: #e8ebef;
    border-radius: 3px;
`;

export const ButtonsMarginSeparator = styled.div`
  margin-left: 70px;
  margin-right: 50px;
`;

export const DiagnosisRow = styled.div`
  display: flex;
  margin: 0 -5px, -5px, -5px;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;

  @media screen and (max-width: 600px) {
    max-width: 21em;
    display: flex;
    justify-content: center;
    margin: 0 -5px, -5px, -5px;
  }
`;

export const BoldFormLabel = styled.label`
    font-weight: bold;
    color: #193d66;
    margin-top: 0.8em;
    align-self: flex-start;
`;

export const BoldFormLabelReport = styled.label`
    font-weight: bold;
    color: #193d66;
    margin-top: 1.8rem;
    margin-right: 1.5rem;
    align-self: center;
    font-size: 16px;
`;

export const DiagnosisContainer = styled.div`
    //Box Formatting
    width: 750px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;

    border: 2px solid #193d66;
    border-radius: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 20px #758aa3;

    padding: 50px;
    justify-content: center;

    @media screen and (max-width: 800px) {
        max-width: 80%;
        display: flex;
        justify-content: center;
    }
`;

export const ImplantsDiagnosisContainer = styled.div`
    //Box Formatting
    width: 750px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;

    border: none;
    padding: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 800px) {
        max-width: 30em;
        display: flex;
        justify-content: center;
    }
`;

export const ButtonsDiagnosisContainer = styled.div`
    //Box Formatting
    width: 750px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;

    border: none;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 800px) {
        max-width: 100%;
    }
`;