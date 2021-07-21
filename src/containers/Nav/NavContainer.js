import { useNavigate } from "react-router";
import Nav from "../../components/Nav/Nav";
import { currentLanguage } from "../../i18n";

const NavContainer = ({ t }) => {
  const navigate = useNavigate();
  const onButtonClick = (v = false) => {
    navigate("/credits");
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
      onButtonClick={onButtonClick}
      handleLanguageChange={handleLanguageChange}
      currentLanguage={currentLanguage()}
    />
  );
};

export default NavContainer;
