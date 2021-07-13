import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../../components/Nav/Nav";
import { currentLanguage } from "../../i18n";

const NavContainer = ({ t }) => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const modalOnClick = (v = false) => {
    setModalShow(v);
  };

  const handleLanguageChange = (e, { value }) => {
    if (value === "ja") {
      navigate("/jp");
    } else {
      navigate("/en");
    }
  };
  return (
    <Nav
      t={t}
      modalShow={modalShow}
      modalOnClick={modalOnClick}
      handleLanguageChange={handleLanguageChange}
      currentLanguage={currentLanguage()}
    />
  );
};

export default NavContainer;
