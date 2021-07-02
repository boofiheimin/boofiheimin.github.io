import styled from "styled-components";
import { Container } from "semantic-ui-react";

import parse from "html-react-parser";

const FooterContainer = styled(Container)`
  padding: 3rem;
`;

const Footer = ({ t }) => {
  return (
    <FooterContainer textAlign="center">{parse(t("footer"))}</FooterContainer>
  );
};

export default Footer;
