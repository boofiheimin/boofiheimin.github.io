import { Container, Image, Button, Icon } from "semantic-ui-react";

const DownloadButton = () => {
  return (
    <Container className="download_container">
      {/* <Image src="/PPDownload.png" className="download_button" /> */}
      <Button color="twitter" className="download_button" size="massive">
        <Image src="/white_shuriken.png" className="download_icon" /> DOWNLOAD
      </Button>
    </Container>
  );
};

export default DownloadButton;
