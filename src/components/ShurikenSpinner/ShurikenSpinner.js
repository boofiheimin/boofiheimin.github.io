import styled from "styled-components";
import { Image } from "semantic-ui-react";

const SpinningShuriken = styled(Image)`
  animation: loading 1s ease infinite;
  width: 64px;
  height: 64px;
  position: absolute !important;
  z-index: 10;
`;

const ShurikenSpinner = () => {
  return (
    <SpinningShuriken className="shuriken" src="/blue_shuriken.png" centered />
  );
};

export default ShurikenSpinner;
