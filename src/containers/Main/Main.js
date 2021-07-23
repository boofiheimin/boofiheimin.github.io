import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Dialog } from "@material-ui/core";
import { useKonami } from "react-konami-code";

import PPCongrats from "./PPCongrats";
import PPresentation from "./PPresentation";
import PPMessageBoard from "./PPMessageBoard/PPMessageBoardContainer";
import PPMessageBoardCSV from "./PPMessageBoard/PPMessageBoardContainer_csv";
import PPBackToTop from "./PPBackToTop";
import PPShowcase from "./PPShowcase/PPShowcaseContainer";
import Footer from "../../components/Footer";
import i18n from "../../i18n";

import kanatowa from "../../assets/images/kanatowa.png";

const Main = ({ t, onLoaded, locale }) => {
  const [easterEgg, setEasterEgg] = useState(false);
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

  useKonami(() => setEasterEgg(true));

  const handleOpen = () => {
    setEasterEgg(true);
  };

  const handleClose = () => {
    setEasterEgg(false);
  };

  return (
    <div>
      <PPCongrats t={t} />
      <PPresentation t={t} />
      <PPShowcase t={t} />
      {process.env.REACT_APP_MESSAGE_MODE === "GOOGLE" ? (
        <PPMessageBoard t={t} />
      ) : (
        <PPMessageBoardCSV t={t} />
      )}
      <PPBackToTop />
      <Footer
        t={t}
        onGori={() => {
          handleOpen();
        }}
      />
      <Dialog open={easterEgg} onClose={handleClose}>
        <img src={kanatowa} alt="knt" />
      </Dialog>
    </div>
  );
};

export default Main;
