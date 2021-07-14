import styled from "styled-components";

import CreditModal from "./CreditModal";
import PPLingo from "./PPLingo";

const CornerButtonsWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 99;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  img {
    height: 1.3rem;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
`;

const CornerButtons = ({
  t,
  onButtonClick,
  handleLanguageChange,
  currentLanguage,
}) => {
  return (
    <CornerButtonsWrapper>
      <CreditModal t={t} onButtonClick={onButtonClick} />
      <PPLingo
        handleLanguageChange={handleLanguageChange}
        currentLanguage={currentLanguage}
      />
    </CornerButtonsWrapper>
  );
};

export default CornerButtons;
