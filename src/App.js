import "./App.css";

import { Container } from "semantic-ui-react";

import CongratulationsCard from "./components/CongratulationsCard";
import PPTFrame from "./components/PPTFrame";
import MessageBoard from "./components/MessageBoard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main_container">
      <CongratulationsCard />
      <PPTFrame />
      <MessageBoard />
      <Footer />
    </div>
  );
}

export default App;
