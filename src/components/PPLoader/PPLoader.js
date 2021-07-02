import styled from "styled-components";
import ShurikenSpinner from "../ShurikenSpinner";

const PPLoaderWrapper = styled.div`
  position: absolute;
  z-index: 10000;
  width: 100%;
`;

const PPLoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ show }) => {
    return show ? "visible" : "hidden";
  }};
  opacity: ${({ show }) => {
    return show ? 1 : 0;
  }};
  transition: visibility 0s 1s, opacity 1s linear;
`;

const PPLoader = ({ show }) => {
  return (
    <PPLoaderWrapper>
      <PPLoaderContainer show={show}>
        <ShurikenSpinner />
      </PPLoaderContainer>
    </PPLoaderWrapper>
  );
};

export default PPLoader;
