import { Divider, Image, Card } from "semantic-ui-react";

import Masonry from "react-masonry-css";

const modSeq = (a, b) => {
  return (a % b) + 1;
};

const MessageItems = ({ data, size }) => {
  const breakpoints = {
    default: 3,
    1200: 2,
    700: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.map(({ message, user, image }, i) => (
        <div data-aos="fade-up" key={i}>
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
        </div>
      ))}
    </Masonry>
  );
};

export default MessageItems;
