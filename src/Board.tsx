import React from "react";
import Cell from "./Cell";
import { Result } from "./Types";

type BoardProps = {
  values: number[][];
  result: Result;
  darkMode: string;
  playCell: (row: number, cell: number) => void;
};

const Board = ({ values, playCell, result, darkMode }: BoardProps) => {
  return (
    <div className={darkMode === "dark" ? "Board" : "Board-light"}>
      {values.map((rowValues, row) => (
        <div key={row} className="Board-row">
          {rowValues.map((rowValue, col) => (
            <Cell
              className={
                result.winCells && result.winCells[row][col] === 2
                  ? "winning-cell"
                  : ""
              }
              key={col}
              value={rowValue}
              playCell={() => playCell(row, col)}
              darkMode={darkMode}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
