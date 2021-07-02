import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import parse from "html-react-parser";

import CornerButtons from "./CornerButtons";
import CongratulationsBody from "./CongratulationsBody";

import backgroundImg from "../../assets/images/hikawa.png";

const PPCongratsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background-color: deepskyblue;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  text-shadow: 0 0 10px black;
  animation: slideBg 65s infinite;
  animation-timing-function: ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 1) 83%
    );
    opacity: 0.6;
  }

  .congrats_card_more {
    color: white;
    position: absolute;
    font-size: 2.5vh;
    bottom: 1vh;
    text-align: center;
    width: 100%;
  }
`;

const PPCongrats = ({
  t,
  congratRef,
  modalShow,
  modalOnClick,
  handleLanguageChange,
  currentLanguage,
}) => {
  return (
    <PPCongratsContainer ref={congratRef}>
      <CornerButtons
        t={t}
        modalShow={modalShow}
        modalOnClick={modalOnClick}
        handleLanguageChange={handleLanguageChange}
        currentLanguage={currentLanguage}
      />
      <CongratulationsBody t={t} />
      <div className={"congrats_card_more"}>
        <Icon name="angle double down" />
        {parse(t("scrollForMore"))}
      </div>
    </PPCongratsContainer>
  );
};

PPCongrats.propTypes = {
  t: PropTypes.func.isRequired,
  congratRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  modalShow: PropTypes.bool.isRequired,
  modalOnClick: PropTypes.func.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
  currentLanguage: PropTypes.string.isRequired,
};

export default PPCongrats;
