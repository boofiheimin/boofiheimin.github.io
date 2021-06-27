import React, { Component } from "react";

import { Icon } from "semantic-ui-react";

import PPButton from "../PPButton";

class PPBackToTop extends Component {
  bttRef = React.createRef();

  componentDidMount = () => {
    const DOMNode = this.bttRef.current;
    window.onscroll = () => {
      this.scrollToAppear(DOMNode);
    };
  };

  scrollToAppear(mybutton) {
    if (mybutton) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }

  returnToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render = () => {
    return (
      <PPButton
        onClick={() => this.returnToTop()}
        circular={true}
        className="back_to_top"
        color="white"
        backgroundColor="lightgrey"
        ref={this.bttRef}
      >
        <Icon name="chevron up" fitted />
      </PPButton>
    );
  };
}

export default PPBackToTop;
