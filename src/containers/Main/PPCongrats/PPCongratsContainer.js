import { useEffect, useRef } from "react";

import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";

import PPCongrats from "../../../components/PPCongrats";

const PPCongratsContainer = ({ t }) => {
  const congratRef = useRef(null);

  useEffect(() => {
    if (isMobile) {
      congratRef.current.style.backgroundAttachment = "scroll";
    }
  });

  return <PPCongrats t={t} congratRef={congratRef} />;
};

PPCongratsContainer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default PPCongratsContainer;
