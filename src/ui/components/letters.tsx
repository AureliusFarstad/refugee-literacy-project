import React, { useState } from "react";
import {
  View,
  Text,
  PanResponder,
  PanResponderGestureState,
  StyleSheet,
} from "react-native";

interface LetterPosition {
  x: number;
  y: number;
}

interface LetterPositions {
  [key: string]: LetterPosition;
}

const LetterMatchingGame = () => {
  const matchingPairs: { [key: string]: string } = { a: "A", b: "B", c: "C" };
  const [draggingLetter, setDraggingLetter] = useState<string | null>(null);
  const [draggingPosition, setDraggingPosition] =
    useState<LetterPosition | null>(null);
  const [letterPositions, setLetterPositions] = useState<LetterPositions>({
    a: { x: 50, y: 100 },
    b: { x: 50, y: 200 },
    c: { x: 50, y: 300 },
    A: { x: 250, y: 100 },
    B: { x: 250, y: 200 },
    C: { x: 250, y: 300 },
  });
  const [matchedPairs, setMatchedPairs] = useState<{ [key: string]: boolean }>(
    {}
  );

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (e, gestureState) => {
      const letter = getLetter(gestureState.x0, gestureState.y0);
      if (letter && letter.toLowerCase() in matchingPairs) {
        setDraggingLetter(letter);
        setDraggingPosition({ x: gestureState.x0, y: gestureState.y0 });
      }
    },
    onPanResponderMove: (e, gestureState) => {
      if (draggingLetter) {
        setDraggingPosition({ x: gestureState.moveX, y: gestureState.moveY });
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      if (draggingLetter) {
        const droppedLetter = getLetter(gestureState.moveX, gestureState.moveY);
        if (
          droppedLetter &&
          matchingPairs[draggingLetter.toLowerCase()] === droppedLetter
        ) {
          // Match successful
          setMatchedPairs((prevMatchedPairs) => ({
            ...prevMatchedPairs,
            [draggingLetter.toLowerCase()]: true,
          }));
        }
        setDraggingLetter(null);
        setDraggingPosition(null);
      }
    },
  });

  const getLetter = (x: number, y: number): string | null => {
    for (const letter in letterPositions) {
      const { x: letterX, y: letterY } = letterPositions[letter];
      const distance = Math.sqrt(
        Math.pow(x - letterX, 2) + Math.pow(y - letterY, 2)
      );
      if (distance < 30) {
        return letter;
      }
    }
    return null;
  };

  return (
    <View className="">
      <View style={styles.leftColumn}>
        {Object.keys(matchingPairs).map((letter) => (
          <View
            key={letter}
            style={[
              styles.letter,
              {
                top: letterPositions[letter].y,
              },
            ]}
            {...panResponder.panHandlers}
          >
            <Text style={styles.letterText}>{letter}</Text>
          </View>
        ))}
      </View>
      <View style={styles.rightColumn}>
        {Object.values(matchingPairs).map((letter) => (
          <View
            key={letter}
            style={[
              styles.letter,
              {
                top: letterPositions[letter].y,
              },
            ]}
          >
            <Text style={styles.letterText}>{letter}</Text>
          </View>
        ))}
      </View>
      {draggingLetter && draggingPosition && (
        <View style={styles.line}>
          <View
            style={[
              styles.lineSegment,
              {
                left: letterPositions[draggingLetter].x,
                top: letterPositions[draggingLetter].y,
                width: draggingPosition.x - letterPositions[draggingLetter].x,
                height: 2,
                backgroundColor: matchedPairs[draggingLetter.toLowerCase()]
                  ? "green"
                  : "black",
                transform: [
                  {
                    rotate:
                      Math.atan2(
                        draggingPosition.y - letterPositions[draggingLetter].y,
                        draggingPosition.x - letterPositions[draggingLetter].x
                      ) + "rad",
                  },
                ],
              },
            ]}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  leftColumn: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  rightColumn: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  letter: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  letterText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  line: {
    position: "absolute",
  },
  lineSegment: {
    position: "absolute",
    backgroundColor: "black",
  },
});

export default LetterMatchingGame;
