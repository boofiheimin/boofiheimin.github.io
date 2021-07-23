import { useState } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import PPButton from "../PPButton";

import ppstage_blur from "../../assets/images/ppstage_blur.webp";
import pp_gori from "../../assets/images/pp_gori.png";

import parse from "html-react-parser";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 300px;
  background-image: url(${ppstage_blur});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 40%;
  position: relative;
`;

const FooterQuote = styled.div`
  font-size: 1.5rem;
  font-style: italic;
  color: white;
`;

const FooterCredit = styled.div`
  margin-top: 2rem;
`;

const GithubButton = styled(PPButton)`
  font-size: 1.25rem;
  padding: 1rem 1rem;
`;

const Gori = styled.img`
  position: absolute;
  width: 7rem;
  height: 4rem;
  object-fit: cover;
  object-position: 0% 0%;
  bottom: 0;
  cursor: pointer;
`;

const Footer = ({ t, onGori }) => {
  const [goriCounter, setCounter] = useState(0);

  const onGoriClick = () => {
    if (goriCounter !== 6) {
      setCounter(goriCounter + 1);
    } else {
      onGori();
      setCounter(0);
    }
  };

  return (
    <FooterContainer>
      <FooterQuote>{parse(t("footer"))}</FooterQuote>
      <FooterCredit>
        <GithubButton
          color="white"
          backgroundColor="rgba(0,0,0,0)"
          bordered
          onClick={() => {
            window
              .open(
                "https://github.com/boofiheimin/boofiheimin.github.io",
                "_blank"
              )
              .focus();
          }}
        >
          Made by Buffy
          <Icon name="github" />
        </GithubButton>
      </FooterCredit>
      <Gori src={pp_gori} alt="gori" onClick={onGoriClick} />
    </FooterContainer>
  );
};

export default Footer;
