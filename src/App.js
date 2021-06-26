import "./App.css";

import { Button, Icon } from "semantic-ui-react";

import CongratulationsCard from "./components/CongratulationsCard";
import PPTFrame from "./components/PPTFrame";
import MessageBoard from "./components/MessageBoard";
import Footer from "./components/Footer";

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction(mybutton) {
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
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function App() {
  window.onscroll = function () {
    scrollFunction(document.getElementById("myBtn"));
  };
  return (
    <div className="main_container">
      <CongratulationsCard />
      <PPTFrame />
      <MessageBoard />
      <Footer />
      <Button
        icon
        onClick={() => topFunction()}
        id="myBtn"
        title="Go to top"
        size="massive"
        circular
      >
        <Icon name="angle double up" />
      </Button>
    </div>
  );
}

export default App;
