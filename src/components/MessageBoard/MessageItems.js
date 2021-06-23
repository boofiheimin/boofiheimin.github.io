import { Divider, Image, Card } from "semantic-ui-react";

import Masonry from "react-masonry-css";

const MessageItems = ({ data, size }) => {
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.map(({ message, user, image }, i) => (
        <Card key={i} centered data-aos="fade-up">
          {image && <Image src={image} wrapped ui={false} />}
          <Card.Content>
            <Card.Description>{message}</Card.Description>
            <Divider />
            <Card.Header>{user}</Card.Header>
          </Card.Content>
        </Card>
      ))}
    </Masonry>
  );
};

export default MessageItems;
