import styled from "styled-components";
import { isMobile } from "react-device-detect";

import img1 from "../../../assets/images/1.webp";
import img2 from "../../../assets/images/2.webp";
import img3 from "../../../assets/images/3.webp";
import img4 from "../../../assets/images/4.webp";
import img5 from "../../../assets/images/7.webp";

const SlideShowContainer = styled.ul`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
  z-index: 0;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 1) 83%
    );
    opacity: 0.6;
    z-index: 1;
  }
`;

const BaseSlide = styled.span`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  color: transparent;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: none;
  opacity: 0;
  z-index: 0;
  animation: imageAnimation 40s linear infinite 0s;
  background-size: cover;
  background-position: center;
  background-attachment: ${isMobile ? "scroll" : "fixed"};
`;

const PicSlide = styled(BaseSlide)`
  ${({ src }) => {
    return `background-image: url(${src});`;
  }};
  animation-delay: ${({ delay }) => {
    return delay;
  }}s;
  ${({ bgPos }) => {
    return bgPos ? `background-position: ${bgPos}%;` : "";
  }}
`;

const SlideShow = () => {
  return (
    <SlideShowContainer>
      <li>
        <PicSlide src={img1} delay={0} />
      </li>
      <li>
        <PicSlide src={img2} delay={8} />
      </li>
      <li>
        <PicSlide src={img3} delay={16} />
      </li>
      <li>
        <PicSlide src={img4} delay={24} bgPos={80} />
      </li>
      <li>
        <PicSlide src={img5} delay={32} />
      </li>
    </SlideShowContainer>
  );
};

export default SlideShow;
