import { useEffect, useState, Suspense } from "react";
import { useNavigate } from "react-router";

import MainWrapperContainer from "../../components/MainWrapperContainer";

import Main from "./Main";
import PPLoader from "./PPLoader";

import img1 from "../../assets/images/1.webp";
import img2 from "../../assets/images/2.webp";
import img3 from "../../assets/images/3.webp";
import img4 from "../../assets/images/4.webp";
import img5 from "../../assets/images/7.webp";

import i18n from "../../i18n";

const MainWrapper = ({ t, locale }) => {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setRender] = useState(false);
  const [transitionEnd, setTransition] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("SUBSCRIBE TO AMANE KANATA!!! PLEBIAN!!");
    const loadImages = async () => {
      const promises = [];
      const images = [];
      const imageSrcList = [img1, img2, img3, img4, img5];
      imageSrcList.forEach((image) => {
        promises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.src = image;
            img.onload = resolve;

            images.push(img);
          })
        );
      });
      await Promise.all(promises);
      setLoading(false);
    };
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
    loadImages();
  }, []);

  const onLoaded = () => {
    setRender(true);
  };

  const onTransitionEnd = () => {
    setTransition(true);
  };

  return (
    <MainWrapperContainer>
      <PPLoader
        show={loading || !shouldRender}
        transitionEnd={transitionEnd}
        onTransitionEnd={onTransitionEnd}
      />
      {!loading && <Main t={t} onLoaded={onLoaded} locale={locale} />}
    </MainWrapperContainer>
  );
};

export default MainWrapper;
