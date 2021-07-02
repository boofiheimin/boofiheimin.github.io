import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";

import PPCongrats from "../../../components/PPCongrats";
import i18n, { currentLanguage } from "../../../i18n";

const PPCongratsContainer = ({ t }) => {
  const congratRef = useRef(null);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (isMobile) {
      congratRef.current.style.backgroundAttachment = "scroll";
    }
  });

  const modalOnClick = (v = false) => {
    setModalShow(v);
  };

  const handleLanguageChange = (e, { value }) => {
    i18n.changeLanguage(value);
  };

  return (
    <PPCongrats
      t={t}
      congratRef={congratRef}
      modalShow={modalShow}
      modalOnClick={modalOnClick}
      handleLanguageChange={handleLanguageChange}
      currentLanguage={currentLanguage()}
    />
  );
};

PPCongratsContainer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default PPCongratsContainer;
