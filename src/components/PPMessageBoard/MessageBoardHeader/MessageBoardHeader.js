import styled from "styled-components";
import { Image } from "semantic-ui-react";

import parse from "html-react-parser";

import kaigai from "../../../assets/images/Kaigai.png";
import niki from "../../../assets/images/Niki.png";

import group1 from "../../../assets/images/Group 1.png";
import group2 from "../../../assets/images/Group 2.png";
import group3 from "../../../assets/images/Group 3.png";

const MessageBoardHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const MessageTopHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  line-height: 1em;
  text-shadow: 0 0 10px deepskyblue;
  color: white;
  font-weight: bold;
  img {
    height: 6rem;
    margin-right: 1rem;
    object-fit: cover;

    :not(:last-child) {
      width: 6rem;
      object-position: 0% 100%;
    }
    :last-child {
      width: 18rem;
      object-position: 0% 90%;
    }
  }
`;

const MessageSubHeader = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  font-style: italic;
  width: 40%;
`;

const MessageBoardHeader = ({ t }) => {
  return (
    <MessageBoardHeaderContainer>
      <MessageTopHeader>
        <img src={group1} />
        <img src={group2} />
        <img src={group3} />
        {/* <span>{parse(t("messageHeader"))}</span> */}
      </MessageTopHeader>
      <MessageSubHeader>{parse(t("messageSubHeader"))}</MessageSubHeader>
    </MessageBoardHeaderContainer>
  );
};

export default MessageBoardHeader;
