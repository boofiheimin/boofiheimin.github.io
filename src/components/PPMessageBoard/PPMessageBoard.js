import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Header, Divider } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroll-component";
import parse from "html-react-parser";

import ShurikenSpinner from "../ShurikenSpinner";

import DownloadButton from "./DownloadButton";
import MessageItems from "./MessageItems";

import backgroundImg from "../../assets/images/pptile.png";

const MessageBoardContainer = styled.div`
  background-image: url(${backgroundImg});
  background-attachment: fixed;
  background-size: 150px;
  background-repeat: repeat;
  padding-top: 2rem;
  .message_board {
    padding-bottom: 3rem;
  }
  .message_board_header {
    background: white;
    border: 3px;
    border-radius: 24px 24px 24px 24px;
    padding: 1rem;
  }
  .message_board_text {
    font-weight: 900;
    margin-bottom: 0;
  }
  .messageboard_loader {
    position: relative;
    display: flex !important;
    justify-content: center;
    align-items: center;
    height: 90px;
  }
`;

const PPMessageBoard = ({
  t,
  data,
  hasMore,
  messageRef,
  fetchMore,
  onDownloadClick,
  downloadRef,
}) => {
  return (
    <MessageBoardContainer ref={messageRef}>
      <Container className="message_board">
        <Container className={"message_board_header"}>
          <Header textAlign="center">
            <Header.Content as="h1" className={"message_board_text"}>
              {parse(t("messageHeader"))}
            </Header.Content>
            <Divider />
            <Header.Subheader>{parse(t("messageSubHeader"))}</Header.Subheader>
          </Header>
        </Container>
        <DownloadButton
          t={t}
          onDownloadClick={onDownloadClick}
          downloadRef={downloadRef}
        />
        <InfiniteScroll
          style={{ overflow: "hidden" }}
          dataLength={data.length}
          next={fetchMore}
          hasMore={hasMore}
          loader={
            <Container className="messageboard_loader">
              <ShurikenSpinner />
            </Container>
          }
        >
          <MessageItems data={data} />
        </InfiniteScroll>
      </Container>
    </MessageBoardContainer>
  );
};

PPMessageBoard.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.array,
  hasMore: PropTypes.bool.isRequired,
  messageRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  downloadRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  fetchMore: PropTypes.func.isRequired,
  onDownloadClick: PropTypes.func.isRequired,
};

PPMessageBoard.defaultProps = {
  data: [],
};

export default PPMessageBoard;
