import styled from "styled-components";
import { Image } from "semantic-ui-react";
import parse from "html-react-parser";

import PPButton from "../../PPButton";

import { COLOR } from "../../../constants";

const DownloadPNGButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;

  .download_png_button {
    font-size: 2rem;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .download_icon {
    width: 2rem;
    margin-right: 1rem;
  }
  .download_button_description {
    color: white;
  }
  @media only screen and (max-width: 1100px) {
    .download_icon {
      width: 3rem;
      margin-right: 1rem;
    }

    .download_button_png_description {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 820px) and (orientation: landscape) {
    .download_icon {
      width: 1.5rem;
    }
    .download_button_png_description {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .download_icon {
      width: 2rem;
    }
  }
  @media only screen and (max-width: 425px) {
    .download_png_button {
      font-size: 1.5rem;
    }
    .download_icon {
      width: 1.5rem;
    }
    .download_button_png_description {
      font-size: 1rem;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .download_png_button:hover .download_icon {
      animation: loading 1s infinite;
    }
  }
`;

const DownloadButton = ({ t, downloadRef, onDownloadClick }) => {
  return (
    <DownloadPNGButton>
      <PPButton
        className="download_png_button"
        backgroundColor={COLOR.png}
        hoverBackgroundColor={COLOR.pngHovered}
        color="white"
        onClick={onDownloadClick}
        ref={downloadRef}
      >
        <Image src="/white_shuriken.png" className="download_icon" />
        {parse(t("pngButton"))}
      </PPButton>
      <div className="download_button_png_description">
        {parse(t("pngDetail"))}
      </div>
    </DownloadPNGButton>
  );
};

export default DownloadButton;
