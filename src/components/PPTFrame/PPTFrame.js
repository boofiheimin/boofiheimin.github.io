import { Component } from "react";
import { Element } from "react-scroll";
import { Icon } from "semantic-ui-react";
import ShurikenSpinner from "../ShurikenSpinner";

import DownloadButton from "../DownloadButton";

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
    return (
      <div className={"ppt_card"}>
        <div className={"ppt_frame"} data-aos="flip-left">
          {this.state.loading ? <ShurikenSpinner /> : null}
          <iframe
            title="PPT"
            src="https://onedrive.live.com/embed?cid=9C12431F4CA33E8E&amp;resid=9C12431F4CA33E8E%2129326&amp;authkey=AE5OmX5CpHbITUU&amp;em=2&amp;wdAr=1.7777777777777777"
            width="100%"
            height="100%"
            frameborder="0"
            onLoad={this.hideSpinner}
          >
            This is an embedded{" "}
            <a target="_blank" href="https://office.com" rel="noreferrer">
              Microsoft Office
            </a>{" "}
            presentation, powered by{" "}
            <a
              target="_blank"
              href="https://office.com/webapps"
              rel="noreferrer"
            >
              Office
            </a>
            .
          </iframe>
        </div>
        <DownloadButton />
        <div className={"congrats_card_more"}>
          <Icon name="angle double down" />
        </div>
      </div>
    );
  }
}

export default PPTFrame;
