import { withNamespaces } from "react-i18next";

import PPLoader from "./PPLoader";
import { useEffect, useState } from "react";

import MainWrapperContainer from "../../components/MainWrapperContainer";

import Main from "./Main";

import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/7.jpg";

const MainWrapper = ({ t }) => {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setRender] = useState(false);
  const [transitionEnd, setTransition] = useState(false);

  useEffect(() => {
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
      {!loading && <Main t={t} onLoaded={onLoaded} />}
    </MainWrapperContainer>
  );
};

export default withNamespaces()(MainWrapper);
