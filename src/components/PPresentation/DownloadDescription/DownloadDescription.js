import styled from "styled-components";
import parse from "html-react-parser";

const DownloadDescriptionContainer = styled.div`
  color: white;
  margin-bottom: 2vw;
  .download_description_title {
    font-weight: 900;
    font-size: 5rem;
  }
  .download_description_subtitle {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 1100px) {
    .download_description_title {
      font-size: 4rem;
    }
    .download_description_subtitle {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 820px) and (orientation: landscape) {
    .download_description_title {
      font-size: 2.75rem;
    }
    .download_description_subtitle {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 425px) {
    .download_description_title {
      font-size: 2.75rem;
    }
    .download_description_subtitle {
      font-size: 1rem;
    }
  }
`;

const DownloadDescription = ({ t, ...props }) => {
  return (
    <DownloadDescriptionContainer {...props}>
      <div className="download_description_title">{parse(t("pptHeader"))}</div>
      <div className="download_description_subtitle">
        {parse(t("pptDescription"))}
      </div>
    </DownloadDescriptionContainer>
  );
};
export default DownloadDescription;
