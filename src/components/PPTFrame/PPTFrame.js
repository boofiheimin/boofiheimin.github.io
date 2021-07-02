import { Component } from "react";
import { Icon } from "semantic-ui-react";
import ShurikenSpinner from "../ShurikenSpinner";

import DownloadButton from "./DownloadButton";

import DownloadDescription from "./DownloadDescription";

import ResponsiveIframe from "./ResponsiveIframe";

class PPTFrame extends Component {
  state = {
    loading: true,
  };

  hideSpinner = () => {
    this.setState({
      loading: false,
    });
  };

  render() {
    const { t } = this.props;
    return (
      <div className={"ppt_card"}>
        <DownloadDescription id="desc_top" t={t} />
        <div className={"ppt_frame"} data-aos="flip-left">
          {this.state.loading ? <ShurikenSpinner /> : null}
          <ResponsiveIframe hideSpinner={this.hideSpinner} />
        </div>
        <div className="download_container">
          <DownloadDescription id="desc_bottom" t={t} />
          <DownloadButton t={t} />
        </div>
        <div className={"congrats_card_more"}>
          <Icon name="angle double down" />
        </div>
      </div>
    );
  }
}

export default PPTFrame;
