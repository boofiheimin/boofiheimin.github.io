import { Component } from "react";
import { Container } from "semantic-ui-react";
import ShurikenSpinner from "../ShurikenSpinner";

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
      <Container className={"ppt_card"} fluid>
        {this.state.loading ? <ShurikenSpinner /> : null}
        <iframe
          title="PTT"
          src="https://onedrive.live.com/embed?cid=9C12431F4CA33E8E&amp;resid=9C12431F4CA33E8E%2129324&amp;authkey=AFLMoLDUu5SIfFw&amp;em=2&amp;wdAr=1.7777777777777777"
          width="100%"
          height="565px"
          frameborder="0"
          onLoad={this.hideSpinner}
        >
          This is an embedded{" "}
          <a target="_blank" href="https://office.com" rel="noreferrer">
            Microsoft Office
          </a>{" "}
          presentation, powered by{" "}
          <a target="_blank" href="https://office.com/webapps" rel="noreferrer">
            Office
          </a>
          .
        </iframe>
      </Container>
    );
  }
}

export default PPTFrame;
