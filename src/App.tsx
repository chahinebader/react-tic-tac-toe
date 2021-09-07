import React, { useState } from "react";
import "./App.scss";
import Board from "./Board";
import FeedbackBar from "./FeedbackBar";
import Winner from "./Winner";
import Parametrs from "./Parameters";
import { Result } from "./Types";

export const checkNotUsed = (caseValue: number) => {
  return caseValue !== 0;
};
export const getResult = (
  values: number[][],
  currentPlayer: number
): Result => {
  //to avoid test on lines with full 0 and trigger the first test
  if (
    values[0].some(checkNotUsed) ||
    values[1].some(checkNotUsed) ||
    values[2].some(checkNotUsed)
  ) {
    //Starting to test the Rows
    if (
      values[0][0] === values[0][1] &&
      values[0][1] === values[0][2] &&
      values[0].some(checkNotUsed)
    ) {
      return {
        winPlayer: currentPlayer,
        draw: false,
        winCells: [
          [2, 2, 2],
          [0, 0, 0],
          [0, 0, 0],
        ],
      };
    } else if (
      values[1][0] === values[1][1] &&
      values[1][1] === values[1][2] &&
      values[1].some(checkNotUsed)
    ) {
      return {
        winPlayer: currentPlayer,
        draw: false,
        winCells: [
          [0, 0, 0],
          [2, 2, 2],
          [0, 0, 0],
        ],
      };
    } else if (
      values[2][0] === values[2][1] &&
      values[2][1] === values[2][2] &&
      values[2].some(checkNotUsed)
    ) {
      return {
        winPlayer: currentPlayer,
        draw: false,
        winCells: [
          [0, 0, 0],
          [0, 0, 0],
          [2, 2, 2],
        ],
      };
    }
    //Starting to test with columns
    else if (
      values[0][0] === values[1][0] &&
      values[1][0] === values[2][0] &&
      values[0][0] !== 0 &&
      values[1][0] !== 0 &&
      values[2][0] !== 0
    ) {
      return {
        winPlayer: currentPlayer,
        draw: false,
        winCells: [
          [2, 0, 0],
          [2, 0, 0],
          [2, 0, 0],
        ],
      };
    } else if (
      values[0][1] === values[1][1] &&
      values[1][1] === values[2][1] &&
      values[0][1] !== 0 &&
      values[1][1] !== 0 &&
      values[2][1] !== 0
    ) {
      return {
        winPlayer: currentPlayer,
        draw: false,
        winCells: [
          [0, 2, 0],
          [0, 2, 0],
          [0, 2, 0],
        ],
      };
    } else if (
      values[0][2] === values[1][2] &&
      values[1][2] === values[2][2] &&
      values[0][2] !== 0 &&
      values[1][2] !== 0 &&
      values[2][2] !== 0
    ) {
      return {
        winPlayer: currentPlayer,
        draw: false,
        winCells: [
          [0, 0, 2],
          [0, 0, 2],
          [0, 0, 2],
        ],
      };
    }
    //Starting to test Diagonal
    else if (
      values[0][0] === values[1][1] &&
      values[1][1] === values[2][2] &&
      values[0][0] !== 0 &&
      values[1][1] !== 0 &&
      values[2][2] !== 0
    ) {
      return {
        winPlayer: currentPlayer,
        draw: false,
        winCells: [
          [2, 0, 0],
          [0, 2, 0],
          [0, 0, 2],
        ],
      };
    } else if (
      values[0][2] === values[1][1] &&
      values[1][1] === values[2][0] &&
      values[0][2] !== 0 &&
      values[1][1] !== 0 &&
      values[2][0] !== 0
    ) {
      return {
        winPlayer: currentPlayer,
        draw: false,
        winCells: [
          [0, 0, 2],
          [0, 2, 0],
          [2, 0, 0],
        ],
      };
    }
    // all sells have been played and no winner => draw !
    else if (
      values[0][0] !== 0 &&
      values[0][1] !== 0 &&
      values[0][2] !== 0 &&
      values[1][0] !== 0 &&
      values[1][1] !== 0 &&
      values[1][2] !== 0 &&
      values[2][0] !== 0 &&
      values[2][1] !== 0 &&
      values[2][2] !== 0
    ) {
      return {
        winPlayer: 0,
        draw: true,
        winCells: values,
      };
    } else {
      return {
        winPlayer: 0,
        draw: false,
        winCells: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      };
    }
  }
  return {
    winPlayer: 0,
    draw: false,
    winCells: values,
  };
};
const App: React.FC = () => {
  // Values for the board cells
  // 0 = Not played
  // 1 = played by player X
  // -1 = played by player O
  const [values, setValues] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [player, setPlayer] = useState(1);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("mode") || "dark"
  );

  const playCell = (row: number, col: number) => {
    if (result.winPlayer === 0) {
      values[row][col] = player;
      setValues(values);
      setPlayer(-player);
    }
  };

  const resetGame = () => {
    // Reset the cases and restart with X player
    setValues([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setPlayer(1);
  };

  const result: Result = getResult(values, player);
  const changeMode = () => {
    //the mode saves so when the user reloads the states remain unchanged
    if (darkMode === "dark") {
      setDarkMode("light");
      localStorage.setItem("mode", "light");
    } else {
      setDarkMode("dark");
      localStorage.setItem("mode", "dark");
    }
  };

  return (
    <div className={darkMode === "dark" ? "App" : "App-light"}>
      <Parametrs {...{ changeMode, darkMode }} />
      <div className="App-center">
        <div className="Status-player">
          <FeedbackBar {...{ player, result, resetGame }} />
        </div>
        <div className="game-board">
          <Board {...{ values, result, playCell, darkMode }} />
        </div>
        <div className="game-result">
          <Winner {...{ result }} />
        </div>
      </div>
    </div>
  );
};

export default App;
