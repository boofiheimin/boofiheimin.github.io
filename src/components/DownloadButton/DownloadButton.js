import { Container, Header, Image, Button, Icon } from "semantic-ui-react";

const DownloadButton = () => {
  return (
    <div className="download_container" data-aos="flip-right">
      <div className="download_description">
        <div className="download_description_title">The Journey</div>
        <div className="download_description_subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className="download_button_container">
        <Button color="orange" className="download_button" size="massive">
          <Image src="/white_shuriken.png" className="download_icon" />
          Download PPT
        </Button>
        <div className="download_button_description">
          .PPTX Format, Size: 85MB
        </div>
      </div>
    </div>
  );
};

export default DownloadButton;
