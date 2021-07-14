import { HashRouter, Routes, Route } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import Main from "./containers/Main";
import Nav from "./containers/Nav";
import Credit from "./containers/Credit/CreditContainer";

import "./App.css";

const App = ({ t }) => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/credit" element={<Credit t={t} />} />
        <Route path="" element={<Nav t={t} />}>
          <Route path="/jp" element={<Main locale="jp" t={t} />} />
          <Route path="/en" element={<Main locale="en" t={t} />} />
          <Route path="/" element={<Main t={t} />} />
          <Route path="*" element={<Main t={t} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default withNamespaces()(App);
