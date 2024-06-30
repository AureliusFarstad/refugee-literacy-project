import React, { useState, useRef } from "react";
import { View, StyleSheet, PanResponder } from "react-native";
import Svg, { Path } from "react-native-svg";

const LineDrawingComponent = () => {
  const [path, setPath] = useState("");
  const pathRef = useRef("");

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt) => {
        const { locationX, locationY } = evt.nativeEvent;
        pathRef.current = `M${locationX},${locationY}`;
        setPath(pathRef.current);
      },
      onPanResponderMove: (evt) => {
        const { locationX, locationY } = evt.nativeEvent;
        pathRef.current += ` L${locationX},${locationY}`;
        setPath(pathRef.current);
      },
    })
  ).current;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Svg height="100%" width="100%">
        <Path d={path} stroke="green" strokeWidth="2" fill="none" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
});

export default LineDrawingComponent;
