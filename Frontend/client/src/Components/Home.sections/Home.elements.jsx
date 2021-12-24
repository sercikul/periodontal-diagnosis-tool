import styled from "styled-components";

export const HomeSec = styled.div`
  align-items: center;
`;

export const  InfoRow = styled.div`
  display: flex;
  margin: 0 -15px, -15px, -15px;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;

  @media screen and (max-width: 400px) {
    max-width: 80%;
    flex-basis: 80%;
    display: flex;
    justify-content: center;
  }
  
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  margin-right: 15px;
  padding-left: 15px;
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 50%;
  
  
@media screen and (max-width: 800px) {
  max-width: 100%;
  flex-basis: 100%;
  display: flex;
  justify-content: center;
} 
`;

export const TextWrapper = styled.div`
  max-width: 60vw;
  justify-content: flex-start;
  
  
  @media screen and (max-width: 800px) {
    padding-top: 2vh;
    align-items: center;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 28vw;
  
`;

export const TopLine = styled.div`
    color: #193d66;
    font-size: 3vh;
    line-height: 3vh;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 20px;
    font-size: 6vh;
    line-height: 1.1;
    color: #ac145a;

  @media screen and (max-width: 800px) {
    padding-top: 2vh;
    align-items: center;
    font-size: 5vh;
  }
\` ;
`;

export const Subtitle = styled.p`
    max-width: 45vw;
    margin-bottom: 30px;
    font-size: 3vh;
    line-height: 3.1vh;
    color: #193d66;
  
`;

export const Img = styled.img`
  padding: 1vh;
  border: 0;
  max-width: 100%;
  vertical-align: center;
  flex-wrap: nowrap;
  max-height: 50vh;
`;