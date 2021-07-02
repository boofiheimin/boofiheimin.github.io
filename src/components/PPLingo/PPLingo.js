import styled from "styled-components";
import { Dropdown } from "semantic-ui-react";
import i18n from "../../i18n";

import PPButton from "../PPButton";

const languageOptions = {
  en: "EN",
  ja: "日本",
};

const valueWithDefault = (value) => {
  if (value in languageOptions) {
    return value;
  } else return "en";
};

const options = Object.entries(languageOptions).map(([id, name]) => ({
  key: id,
  text: name,
  value: id,
  image: { src: `/${id}.png` },
}));

const PPLingo = () => {
  const handleLanguageChange = (e, { value }) => {
    i18n.changeLanguage(value);
  };
  return (
    <Dropdown
      className="pplingo"
      as={PPButton}
      backgroundColor={"rgba(0,0,0,0)"}
      bordered
      color="white"
      labeled
      options={options}
      value={valueWithDefault(i18n.language)}
      onChange={handleLanguageChange}
    />
  );
};

export default PPLingo;
