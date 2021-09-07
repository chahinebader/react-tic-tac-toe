import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCircle, faRedo } from "@fortawesome/free-solid-svg-icons";
import { Result } from "./Types";

type FeedbackBarProps = {
  player: number;
  result: Result;
  resetGame: () => void;
};

const FeedbackBar = ({ player, resetGame, result }: FeedbackBarProps) => {
  return (
    <div className="FeedbackBar">
      <div className="FeedbackBar-message">
        {result.winPlayer === 0 ? (
          <span className="span-player">
            Au joueur &nbsp;
            <FontAwesomeIcon
              className={player === 1 ? "cross-red" : "check-green"}
              icon={player === 1 ? faTimes : faCircle}
            />{" "}
            &nbsp; de jouer.
          </span>
        ) : (
          <span className="FeedbackBar-message span-player">
            Nous avons un gagnant !
          </span>
        )}
      </div>
      <div className="button-reset">
        <FontAwesomeIcon icon={faRedo} onClick={resetGame} />
      </div>
    </div>
  );
};

export default FeedbackBar;
