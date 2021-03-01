import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Cell = ({ onPress, value }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.content}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    flex: 1,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Courier",
  },
});

Cell.propTypes = {
  onPress: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Cell;
