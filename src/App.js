import { withNamespaces } from "react-i18next";

import "./App.css";

import CongratulationsCard from "./components/CongratulationsCard";
import PPTFrame from "./components/PPTFrame";
import MessageBoard from "./components/MessageBoard";
import Footer from "./components/Footer";
import PPBackToTop from "./components/PPBackToTop";

function App({ t }) {
  return (
    <div className="main_container">
      <CongratulationsCard t={t} />
      <PPTFrame t={t} />
      <MessageBoard t={t} />
      <Footer />
      <PPBackToTop />
    </div>
  );
}

export default withNamespaces()(App);
