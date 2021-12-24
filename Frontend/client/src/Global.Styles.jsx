import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 10vw;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  border-radius: 1vw;
  background: ${({ primary }) => (primary ? '#193d66' : '#ac145a')}; ;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 40px' : '10px 26px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '3vh' : '2vh')};
  outline: none;
  border: none;
  cursor: pointer;
`;

