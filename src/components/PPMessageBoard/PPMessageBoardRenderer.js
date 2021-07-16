import styled from "styled-components";
import Masonry from "react-masonry-component";

import MessageCard from "./MessageItems/MessageCard";

import pattern1 from "../../assets/images/pptile.webp";
import pattern2 from "../../assets/images/pattern2.png";
import pattern3 from "../../assets/images/pattern3.png";
import pattern4 from "../../assets/images/pattern4.png";
import pattern5 from "../../assets/images/pattern5.png";

import Heimin from "../../assets/images/Heimin.png";
import Messages from "../../assets/images/Messages.png";

const messageRenderer = (type) => {
  switch (type) {
    case 1:
      return pattern1;
    case 2:
      return pattern2;
    case 3:
      return pattern3;
    case 4:
      return pattern4;
    case 5:
      return pattern5;
    default:
      return pattern1;
  }
};

const FlexibleContainer = styled.div`
  background-image: url(${({ type }) => {
    console.log(type);
    return messageRenderer(type);
  }});
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

const PPMessageBoardRenderer = ({ data, type }) => {
  return (
    <FlexibleContainer type={type}>
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
