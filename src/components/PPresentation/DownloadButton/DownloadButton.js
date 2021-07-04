import styled from "styled-components";
import { Image } from "semantic-ui-react";
import parse from "html-react-parser";

import PPButton from "../../PPButton";

import { COLOR } from "../../../constants";

const DownloadButtonContainer = styled.div`
  float: right;
  .download_button {
    float: right;
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
    float: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 3rem;
    padding: 1.5rem 1.5rem;
    .download_button {
      float: none;
    }
    .download_icon {
      width: 3rem;
      margin-right: 1rem;
    }
    .download_button_description {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 820px) and (orientation: landscape) {
    .download_button {
      font-size: 1.5rem;
      padding: 1rem 1rem;
    }
    .download_icon {
      width: 1.5rem;
    }
    .download_button_description {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .download_button {
      font-size: 2rem;
      padding: 1rem 2rem;
    }
    .download_icon {
      width: 2rem;
    }
  }
  @media only screen and (max-width: 425px) {
    .download_button {
      font-size: 1.5rem;
      padding: 1rem 1rem;
    }
    .download_icon {
      width: 1.5rem;
    }
    .download_button_description {
      font-size: 1rem;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .download_button:hover:not([disabled]) .download_icon {
      animation: loading 1s infinite;
    }
  }
`;

const DownloadButton = ({ t, downloadRef, onDownloadClick }) => {
  return (
    <DownloadButtonContainer>
      <PPButton
        className="download_button"
        backgroundColor={COLOR.powerPoint}
        hoverBackgroundColor={COLOR.powerPointHovered}
        color="white"
        onClick={onDownloadClick}
        ref={downloadRef}
        disabled
      >
        <Image src="/white_shuriken.png" className="download_icon" />
        {parse(t("pptButton"))}
      </PPButton>
      <div className="download_button_description">{parse(t("pptDetail"))}</div>
    </DownloadButtonContainer>
  );
};
export default DownloadButton;
