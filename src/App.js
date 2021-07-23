import { BrowserRouter, Routes, Route } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import Main from "./containers/Main";
import Nav from "./containers/Nav";
import Credit from "./containers/Credit/CreditContainer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

const App = ({ t }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/credits" element={<Credit t={t} />} />
        <Route path="" element={<Nav t={t} />}>
          <Route path="/jp" element={<Main locale="jp" t={t} />} />
          <Route path="/en" element={<Main locale="en" t={t} />} />
          <Route path="/" element={<Main t={t} />} />
          <Route path="*" element={<Main t={t} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default withNamespaces()(App);
