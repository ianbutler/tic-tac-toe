import React, { useState } from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Text, Button, SafeAreaView, View } from "react-native";
import Board from "./components/Board";
import Logger from "./components/Logger";
import { checkWon } from "./util";

// 1. Implement turns - each time a square is pressed, update the turn to be X or O and log("Turn", turn)
// 2. Implement board population - each time a square is pressed, the board is populated with X or O depending on turn (step 1)
// 3. Implement win validation - If a game has been won, log the winner of the game (X or O), and what indecies they won with (for example, X won, [0, 0], [0,1], [0,2])
// 4. Implement reset - when user presses reset, it resets the game

//NOTE:
// Tic tac toe should work with ANY ROW_LENGTH.  A player can win by connecting ROW_LENGTH horizontally, veritcally, or diagonally for ANY ROW_LENGTH

const ROW_LENGTH = 3;

const generateBoard = (len) => {
  return new Array(len).fill(0).map((_) => new Array(len).fill(""));
};

const App = () => {
  const [gameOver, setGameOver] = useState(false);
  const [winningMoves, setWinningMoves] = useState([]);
  const [turn, updateTurn] = useState("x");
  const [board, updateBoard] = useState(generateBoard(ROW_LENGTH));
  const [moveArr, setMoveArr] = useState([]);

  const onPressSquare = (rowId, colId) => {
    if (gameOver) {
      return;
    }
    if (board[rowId][colId] !== "") {
      alert("This space is taken");
      return;
    }

    board[rowId][colId] = turn;

    updateBoard(board);
    setMoveArr([...moveArr, { marker: turn, rowId, colId }]);

    checkForWinner();    
  };

  const checkForWinner = () => {
    const movesPresent = checkWon(board, turn, ROW_LENGTH);

    if (movesPresent && movesPresent.length) {
      setGameOver(true);
      setWinningMoves(movesPresent);
    } else {
      const newTurn = turn === "x" ? "o" : "x";
      updateTurn(newTurn);
    }
  };

  const resetGame = () => {
    updateBoard(generateBoard(ROW_LENGTH));
    setMoveArr([]);
    updateTurn("x");
    setGameOver(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>TicTacToe</Text>
        </View>
        <Board onPressSquare={onPressSquare} board={board} />
        <Logger
          moveArr={moveArr}
          turn={turn}
          gameOver={gameOver}
          winningMoves={winningMoves}
        />
      </ScrollView>
        <Button style={styles.button} title="Reset Game" onPress={resetGame} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 42,
    marginBottom: 16,
  },
  titleContainer: {
    alignItems: "center",
  },
  container: {
    marginTop: 100,
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  button: {
    flex: 1,
  },
});

export default App;
