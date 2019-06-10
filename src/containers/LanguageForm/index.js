import React from "react";
import { Label, Select } from "./style";
import { LanguageConsumer } from "../../contexts/LanguageContext";

const LanguageForm = () => {
  return (
    <LanguageConsumer>
      {({ translation, language, changeLanguage }) => (
        <form>
          <Label htmlFor="language">
            {translation.global.selectLanguageLabel}:
          </Label>
          <Select
            id="language"
            value={language}
            onChange={e => changeLanguage(e.target.value)}
          >
            <option value="en">{translation.global.englishLanguage}</option>
            <option value="pl">{translation.global.polishLanguage}</option>
          </Select>
        </form>
      )}
    </LanguageConsumer>
  );
};

export default LanguageForm;
