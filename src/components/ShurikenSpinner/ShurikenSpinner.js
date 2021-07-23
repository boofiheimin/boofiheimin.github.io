import styled from "styled-components";
import { Image } from "semantic-ui-react";

const SpinningShuriken = styled(Image)`
  animation: loading 1s ease infinite;
  width: 64px;
  height: 64px;
  position: absolute !important;
  z-index: 1000;
`;

const ShurikenSpinner = ({ type }) => {
  let shuriken = "/blue_shuriken.png";
  if (type === "white") {
    shuriken = "/white_shuriken.webp";
  }

  return <SpinningShuriken className="shuriken" src={shuriken} centered />;
};

export default ShurikenSpinner;
