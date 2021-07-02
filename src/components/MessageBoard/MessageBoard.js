import React, { Component } from "react";
import { Container, Header, Divider } from "semantic-ui-react";
import { isMobile } from "react-device-detect";
import { GoogleSpreadsheet } from "google-spreadsheet";
import InfiniteScroll from "react-infinite-scroll-component";
import parse from "html-react-parser";

import MessageItems from "./MessageItems";

import ShurikenSpinner from "../ShurikenSpinner";

import {
  SPREADSHEET_ID,
  SHEET_ID,
  GOOGLE_API_KEY,
  LIMIT,
} from "../../constants";

import DownloadButton from "./DownloadButton";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

class MessageBoard extends Component {
  state = {
    data: [],
    offset: 0,
    hasMore: true,
  };

  messageRef = React.createRef();

  setData = (data) => {
    this.setState({
      data,
    });
  };

  setNextOffset = () => {
    this.setState({
      offset: this.state.offset + LIMIT,
    });
  };

  setHasMore = (hasMore) => {
    this.setState({
      hasMore,
    });
  };

  componentDidMount = async () => {
    if (isMobile) {
      const DOMNode = this.messageRef.current;
      DOMNode.style.backgroundAttachment = "scroll";
    }

    console.log(GOOGLE_API_KEY);

    doc.useApiKey(GOOGLE_API_KEY);

    // loads document properties and worksheets
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    const rows = await sheet.getRows({ limit: LIMIT, offset: 0 });
    this.setData(rows);
  };

  fetchMore = async () => {
    if (this.state.data.length % LIMIT !== 0) {
      this.setHasMore(false);
    }

    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    this.setNextOffset();

    const rows = await sheet.getRows({
      limit: LIMIT,
      offset: this.state.offset,
    });

    this.setData([...this.state.data, ...rows]);
  };

  render = () => {
    const { data, hasMore } = this.state;
    const { t } = this.props;
    return (
      <div className="message_board_wrapper" ref={this.messageRef}>
        <Container className="message_board">
          <Container className={"message_board_header"}>
            <Header textAlign="center">
              <Header.Content as="h1" className={"message_board_text"}>
                {parse(t("messageHeader"))}
              </Header.Content>
              <Divider />
              <Header.Subheader>
                {parse(t("messageSubHeader"))}
              </Header.Subheader>
            </Header>
          </Container>
          <DownloadButton t={t} />
          <InfiniteScroll
            style={{ overflow: "hidden" }}
            dataLength={data.length}
            next={this.fetchMore}
            hasMore={hasMore}
            loader={
              <Container className="messageboardLoader">
                <ShurikenSpinner />
              </Container>
            }
          >
            <MessageItems data={data} />
          </InfiniteScroll>
        </Container>
      </div>
    );
  };
}

export default MessageBoard;
