import { Container, Header, Icon, Button } from "semantic-ui-react";

const CongratulationsCard = () => {
  return (
    <div className={"congrats_card"}>
      <div className={"congrats_card_message_container"}>
        <Header textAlign="left">
          <Header.Content as="h1" className={"congrats_card_message"}>
            Congrats On 1M !
          </Header.Content>
          <Header.Subheader className={"congrats_card_submessage"}>
            An Oshio Family community project
          </Header.Subheader>
        </Header>
        <div className={"congrats_buttons"}>
          <Button
            color={"youtube"}
            onClick={() => {
              window.location.href =
                "https://www.youtube.com/channel/UCZlDXzGoo7d44bwdNObFacg?sub_confirmation=1";
            }}
          >
            <Icon name="youtube" />
            Subscribe to Kanata
          </Button>
          <Button
            color={"violet"}
            onClick={() => {
              window.location.href = "https://discord.gg/ppt";
            }}
          >
            <Icon name="discord" />
            Join the Fan Server
          </Button>
        </div>
        <div className={"congrats_description"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className={"congrats_card_more"}>
        <Icon name="angle double down" />
        Scroll for more
      </div>
    </div>
  );
};

export default CongratulationsCard;
