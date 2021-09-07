import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCircle } from "@fortawesome/free-solid-svg-icons";

type ResultProps = {
  result: any;
};

const Winner = ({ result }: ResultProps) => {
  return (
    <div className="FeedbackBar-message winner-message">
      {result.winPlayer !== 0 && (
        <div>
          <FontAwesomeIcon
            className={
              result.winPlayer === -1 ? "cross-red-cell" : "check-green-cell"
            }
            icon={result.winPlayer === -1 ? faTimes : faCircle}
          />
          <span> {result?.player} : Gagne !! </span>
        </div>
      )}
      {result.draw && (
        <div>
          <span>Egalité !</span>
        </div>
      )}
    </div>
  );
};

export default Winner;
