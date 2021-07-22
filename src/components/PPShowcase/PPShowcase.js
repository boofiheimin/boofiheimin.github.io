import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import ppstage_blur from "../../assets/images/ppstage_blur.webp";

import { Carousel } from "react-responsive-carousel";

const ShowCaseContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${ppstage_blur});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RContainer = styled.div`
  width: 900px;
  @media only screen and (max-width: 780px) {
    width: 700px;
  }
  @media only screen and (max-width: 430px) {
    width: 400px !important;
  }
  @media only screen and (max-width: 380px) {
    width: 300px !important;
  }
`;

const RIframe = styled.iframe`
  width: 800px !important;
  height: 450px;
  @media only screen and (max-width: 780px) {
    width: 600px !important;
    height: 338px;
  }
  @media only screen and (max-width: 425px) {
    width: 300px !important;
    height: 168px;
  }
  @media only screen and (max-width: 380px) {
    width: 250px !important;
    height: 158px;
  }
`;

const SongTitle = styled.div`
  font-size: 5rem;
  text-align: center;
  color: white;
  font-weight: bold;
  margin-bottom: 1rem;
  @media only screen and (max-width: 1100px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 820px) and (orientation: landscape) {
    font-size: 2.75rem;
  }
  @media only screen and (max-width: 425px) {
    font-size: 2.75rem;
  }
`;

const SongSubtitle = styled.div`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  @media only screen and (max-width: 1100px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 820px) and (orientation: landscape) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 425px) {
    font-size: 1rem;
  }
`;

const More = styled.div`
  color: white;
  position: absolute;
  font-size: 2.5vh;
  bottom: 1vh;
  text-align: center;
  width: 100%;
`;

const CenterFlex = styled.div`
  display: flex;
  justify-content: center;
`;

const PPShowcase = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <ShowCaseContainer>
      <RContainer>
        <SongTitle>Songs</SongTitle>
        <SongSubtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          perferendis odit cum corrupti quasi, nihil expedita nulla fuga
          aspernatur voluptas eos. Nisi, eveniet. Temporibus veniam, ut qui
          aliquid fugit distinctio.
        </SongSubtitle>
        <div>
          <Carousel
            autoPlay
            interval={15000}
            infiniteLoop
            showStatus={false}
            showArrows={matches}
            swipeable
          >
            <CenterFlex>
              <RIframe
                src="https://www.youtube.com/embed/VDUVNZ72nw4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></RIframe>
            </CenterFlex>
            <CenterFlex>
              <RIframe
                src="https://www.youtube.com/embed/C6ig4qWh35I"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></RIframe>
            </CenterFlex>
          </Carousel>
        </div>
        x
      </RContainer>
      <More>
        <Icon name="angle double down" />
      </More>
    </ShowCaseContainer>
  );
};

export default PPShowcase;
