import styled from "styled-components";

export const FadedLink = styled.a`
  align-self: center;
  padding-top: 5px;
  font-size: 11px;
  color: black;
`;

export const RadiographyContainer = styled.div`
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
        display: flex;
        justify-content: center;
    }
`;

export const ToothBoneLossContainer = styled.div`
    //Box Formatting
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 600px) {
        max-width: 30em;
        display: flex;
        justify-content: center;
    }
`;
