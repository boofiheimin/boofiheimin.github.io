import styled from "styled-components";
import ModalImage from "react-modal-image";

const modSeq = (a, b) => {
  return (a % b) + 1;
};

const CardContainer = styled.div`
  background-color: white;
`;

const MessageItemContainer = styled.div`
  width: 300px;
  box-shadow: 3px 3px 6px darkgrey;
  margin-top: 34px !important;
  margin-bottom: 5px !important;
  .message_card_image {
    object-fit: cover;
    flex-shrink: 0;
    width: 300px;
    padding: 12px;
  }
`;

const StickerImage = styled.img`
  position: absolute;
  z-index: 100;
  top: -26px;
  width: 40px;
  right: -18px;
  filter: drop-shadow(2px 2px 1px darkgray);
`;

const RMessageCard = styled.div`
  position: relative !important;
`;

const Message = styled.div`
  padding: 8px 19px;
  font-size: 1.25rem;
`;

const User = styled.div`
  padding: 8px 19px;
  text-align: right;
  font-style: italic;
`;

const MessageCard = ({ user, message, image, index }) => {
  return (
    <MessageItemContainer>
      <RMessageCard>
        <StickerImage
          alt="icon"
          className={"message_card_icon"}
          src={`/icon/pp_${modSeq(index, 10)}.png`}
        />
        <CardContainer>
          {image && (
            <ModalImage
              className="message_card_image"
              small={image}
              large={image}
              hideDownload
              hideZoom
            />
          )}
          <Message>{message}</Message>
          <User>{user}</User>
        </CardContainer>
      </RMessageCard>
    </MessageItemContainer>
  );
};

export default MessageCard;
