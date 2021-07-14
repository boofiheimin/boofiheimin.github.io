import styled from "styled-components";

import parse from "html-react-parser";

import PPButton from "../../../PPButton";

const CreditButton = styled(PPButton)`
  font-size: 1.3rem;
  text-shadow: 0 0 10px black;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
`;

const CreditModal = ({ t, onButtonClick }) => {
  return (
    <CreditButton
      backgroundColor={"rgba(0,0,0,0.1)"}
      bordered
      color="white"
      onClick={() => onButtonClick()}
    >
      {parse(t("credit"))}
    </CreditButton>
  );
};

export default CreditModal;
