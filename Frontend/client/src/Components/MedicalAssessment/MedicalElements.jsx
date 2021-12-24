import styled from "styled-components";

export const ButtonSeparator = styled.div`
  margin-right: 10px;

  @media screen and (max-width: 600px) {
    justify-content: center;
    margin-bottom: 100px;
    margin-right: 0px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;

  @media screen and (max-width: 600px) {
    max-width: 21em;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export const IndicatorText = styled.p`
    line-height: 10px;
`;

export const OnlyImplantMarginSeparator = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const MarginSeparator = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export const Separater = styled.div`
  margin-bottom: 10px;
`;

export const FormLabel = styled.label`
    color: #193d66;
    margin-top: 0.8em;
    align-self: flex-start;
  @media screen and (max-width: 800px) {
    margin-left: 10%;
  }
`;
export const FormLabelReport = styled.label`
    color: #193d66;
    margin-top: 1.2rem;
    align-self: flex-start;
    font-size: 16px;
`;
export const InputForm = styled.form`
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
`;

export const Header = styled.header`
  line-height: 16px;
  font-weight: 700;  
  font-size: 2em;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    color: #193d66;
  padding-bottom: 20px;
  align-items: center;
`;


export const ReportHeader = styled.header`
  line-height: 16px;
  font-weight: 700;  
  font-size: 1.4em;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    color: #193d66;
  padding-bottom: 20px;
  align-items: center;
`;

export const ReportSubHeader = styled.header`
  line-height: 10px;
  font-weight: 700;  
  font-size: 1.2em;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    color: #193d66;
  padding-bottom: 20px;
  align-items: center;
`;


export const PatientContainer = styled.div`
  //Box Formatting
  width: 750px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;

  border: 2px solid #193d66;
  border-radius: 50px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 20px #758aa3;

  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
`;