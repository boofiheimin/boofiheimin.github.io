import { withNamespaces } from "react-i18next";

import PPCongrats from "./PPCongrats";
import PPresentation from "./PPresentation";
// import PPMessageBoard from "./PPMessageBoard";
// import PPBackToTop from "./PPBackToTop";

const Main = ({ t }) => {
  return (
    <div>
      <PPCongrats t={t} />
      <PPresentation t={t} />
      {/* <PPMessageBoard t={t} />
      <PPBackToTop /> */}
    </div>
  );
};

export default withNamespaces()(Main);
