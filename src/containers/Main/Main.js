import PPCongrats from "./PPCongrats";
import PPresentation from "./PPresentation";
import PPMessageBoard from "./PPMessageBoard";
import PPBackToTop from "./PPBackToTop";
import Footer from "../../components/Footer";
import { useEffect } from "react";

const Main = ({ t, onLoaded }) => {
  useEffect(() => {
    onLoaded();
  });
  return (
    <div>
      <PPCongrats t={t} />
      <PPresentation t={t} />
      <PPMessageBoard t={t} />
      <PPBackToTop />
      <Footer t={t} />
    </div>
  );
};

export default Main;
