import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const Logger = ({ moveArr, turn, gameOver, winningMoves }) => (
  <View style={styles.container}>
    {!gameOver && (
      <>
        <Text style={styles.title}>Turn log</Text>
        {moveArr.map((move, mI) => (
          <Text
            key={mI}
          >{`${move.marker} went [${move.rowId}, ${move.colId}]`}</Text>
        ))}
        <Text style={styles.currentMove}>{turn}'s move</Text>
      </>
    )}
    {gameOver && (
      <View style={styles.container}>
        <Text style={styles.title}>{turn} won with the moves:</Text>
        {winningMoves.map((move, mI) => (
          <Text key={mI}>{`[${move[0]},${move[1]}]`}</Text>
        ))}
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 16,
  },
  container: {
    alignItems: "center",
    marginTop: 20,
    flex: 1,
  },
  currentMove: {
    fontSize: 20,
  },
});

Logger.propTypes = {
  moveArr: PropTypes.array.isRequired,
  turn: PropTypes.string.isRequired,
  gameOver: PropTypes.bool.isRequired,
  winningMoves: PropTypes.array.isRequired,
};

export default Logger;
