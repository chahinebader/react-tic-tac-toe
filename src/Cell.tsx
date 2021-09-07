import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCircle } from "@fortawesome/free-solid-svg-icons";

type CellProps = {
  value: number;
  playCell?: () => void;
  className: string;
  darkMode: string;
};

const Cell = ({ value, playCell, className, darkMode }: CellProps) => {
  return (
    <div
      className={`${darkMode === "dark" ? " Board-cell" : "Board-cell-light"} ${
        value ? " played" : ""
      } ${className.length > 0 ? className : ""}`}
      onClick={value === 0 ? playCell : undefined}
    >
      {!!value && (
        <FontAwesomeIcon
          className={value === 1 ? "cross-red-cell" : "check-green-cell"}
          icon={value === 1 ? faTimes : faCircle}
        />
      )}
    </div>
  );
};

export default Cell;
