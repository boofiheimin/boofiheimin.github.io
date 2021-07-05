//To use this file put it in Main and render this instead. I could do this cleaner but ech.
// Pass in fullData
import styled from "styled-components";
import Masonry from "react-masonry-component";

import MessageCard from "./MessageItems/MessageCard";

import backgroundImg from "../../assets/images/pptile.webp";
import group3 from "../../assets/images/Group 3.webp";
import group4 from "../../assets/images/Group 4_2.png";

const FlexibleContainer = styled.div`
  background-image: url(${backgroundImg});
  background-attachment: fixed;
  background-size: 150px;
  background-repeat: repeat;
  height: 100vh;
  width: 100vw;
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
          <img src={group4} alt="Heimin" />
          <img src={group3} alt="message" />
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
