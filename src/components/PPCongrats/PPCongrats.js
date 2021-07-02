import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import parse from "html-react-parser";

import CornerButtons from "./CornerButtons";
import CongratulationsBody from "./CongratulationsBody";

import SlideShow from "./SlideShow";

const PPCongratsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  color: white;
  text-shadow: 0 0 10px black;

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
      <SlideShow />
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
