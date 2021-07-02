import parse from "html-react-parser";

const DownloadDescription = ({ t, ...props }) => {
  return (
    <div className="download_description" {...props}>
      <div className="download_description_title">{parse(t("pptHeader"))}</div>
      <div className="download_description_subtitle">
        {parse(t("pptDescription"))}
      </div>
    </div>
  );
};
export default DownloadDescription;
