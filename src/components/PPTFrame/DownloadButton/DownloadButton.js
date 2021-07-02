import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { Image } from "semantic-ui-react";
import parse from "html-react-parser";

import PPButton from "../../PPButton";

import { COLOR } from "../../../constants";

class DownloadButton extends Component {
  shurikenRef = React.createRef();

  currentRef = null;

  componentDidMount = () => {
    this.currentRef = this.shurikenRef.current;
  };

  spin = () => {
    if (isMobile) {
      this.currentRef.classList.remove("spinning_shuriken");
      void this.currentRef.offsetWidth;
      this.currentRef.classList.add("spinning_shuriken");
    }
  };

  onClick = () => {
    this.spin();
  };

  render = () => {
    const { t } = this.props;
    return (
      <div className="download_button_container">
        <PPButton
          className="download_button"
          backgroundColor={COLOR.powerPoint}
          hoverBackgroundColor={COLOR.powerPointHovered}
          color="white"
          onClick={() => this.onClick()}
          ref={this.shurikenRef}
        >
          <Image src="/white_shuriken.png" className="download_icon" />
          {parse(t("pptButton"))}
        </PPButton>
        <div className="download_button_description">
          {parse(t("pptDetail"))}
        </div>
      </div>
    );
  };
}

export default DownloadButton;
