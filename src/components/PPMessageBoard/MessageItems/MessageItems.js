import styled from "styled-components";
import { Divider, Image, Card } from "semantic-ui-react";

import Masonry from "react-masonry-css";

const MessageItemContainer = styled.div`
  .message_card {
    position: relative !important;
    margin-top: 15px !important;
  }
  .message_card_icon {
    position: absolute !important;
    z-index: 100;
    top: -14px;
    width: 40px;
    right: -11px;
    filter: drop-shadow(2px 2px 1px darkgray);
  }
  @media only screen and (max-width: 425px) {
    padding: 0 1rem;
  }
`;

const modSeq = (a, b) => {
  return (a % b) + 1;
};
const breakpoints = {
  default: 3,
  1200: 2,
  700: 1,
};

const MessageItems = ({ data }) => {
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.map(({ message, user, image }, i) => (
        <MessageItemContainer data-aos="fade-up" key={i}>
          <Card className={"message_card"} centered>
            <img
              alt="icon"
              className={"message_card_icon"}
              src={`/icon/pp_${modSeq(i, 10)}.png`}
            />
            {image && <Image src={image} wrapped ui={false} />}
            <Card.Content>
              <Card.Description>{message}</Card.Description>
              <Divider />
              <Card.Header textAlign="right">{user}</Card.Header>
            </Card.Content>
          </Card>
        </MessageItemContainer>
      ))}
    </Masonry>
  );
};

export default MessageItems;
