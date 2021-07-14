import { useEffect } from "react";
import { useNavigate } from "react-router";
import PPCongrats from "./PPCongrats";
import PPresentation from "./PPresentation";
import PPMessageBoard from "./PPMessageBoard/PPMessageBoardContainer";
import PPMessageBoardCSV from "./PPMessageBoard/PPMessageBoardContainer_csv";
import PPBackToTop from "./PPBackToTop";
import Footer from "../../components/Footer";
import i18n from "../../i18n";

const Main = ({ t, onLoaded, locale }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const reroute = () => {
      const lang = localStorage.getItem("i18nextLng");
      if (!locale) {
        if (lang === "ja") {
          navigate("/jp");
        } else {
          navigate("/en");
        }
      }
    };
    const setLang = () => {
      if (locale === "jp") {
        i18n.changeLanguage("ja");
      } else {
        i18n.changeLanguage("en");
      }
    };
    reroute();
    setLang();

    onLoaded();
  }, [locale]);

  return (
    <div>
      <PPCongrats t={t} />
      <PPresentation t={t} />
      {process.env.REACT_APP_MESSAGE_MODE === "GOOGLE" ? (
        <PPMessageBoard t={t} />
      ) : (
        <PPMessageBoardCSV t={t} />
      )}
      <PPBackToTop />
      <Footer t={t} />
    </div>
  );
};

export default Main;
