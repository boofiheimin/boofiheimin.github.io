import { Container, Header, Divider } from "semantic-ui-react";

const CongratulationsCard = () => {
  return (
    <Container className={"congrats_card"} fluid>
      <Header textAlign="center">
        <Header.Content as="h1" className={"congrats_card_message"}>
          Congrats On 1M
        </Header.Content>
        <Divider />
        <Header.Subheader>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Header.Subheader>
      </Header>
    </Container>
  );
};

export default CongratulationsCard;
