import { useState, useRef } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { Container } from "@material-ui/core";
import ppstage_blur from "../../assets/images/ppstage_blur.webp";

import ShurikenSpinner from "../ShurikenSpinner";

import Slider from "react-slick";
import Youtube from "react-youtube";

const ShowCaseContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-image: url(${ppstage_blur});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem;
  .slick-dots li button:before {
    color: white;
  }
  .slick-prev,
  .slick-next {
    color: white;
    font-size: 2rem !important;
  }

  .slick-prev:before,
  .slick-next:before {
    content: "" !important;
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
  margin-bottom: 5rem;
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

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const YoutubeContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i class="fas fa-chevron-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i class="fas fa-chevron-left"></i>
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  pauseOnFocus: true,
  pauseOnHover: true,
  adaptiveHeight: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const PPShowcase = () => {
  const [players, setPlayer] = useState([null, null]);
  const [autoplay, setAutoplay] = useState(true);
  const sliderRef = useRef(null);

  const onReady = (e, playerIndex) => {
    const newPlayers = [...players];
    newPlayers[playerIndex] = e.target;
    setPlayer(newPlayers);
  };

  const onPlay = () => {
    sliderRef.current.slickPause();
    setAutoplay(false);
  };

  const onSlideChange = () => {
    if (!autoplay) {
      sliderRef.current.slickPlay();
      setAutoplay(true);
    }
  };

  console.log(players[0] === null);

  return (
    <ShowCaseContainer>
      <Container>
        <SongTitle>Songs</SongTitle>
        <SongSubtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          perferendis odit cum corrupti quasi, nihil expedita nulla fuga
          aspernatur voluptas eos. Nisi, eveniet. Temporibus veniam, ut qui
          aliquid fugit distinctio.
        </SongSubtitle>

        <div className="container">
          <Slider {...settings} ref={sliderRef} afterChange={onSlideChange}>
            <div>
              <SlideContainer>
                {players[0] === null && <ShurikenSpinner type="white" />}
                <YoutubeContainer>
                  <Youtube
                    videoId={"VDUVNZ72nw4"}
                    onReady={(e) => onReady(e, 0)}
                    onPlay={onPlay}
                  />
                </YoutubeContainer>
              </SlideContainer>
            </div>
            <div>
              <SlideContainer>
                {players[1] === null && <ShurikenSpinner type="white" />}
                <YoutubeContainer>
                  <Youtube
                    videoId={"C6ig4qWh35I"}
                    onReady={(e) => onReady(e, 1)}
                    onPlay={onPlay}
                  />
                </YoutubeContainer>
              </SlideContainer>
            </div>
          </Slider>
        </div>
      </Container>
      <More>
        <Icon name="angle double down" />
      </More>
    </ShowCaseContainer>
  );
};

export default PPShowcase;
