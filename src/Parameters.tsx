import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

type ParametersProps = {
  changeMode: () => void;
  darkMode: string;
};
const Parameters = ({ changeMode, darkMode }: ParametersProps) => {
  return (
    <div>
      <FontAwesomeIcon className="sun-spacing" icon={faSun} />
      <FormControlLabel
        onChange={changeMode}
        checked={darkMode === "dark"}
        control={<Switch />}
        label=""
      />
      <FontAwesomeIcon icon={faMoon} />
    </div>
  );
};

export default Parameters;
