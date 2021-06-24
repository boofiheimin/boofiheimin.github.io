import "./App.css";

import { Container } from "semantic-ui-react";

import CongratulationsCard from "./components/CongratulationsCard";
import PPTFrame from "./components/PPTFrame";
import DownloadButton from "./components/DownloadButton";
import MessageBoard from "./components/MessageBoard";
import Footer from "./components/Footer";

function App() {
  return (
    <Container className="main_container">
      <CongratulationsCard />
      <PPTFrame />
      <DownloadButton />
      <MessageBoard />
      <Footer />
    </Container>
  );
}

export default App;
