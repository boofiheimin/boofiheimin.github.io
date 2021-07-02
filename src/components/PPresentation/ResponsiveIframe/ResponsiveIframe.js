import styled from "styled-components";

import ShurikenSpinner from "../../ShurikenSpinner";

const PPTframe = styled.div`
  padding-left: 4vw;
  padding-right: 4vw;
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const RContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%;
  @media only screen and (max-width: 420px) {
    padding-top: 68.75%;
  }
`;

const RIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const ResponsiveIframe = ({ hideSpinner, loading }) => {
  return (
    <PPTframe>
      {loading ? <ShurikenSpinner /> : null}
      <RContainer data-aos="flip-left">
        <RIframe
          title="PPT"
          src="https://onedrive.live.com/embed?cid=9C12431F4CA33E8E&amp;resid=9C12431F4CA33E8E%2129326&amp;authkey=AE5OmX5CpHbITUU&amp;em=2&amp;wdAr=1.7777777777777777"
          onLoad={hideSpinner}
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
        </RIframe>
      </RContainer>
    </PPTframe>
  );
};

export default ResponsiveIframe;
