import ReactTestUtils from "react-dom/test-utils";

const { getResult } = require("./App");

test("test first row all on X", () => {
  expect(getResult([[1, 0, 0], [1, 0, 0], [1, 0, 0], 1])).toEqual({
    draw: false,
    winCells: [
      [2, 0, 0],
      [2, 0, 0],
      [2, 0, 0],
    ],
    winPlayer: undefined,
  });
});
test("test first column all on X", () => {
  expect(getResult([[1, 0, 0], [1, 0, 0], [1, 0, 0], 1])).toEqual({
    draw: false,
    winCells: [
      [2, 0, 0],
      [2, 0, 0],
      [2, 0, 0],
    ],
    winPlayer: undefined,
  });
});
test("test on diagonal left up all on X", () => {
  expect(getResult([[1, 0, 0], [0, 1, 0], [0, 0, 1], 1])).toEqual({
    draw: false,
    winCells: [
      [2, 0, 0],
      [0, 2, 0],
      [0, 0, 2],
    ],
    winPlayer: undefined,
  });
});
test("test on draw", () => {
  expect(getResult([[1, 1, -1], [-1, -1, 1], [1, 1, -1], 1])).toEqual({
    draw: true,
    winCells: [[1, 1, -1], [-1, -1, 1], [1, 1, -1], 1],
    winPlayer: 0,
  });
});
