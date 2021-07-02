import styled from "styled-components";
import ShurikenSpinner from "../ShurikenSpinner";

const PPLoaderWrapper = styled.div`
  position: absolute;
  z-index: ${({ transitionEnd }) => {
    return transitionEnd ? 5 : 100;
  }};
  width: 100%;
`;

const PPLoaderContainer = styled.div`
  width: 100%;
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
    <PPLoaderWrapper transitionEnd={transitionEnd}>
      <PPLoaderContainer show={show} onTransitionEnd={onTransitionEnd}>
        <ShurikenSpinner />
      </PPLoaderContainer>
    </PPLoaderWrapper>
  );
};

export default PPLoader;
