import React from "react";
import { Label, Select } from "./style";

const LanguageForm = () => {
  return (
    <form>
      <Label htmlFor="language">Select language:</Label>
      <Select id="language">
        <option>English</option>
        <option>Polish</option>
      </Select>
    </form>
  );
};

export default LanguageForm;
