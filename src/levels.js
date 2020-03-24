import Brick from "./brick";

export function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, indexRow) => {
    row.forEach((brick, indexBrick) => {
      if (brick === 1) {
        let position = {
          x: 80 * indexBrick,
          y: 75 + 24 * indexRow
        };
        bricks.push(new Brick(game, position));
      }
     
    });
  });
  return bricks

}

export const level1 = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],

  [1, 1, 0, 0, 1, 1, 1, 1, 1, 1],

  [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],

  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
