import { useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import PPresentation from "../../../components/PPresentation";

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
