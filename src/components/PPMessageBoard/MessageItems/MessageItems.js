import Masonry from "react-masonry-component";

import MessageCard from "./MessageCard";

const MessageItems = ({ data }) => {
  return (
    <Masonry
      options={{
        gutter: 40,
        columnWidth: 300,
        fitWidth: true,
        transitionDuration: 0,
      }}
      style={{ margin: "0 auto" }}
    >
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
  );
};

export default MessageItems;
