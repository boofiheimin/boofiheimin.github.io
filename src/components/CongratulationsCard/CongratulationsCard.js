import { Container, Header, Divider } from "semantic-ui-react";

const CongratulationsCard = () => {
  return (
    <Container className={"congrats_card"} fluid>
      <Header textAlign="center">
        <Header.Content as="h1" className={"congrats_card_message"}>
          Congrats On 1M
        </Header.Content>
        <Divider />
        <Header.Subheader>この世のものは弱すぎる</Header.Subheader>
      </Header>
    </Container>
  );
};

export default CongratulationsCard;
