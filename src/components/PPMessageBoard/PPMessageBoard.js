import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroll-component";

import ShurikenSpinner from "../ShurikenSpinner";

import DownloadButton from "./DownloadButton";
import MessageItems from "./MessageItems";
import MessageBoardHeader from "./MessageBoardHeader";

import backgroundImg from "../../assets/images/pptile.png";

const MessageBoardContainer = styled.div`
  background-image: url(${backgroundImg});
  background-attachment: fixed;
  background-size: 150px;
  background-repeat: repeat;
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
      <div className="message_board">
        <MessageBoardHeader t={t} />
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
      </div>
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
