import styled from "styled-components";
import { Icon } from "semantic-ui-react";

import PPButton from "../PPButton";

const BackToTopButton = styled(PPButton)`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 500;
  box-shadow: 0px 0px 12px 2px grey;
  width: 50px;
  height: 50px;
  padding: 10px 16px;
  font-size: 20px;
  line-height: 1.33;
  border-radius: 25px;
`;

const PPBackToTop = ({ returnToTop, bttRef }) => {
  return (
    <BackToTopButton
      onClick={returnToTop}
      circular={true}
      color="white"
      backgroundColor="lightgrey"
      ref={bttRef}
    >
      <Icon name="chevron up" fitted />
    </BackToTopButton>
  );
};

export default PPBackToTop;
