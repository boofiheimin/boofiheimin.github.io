import "./App.css";

import CongratulationsCard from "./components/CongratulationsCard";
import PPTFrame from "./components/PPTFrame";
import MessageBoard from "./components/MessageBoard";
import Footer from "./components/Footer";
import PPBackToTop from "./components/PPBackToTop";

function App() {
  return (
    <div className="main_container">
      <CongratulationsCard />
      <PPTFrame />
      <MessageBoard />
      <Footer />
      <PPBackToTop />
    </div>
  );
}

export default App;
