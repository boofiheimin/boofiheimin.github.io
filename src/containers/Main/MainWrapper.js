import { withNamespaces } from "react-i18next";

import PPLoader from "./PPLoader";
import { useEffect, useState } from "react";

import MainWrapperContainer from "../../components/MainWrapperContainer";

import Main from "./Main";

import img1 from "../../assets/images/hikawa.png";
import img2 from "../../assets/images/shukonbu.png";
import img3 from "../../assets/images/shukonbu2.png";
import img4 from "../../assets/images/yuuhidora.png";
import img5 from "../../assets/images/yuuhidora_rc.png";
import img6 from "../../assets/images/yuuhidora_center.png";

const MainWrapper = ({ t }) => {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setRender] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const promises = [];
      const images = [];
      const imageSrcList = [img1, img2, img3, img4, img5, img6];
      imageSrcList.forEach((image) => {
        promises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              resolve();
            };
            img.src = image;
            images.push(img);
          })
        );
      });
      await Promise.all(promises);
      console.log("finish loading!");
      setLoading(false);
    };
    loadImages();
  }, []);

  const onLoaded = () => {
    setRender(true);
  };

  return (
    <MainWrapperContainer>
      <PPLoader show={loading || !shouldRender} />
      <Main t={t} onLoaded={onLoaded} />
    </MainWrapperContainer>
  );
};

export default withNamespaces()(MainWrapper);
