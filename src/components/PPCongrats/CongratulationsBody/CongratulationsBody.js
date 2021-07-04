import { Header, Icon } from "semantic-ui-react";
import styled from "styled-components";
import parse from "html-react-parser";

import PPButton from "../../PPButton";

import { COLOR } from "../../../constants";

const CongratulationsBodyContainer = styled.div`
  width: 50%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 10;
  padding-left: 7rem;

  .congrats_card_header {
    color: white !important;
    padding: 1rem 0;
    font-size: 5rem;
    font-weight: 900;
  }

  .congrats_card_subheader {
    color: white !important;
    font-size: 2rem !important;
  }

  .congrats_buttons {
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    button {
      font-size: 1.3rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
      padding: 1.1rem 1.4rem;
      width: 19rem;
    }
  }

  .congrats_description {
    font-size: 1.5rem;
    color: white;
    max-height: 25vh;
    overflow-y: auto;
  }

  @media only screen and (max-width: 1100px) {
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 6rem;

    .congrats_card_header {
      font-size: 4rem;
    }
  }
  @media only screen and (max-width: 820px) and (orientation: landscape) {
    padding: 0 2rem;
    .congrats_card_header {
      font-size: 2.75rem;
    }
    .congrats_card_subheader {
      font-size: 1rem !important;
    }
    .congrats_buttons {
      padding: 0.7rem 0;
      button {
        font-size: 1rem;
        padding: 0.7rem 0.7rem;
        margin-right: 0.7rem;
        margin-bottom: 0.7rem;
        width: 15rem;
      }
    }
    .congrats_description {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 425px) {
    padding: 0 2rem;
    .congrats_card_header {
      font-size: 2.75rem;
    }
    .congrats_card_subheader {
      font-size: 1rem !important;
    }
    .congrats_buttons {
      padding: 0.7rem 0;
      button {
        font-size: 1rem;
        padding: 0.7rem 0.7rem;
        margin-right: 0.7rem;
        margin-bottom: 0.7rem;
        width: 15rem;
      }
    }
    .congrats_description {
      font-size: 1rem !important;
    }
  }
`;

const CongratulationsBody = ({ t }) => {
  return (
    <CongratulationsBodyContainer>
      <Header textAlign="left">
        <Header.Content as="h1" className={"congrats_card_header"}>
          {parse(t("congratsHeader"))}
        </Header.Content>
        <Header.Subheader className={"congrats_card_subheader"}>
          {parse(t("congratsSubHeader"))}
        </Header.Subheader>
      </Header>
      <div className={"congrats_buttons"}>
        <PPButton
          backgroundColor={COLOR.youtube}
          hoverBackgroundColor={COLOR.youtubeHovered}
          color="white"
          onClick={() => {
            window
              .open(
                "https://www.youtube.com/channel/UCZlDXzGoo7d44bwdNObFacg?sub_confirmation=1",
                "_blank"
              )
              .focus();
          }}
        >
          <Icon name="youtube" />
          {parse(t("youtubeButton"))}
        </PPButton>
        <PPButton
          backgroundColor={COLOR.discord}
          hoverBackgroundColor={COLOR.discordHovered}
          color="white"
          onClick={() => {
            window.open("https://discord.gg/ppt", "_blank").focus();
          }}
        >
          <Icon name="discord" />
          {parse(t("discordButton"))}
        </PPButton>
      </div>
      <div className={"congrats_description"}>
        {parse(t("congratsDescription"))}
      </div>
    </CongratulationsBodyContainer>
  );
};

export default CongratulationsBody;
