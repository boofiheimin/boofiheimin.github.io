import { Dropdown } from "semantic-ui-react";

import PPButton from "../../../PPButton";

import { languageOptions } from "../../../../i18n";

const options = Object.entries(languageOptions).map(([id, name]) => ({
  key: id,
  text: name,
  value: id,
  image: { src: `/${id}.png` },
}));

const PPLingo = ({ handleLanguageChange, currentLanguage }) => {
  return (
    <Dropdown
      className="pplingo"
      as={PPButton}
      backgroundColor={"rgba(0,0,0,0)"}
      bordered
      color="white"
      labeled
      options={options}
      value={currentLanguage}
      onChange={handleLanguageChange}
    />
  );
};

export default PPLingo;
