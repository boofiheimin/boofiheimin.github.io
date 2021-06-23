import "./App.css";

import { Container } from "semantic-ui-react";

import CongratulationsCard from "./components/CongratulationsCard";
import PPTFrame from "./components/PPTFrame";
import MessageBoard from "./components/MessageBoard";

function App() {
  return (
    <Container className="main_container">
      <CongratulationsCard />
      <PPTFrame />
      <MessageBoard />
    </Container>
  );
}

export default App;
