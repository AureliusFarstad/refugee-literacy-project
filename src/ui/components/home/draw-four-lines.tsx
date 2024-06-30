import React, { useState, useRef } from "react";
import { View, StyleSheet, PanResponder } from "react-native";
import Svg, { Path } from "react-native-svg";

const LineDrawingComponent = () => {
  const [paths, setPaths] = useState<string[]>([]);
  const [currentPath, setCurrentPath] = useState<string>("");
  const pathRef = useRef<string>("");

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt) => {
        const { locationX, locationY } = evt.nativeEvent;
        pathRef.current = `M${locationX},${locationY}`;
        setCurrentPath(pathRef.current);
      },
      onPanResponderMove: (evt) => {
        const { locationX, locationY } = evt.nativeEvent;
        pathRef.current += ` L${locationX},${locationY}`;
        setCurrentPath(pathRef.current);
      },
      onPanResponderRelease: () => {
        setPaths((prevPaths) => [...prevPaths, pathRef.current]);
        setCurrentPath("");
      },
    })
  ).current;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Svg height="100%" width="100%">
        {paths.map((p, index) => (
          <Path key={index} d={p} stroke="green" strokeWidth="2" fill="none" />
        ))}
        <Path d={currentPath} stroke="blue" strokeWidth="2" fill="none" />
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
