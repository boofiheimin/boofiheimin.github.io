import styled from "styled-components";
import Masonry from "react-masonry-component";

import MessageCard from "./MessageItems/MessageCard";

import backgroundImg from "../../assets/images/pptile.webp";
import Heimin from "../../assets/images/Heimin.png";
import Messages from "../../assets/images/Messages.png";

const FlexibleContainer = styled.div`
  background-image: url(${backgroundImg});
  background-attachment: fixed;
  background-size: 150px;
  background-repeat: repeat;
  min-height: 100vh;
  width: 100vw;
`;

const MessageTopHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0 0 10px deepskyblue;
  width: 620px;
  margin-top: 34px !important;
  img {
    object-fit: cover;

    :not(:last-child) {
      width: 215px;
      margin-right: 20px;
    }
    :last-child {
      width: 300px;
    }
  }
`;

const PPMessageBoardRenderer = ({ data }) => {
  return (
    <FlexibleContainer>
      <Masonry
        options={{
          gutter: 40,
          columnWidth: 300,
          fitWidth: true,
          transitionDuration: 0,
        }}
        style={{ margin: "0 auto" }}
      >
        <MessageTopHeader>
          <img src={Heimin} alt="Heimin" />
          <img src={Messages} alt="Messages" />
        </MessageTopHeader>
        {data.map(({ message, user, image }, i) => (
          <MessageCard
            message={message}
            user={user}
            image={image}
            index={i}
            key={i}
          />
        ))}
      </Masonry>
    </FlexibleContainer>
  );
};

export default PPMessageBoardRenderer;
