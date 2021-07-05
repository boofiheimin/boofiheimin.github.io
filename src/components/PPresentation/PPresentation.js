import PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

import DownloadDescription from "./DownloadDescription";
import DownloadButton from "./DownloadButton";

import ResponsiveIframe from "./ResponsiveIframe";

import backgroundImg from "../../assets/images/bg2.webp";

const PPresentationContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .pprsenation_more {
    color: white;
    position: absolute;
    font-size: 2.5vh;
    bottom: 1vh;
    text-align: center;
    width: 100%;
  }
  #desc_top {
    display: none;
  }

  .download_container {
    width: 50%;
    padding-left: 4vw;
    padding-right: 4vw;
    text-align: right;
  }

  @media only screen and (max-width: 1100px) {
    padding: 4rem 6rem;
    #desc_top {
      display: block;
      text-align: center;
      margin-top: 3rem;
    }
    #desc_bottom {
      display: none;
    }
    .download_container {
      width: auto;
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 820px) and (orientation: landscape) {
    padding: 5rem 2rem;
    .download_container {
      padding-bottom: 5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    #desc_top {
      margin-top: 1rem;
    }
  }

  @media only screen and (max-width: 425px) {
    padding: 5rem 2rem;
    .download_container {
      padding-bottom: 5rem;
    }
  }
`;

const PPresentation = ({
  t,
  loading,
  hideSpinner,
  downloadRef,
  onDownloadClick,
}) => {
  return (
    <PPresentationContainer>
      <DownloadDescription id="desc_top" t={t} />
      <ResponsiveIframe hideSpinner={hideSpinner} loading={loading} />
      <div className="download_container">
        <DownloadDescription id="desc_bottom" t={t} />
        <DownloadButton
          t={t}
          downloadRef={downloadRef}
          onDownloadClick={onDownloadClick}
        />
      </div>
      <div className={"pprsenation_more"}>
        <Icon name="angle double down" />
      </div>
    </PPresentationContainer>
  );
};

PPresentation.propTypes = {
  t: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  hideSpinner: PropTypes.func.isRequired,
  downloadRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  onDownloadClick: PropTypes.func.isRequired,
};

export default PPresentation;
