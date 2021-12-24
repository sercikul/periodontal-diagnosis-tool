import styled from "styled-components";

export const PerioContainer = styled.div`
  padding: 20px 10vw 20px 10vm;
  align-items: center;
  justify-content: center;

  //Box Formatting
  width: 95%;
  min-width: 1000px;
  margin: 20px auto 20px auto;

  border: 2px solid #193d66;
  border-radius: 50px;

  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px #758aa3;

  @media screen and (max-width: 1000px) {
    max-width: 21em;
    display: flex;
    justify-content: center;
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
  margin-top: 20px;
  margin-bottom: -25px;
`;

export const SubHeader = styled.header`
  line-height: 8px;
  font-weight: 300;  
  font-size: 0.9em;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    color: #193d66;
  padding-bottom: 10px;
  align-items: center;
  margin-top: 23px;
  margin-bottom: -30px;
`;


export const HeaderImplant = styled.header`
  line-height: 20%;
  font-weight: bold;  
  font-size: 2em;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    color: #fff;
  padding-bottom: 3%;
  align-items: center;
  margin-top: 15%;
  margin-bottom: 2%;
`;

export const SubHeaderImplant = styled.header`
  line-height: 10%; 
  font-size: 1.5em;
  font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  align-items: center;
  margin-top: -2%;
  position: absolute;
  margin-bottom: 5%;
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

export const ButtonsDiagnosisContainer = styled.div`
    left: 23%;
    border: none;
    position: absolute;
    vertical-align: center;

    align-items: center;

    @media screen and (max-width: 600px) {
        max-width: 30em;
    }
`;


export const Container = styled.div`
  align-items: center;
  justify-content: center;
`;

export const ButtonBlue = styled.button`
  border-radius: 1vw;
  background: #193d66;
  white-space: nowrap;
  padding: 12px 64px;
  color: #fff;
  font-size: 1.2rem;
  outline: none;
  border: 2px solid #fff;
  cursor: pointer;
  z-index: 10000;
  &:hover {
    background-color: #4972a1;
    transition: 200ms ease-in;
}
`;

export const ButtonPink = styled.button`
  border-radius: 1vw;
  background: #af1058;
  white-space: nowrap;
  padding: 12px 64px;
  color: #fff;
  font-size: 1.2rem;
  outline: none;
  border: 2px solid #fff;
  cursor: pointer;
  z-index: 10000;
  &:hover {
    background-color: #a1607d;
    transition: 200ms ease-in;
}
`;



