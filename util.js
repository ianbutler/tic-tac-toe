export const checkWon = (board, marker, ROW_LENGTH) => {
  const colArr = new Array(ROW_LENGTH).fill(0).map((_) => []); // [[], [], []];
  const rowArr = new Array(ROW_LENGTH).fill(0).map((_) => []);
  let upToDownDiagnol = [];
  let downToUpDiagnol = [];

  for (let i = 0; i < board.length; i++) {
    let row = board[i];

    if (board[i][i] === marker) {
      upToDownDiagnol.push([i, i]);
      if (upToDownDiagnol.length === ROW_LENGTH) {
        return upToDownDiagnol;
      }
    }

    if (board[ROW_LENGTH - 1 - i][i] === marker) {
      downToUpDiagnol.push([ROW_LENGTH - 1 - i, i]);
      if (downToUpDiagnol.length === ROW_LENGTH) {
        return downToUpDiagnol;
      }
    }

    for (let j = 0; j < row.length; j++) {
      if (board[i][j] === marker) {
        rowArr[i].push([i, j]);
        colArr[j].push([i, j]);
      }

      if (rowArr[i].length === ROW_LENGTH) {
        return rowArr[i];
      }
      if (colArr[j].length === ROW_LENGTH) {
        return colArr[j];
      }
    }
  }

  return false;
};
