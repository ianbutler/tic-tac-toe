import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import Cell from "./Cell";

const Board = ({ board, onPressSquare }) => (
  <View style={styles.table}>
    {board.map((r, rowIndex) => (
      <View style={styles.row} key={rowIndex}>
        {r.map((_, colIndex) => (
          <Cell
            value={board[rowIndex][colIndex]}
            onPress={() => onPressSquare(rowIndex, colIndex)}
            key={colIndex}
          />
        ))}
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  table: {
    width: "100%",
    padding: 15,
    display: "flex",
    flexDirection: "column",
  },
});

Board.propTypes = {
  board: PropTypes.array.isRequired,
  onPressSquare: PropTypes.func.isRequired,
};

export default Board;
