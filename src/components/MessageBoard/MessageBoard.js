import { Fragment, useEffect, useState } from "react";
import { Container, Header, Divider } from "semantic-ui-react";

import Tabletop from "tabletop";

import MessageItems from "./MessageItems";

const MessageBoard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Tabletop.init({
      key: "1esS7ps59ZlShumlibcoKAcbJcAK36yqUkvhRzktbpbg",
      simpleSheet: true,
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <Fragment>
      <Container className={"congrats_card"} fluid data-aos="fade-up">
        <Header textAlign="center">
          <Header.Content as="h1" className={"congrats_card_message"}>
            Messages From Oversea Brothers!
          </Header.Content>
          <Divider />
          <Header.Subheader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Header.Subheader>
        </Header>
      </Container>
      <MessageItems data={data} />
    </Fragment>
  );
};

export default MessageBoard;
