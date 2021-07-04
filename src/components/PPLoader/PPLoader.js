import styled from "styled-components";
import ShurikenSpinner from "../ShurikenSpinner";

const PPLoaderWrapper = styled.div`
  position: absolute;
  z-index: ${({ show }) => {
    return !show ? 5 : 100;
  }};
  width: 100vw;
  overflow: hidden !important;
`;

const PPLoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
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

const PPLoader = ({ show, transitionEnd, onTransitionEnd }) => {
  return (
    <PPLoaderWrapper show={show} transitionEnd={transitionEnd}>
      <PPLoaderContainer show={show} onTransitionEnd={onTransitionEnd}>
        <ShurikenSpinner />
      </PPLoaderContainer>
    </PPLoaderWrapper>
  );
};

export default PPLoader;
