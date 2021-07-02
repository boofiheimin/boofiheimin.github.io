import styled from "styled-components";

const PPButton = styled.button`
  background-color: ${({ backgroundColor }) => {
    return backgroundColor;
  }};
  font-weight: bold;
  color: ${({ color }) => {
    return color;
  }};

  border: ${({ bordered }) => {
    return bordered ? "2px solid white" : "none";
  }};

  border-radius: ${({ circular }) => {
    return circular ? "50%" : "0.3rem";
  }};

  line-height: 1em;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ hoverBackgroundColor }) => {
        return hoverBackgroundColor;
      }};
      box-shadow: 0px 15px 25px -5px rgba(darken(dodgerblue, 40%));
      transform: scale(1.03);
    }
  }

  &:active {
    box-shadow: 0px 4px 8px rgba(darken(dodgerblue, 30%));
    transform: scale(0.98);
  }
`;

export default PPButton;
