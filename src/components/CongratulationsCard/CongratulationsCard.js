/* eslint-disable no-useless-escape */
import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";
import { isMobile } from "react-device-detect";
import parse from "html-react-parser";
import styled from "styled-components";

import PPButton from "../PPButton";
import PPLingo from "../PPLingo";

import CreditModal from "../CreditModal";

import { COLOR } from "../../constants";

const TopButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 99;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  img {
    height: 1.3rem;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
`;

class CongratulationsCard extends Component {
  congratRef = React.createRef();

  componentDidMount = () => {
    if (isMobile) {
      const DOMNode = this.congratRef.current;
      DOMNode.style.backgroundAttachment = "scroll";
    }
  };

  render = () => {
    const { t } = this.props;
    return (
      <div className={"congrats_card"} ref={this.congratRef}>
        <TopButton>
          <CreditModal t={t} />
          <PPLingo />
        </TopButton>
        <div className={"congrats_card_message_container"}>
          <Header textAlign="left">
            <Header.Content as="h1" className={"congrats_card_message"}>
              {parse(t("congratsHeader"))}
            </Header.Content>
            <Header.Subheader className={"congrats_card_submessage"}>
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
        </div>
        <div className={"congrats_card_more"}>
          <Icon name="angle double down" />
          {parse(t("scrollForMore"))}
        </div>
      </div>
    );
  };
}

export default CongratulationsCard;
