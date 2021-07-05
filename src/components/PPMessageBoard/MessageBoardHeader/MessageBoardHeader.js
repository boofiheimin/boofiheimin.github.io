import styled from "styled-components";

import parse from "html-react-parser";

import group1 from "../../../assets/images/Group 1.webp";
import group2 from "../../../assets/images/Group 2.webp";
import group3 from "../../../assets/images/Group 3.webp";
import cloudtile from "../../../assets/images/cloudtile.webp";

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
    object-fit: cover;

    :not(:last-child) {
      width: 10rem;
      margin-right: 1rem;
      object-position: 0% 100%;
      height: 16rem;
    }
    :last-child {
      width: 23rem;
      object-position: 0% 102%;
      height: 12rem;
    }
    @media only screen and (max-width: 680px) {
      :not(:last-child) {
        width: 7rem;
        margin-right: 0rem;
        height: 11rem;
      }
      :last-child {
        width: 14rem;
        height: 8rem;
      }
    }
    @media only screen and (max-width: 425px) {
      :not(:last-child) {
        width: 5rem;
        margin-right: 0rem;
      }
      :last-child {
        width: 11rem;
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

const MessageBoardHeader = ({ t, total }) => {
  return (
    <MessageBoardHeaderContainer>
      <CloudTile />
      <MessageTopHeader>
        <img src={group1} alt="oversea" />
        <img src={group2} alt="brothers" />
        <img src={group3} alt="message" />
      </MessageTopHeader>
      <MessageSubHeader>
        {parse(t("messageSubHeader").replace("XXX", total))}
      </MessageSubHeader>
    </MessageBoardHeaderContainer>
  );
};

export default MessageBoardHeader;
