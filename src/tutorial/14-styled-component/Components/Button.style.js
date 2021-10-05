import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
    opacity:0;
  }

  to {
    transform: rotate(360deg);
    opacity:1;

  }
`;
export const StyledButtonLabel = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  padding: 0;
  margin: 0;
  color: ${({ work }) => work && "red"};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const StyledButton = styled.button`
  width: 200px;
  padding: 0.5rem 1rem;
  margin: 1rem;
  background-color: ${({ bg }) => (bg ? bg : "#655")};
  outline: none;
  font-weight: 700;
  box-shadow: none;
  border: none;
  color: ${({ color }) => color || "white"};
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 3px 4px 5px 0px #0000006e;
    transition: box-shadow 0.3s ease-in-out;
    & p {
      color: blue;
    }
    & ${StyledButtonLabel}.work {
      color: #fff;
    }
  }
  ${({ mainButton }) =>
    mainButton &&
    css`
      opacity: 0;
      padding: 1rem 2rem;
      font-size: 1.5rem;
      background-color: blanchedalmond;
      color: red;
      animation: ${rotate} 3s linear infinite;
    `}
`;

export const Link = styled(StyledButton)`
  background-color: beige;
  color: ${(props) => props.theme.colors.main};
`;

export const AwesomeLink = styled.a.attrs(() => ({
  target: "_blank",
}))`
  background-color: beige;
`;
