import { useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import PPresentation from "../../../components/PPresentation";
import FileSaver from "file-saver";

const PPresentationContainer = ({ t }) => {
  const [loading, setLoading] = useState(true);

  const downloadRef = useRef(null);

  const hideSpinner = () => {
    setLoading(false);
  };

  const onDownloadClick = () => {
    if (isMobile) {
      downloadRef.current.classList.remove("spinning_shuriken");
      void downloadRef.current.offsetWidth;
      downloadRef.current.classList.add("spinning_shuriken");
    }
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resource/Kanata 1M Journey.pptx",
      "Kanata 1M Journey.pptx"
    );
  };

  return (
    <PPresentation
      t={t}
      loading={loading}
      hideSpinner={hideSpinner}
      downloadRef={downloadRef}
      onDownloadClick={onDownloadClick}
    />
  );
};

export default PPresentationContainer;
