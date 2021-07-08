import styled from "styled-components";

import parse from "html-react-parser";

import group3 from "../../../assets/images/Group 3.webp";
import group4 from "../../../assets/images/Group 4_2.webp";
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
      width: 16rem;
      object-position: 0% 118%;
      height: 16rem;
    }
    :last-child {
      width: 23rem;
      object-position: 0% 102%;
      height: 12rem;
    }
    @media only screen and (max-width: 680px) {
      :not(:last-child) {
        width: 10rem;
        object-position: 0% 126%;
        height: 11rem;
      }
      :last-child {
        width: 14rem;
        height: 8rem;
      }
    }
    @media only screen and (max-width: 425px) {
      :not(:last-child) {
        width: 8rem;
        object-position: 0% 150%;
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
  width: 300px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  filter: drop-shadow(2px 2px 1px darkgray);
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
        <img src={group4} alt="Heimin" />
        <img src={group3} alt="message" />
      </MessageTopHeader>
      <MessageSubHeader>
        {parse(t("messageSubHeader").replace("XXX", total))}
      </MessageSubHeader>
    </MessageBoardHeaderContainer>
  );
};

export default MessageBoardHeader;
