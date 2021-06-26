import { Component } from "react";
import { Container, Header, Divider } from "semantic-ui-react";
import MessageItems from "./MessageItems";

import { GoogleSpreadsheet } from "google-spreadsheet";
import InfiniteScroll from "react-infinite-scroll-component";

import ShurikenSpinner from "../ShurikenSpinner";

const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(
  /\\n/g,
  "\n"
);

const LIMIT = parseInt(process.env.REACT_APP_MESSAGE_LIMIT, 10);

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

class MessageBoard extends Component {
  state = {
    data: [],
    offset: 0,
    hasMore: true,
  };

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
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });

    // loads document properties and worksheets
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    const rows = await sheet.getRows({ limit: LIMIT, offset: 0 });
    this.setData(rows);
  };

  fetchMore = async () => {
    console.log("fetchMore");
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
    return (
      <div className="message_board">
        <Container className={"congrats_card"} fluid>
          <Header textAlign="center">
            <Header.Content as="h1" className={"congrats_card_message"}>
              Messages From Oversea Brothers!
            </Header.Content>
            <Divider />
            <Header.Subheader>
              種レをふぎ展国ぜ就問オテヘサ梁止ざじば賞売真コレ加17月標すどりぎ名定掲ス指失ーに仕演ヒヱ催家ラ若質レセ死創し部辞おど米東イ呼日片透派るドく。飲レカニツ覧破さがへ記望ょ江投ソ惑3制成暴含北め間知どごべ年度ハミチホ掲風チモテ竹事千息曲フり。高ぜ突25稿み車半ぐレ正社むを活上強ヱ京内テヲミナ更新ユウタマ学再が惑40社ユ多週あとンれ集純妊なゆど。
            </Header.Subheader>
          </Header>
        </Container>
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
      </div>
    );
  };
}

export default MessageBoard;
