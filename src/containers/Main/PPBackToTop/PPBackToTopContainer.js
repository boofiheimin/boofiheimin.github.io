import { useEffect, useRef } from "react";
import PPBackToTop from "../../../components/PPBackToTop";

const PPBackToTopContainer = () => {
  const bttRef = useRef(null);

  const scrollToAppear = (mybutton) => {
    if (mybutton) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      scrollToAppear(bttRef.current);
    };
  });

  const returnToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return <PPBackToTop returnToTop={returnToTop} bttRef={bttRef} />;
};

export default PPBackToTopContainer;
