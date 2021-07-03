import styled from "styled-components";

import parse from "html-react-parser";

import group1 from "../../../assets/images/Group 1.png";
import group2 from "../../../assets/images/Group 2.png";
import group3 from "../../../assets/images/Group 3.png";
import cloudtile from "../../../assets/images/cloudtile.png";

const MessageBoardHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  position: relative;
`;

const MessageTopHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0 0 10px deepskyblue;
  img {
    height: 10rem;
    object-fit: cover;

    :not(:last-child) {
      width: 6rem;
      margin-right: 1rem;
      object-position: 0% 100%;
    }
    :last-child {
      width: 18rem;
      object-position: 0% 102%;
    }
    @media only screen and (max-width: 425px) {
      :not(:last-child) {
        width: 5rem;
        margin-right: 0rem;
      }
      :last-child {
        width: 15rem;
      }
    }
    @media only screen and (max-width: 350px) {
      :not(:last-child) {
        width: 4rem;
        margin-right: 0rem;
      }
      :last-child {
        width: 12rem;
      }
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

const CloudTile = styled.div`
  position: absolute;
  height: 3rem;
  width: 100%;
  top: 0;
  background-image: url(${cloudtile});
  background-size: 15rem 3rem;
  filter: drop-shadow(0px 3px 2px darkgray);
  z-index: 1;
`;

const MessageBoardHeader = ({ t }) => {
  return (
    <MessageBoardHeaderContainer>
      <CloudTile />
      <MessageTopHeader>
        <img src={group1} alt="oversea" />
        <img src={group2} alt="brothers" />
        <img src={group3} alt="message" />
        {/* <span>{parse(t("messageHeader"))}</span> */}
      </MessageTopHeader>
      <MessageSubHeader>{parse(t("messageSubHeader"))}</MessageSubHeader>
    </MessageBoardHeaderContainer>
  );
};

export default MessageBoardHeader;
