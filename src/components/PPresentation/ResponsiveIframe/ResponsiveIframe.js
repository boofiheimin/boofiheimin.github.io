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
  color: white;
  font-weight: bold;
  font-size: 3rem;
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
          src="https://www.youtube.com/embed/C7KFK8GnL0Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          onLoad={hideSpinner}
        ></RIframe>
      </RContainer>
    </PPTframe>
  );
};

export default ResponsiveIframe;
