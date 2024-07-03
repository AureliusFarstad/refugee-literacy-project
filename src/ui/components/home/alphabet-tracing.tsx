import { useEffect, useMemo, useRef, useState } from "react";
import { PanResponder, View } from "react-native";
import Svg, { Path } from "react-native-svg";

import { HEIGHT, WIDTH } from "@/utils/layout";

interface Point {
  x: number;
  y: number;
}

interface AlphabetTracingProps {
  letter: string;
  strokeColor?: string;
  activeColor?: string;
}

const STROKE_WIDTH = 32;
const TRACING_TOLERANCE = 30;

const AlphabetTracing: React.FC<AlphabetTracingProps> = ({
  letter,
  strokeColor = "#E0E0E0",
  activeColor = "#8B5CF6",
}) => {
  const [paths, setPaths] = useState<string[]>([]);
  const [_completionPercentage, setCompletionPercentage] = useState(0);
  const letterSegmentsRef = useRef<Point[]>([]);

  const [isLetterTraced, setIsLetterTraced] = useState(false);

  const [currentPath, setCurrentPath] = useState<string>("");

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt) => {
        const { locationX, locationY } = evt.nativeEvent;
        setPaths((prevPaths) => [...prevPaths, `M${locationX},${locationY}`]);
      },
      onPanResponderMove: (evt) => {
        const { locationX, locationY } = evt.nativeEvent;
        setPaths((prevPaths) => {
          const newPaths = [...prevPaths];
          newPaths[newPaths.length - 1] += ` L${locationX},${locationY}`;
          return newPaths;
        });
      },
      onPanResponderRelease: () => {
        validateTracing();
      },
    })
  ).current;

  const letterPaths: { [key: string]: string } = useMemo(() => {
    const centerX = WIDTH / 2;
    const centerY = HEIGHT * 0.3;
    const letterHeight = HEIGHT * 0.2;
    const letterWidth = letterHeight * 0.8;

    return {
      A: `M${centerX - letterWidth / 2},${centerY + letterHeight / 2}
      L${centerX},${centerY - letterHeight / 2}
      L${centerX + letterWidth / 2},${centerY + letterHeight / 2}
      M${centerX - letterWidth / 4},${centerY}
      L${centerX + letterWidth / 4},${centerY}`,
      S: `M${centerX + letterWidth / 3},${centerY - letterHeight / 2}
      C${centerX - letterWidth / 2},${centerY - letterHeight / 2} ${
        centerX - letterWidth / 2
      },${centerY} ${centerX},${centerY}
      C${centerX + letterWidth / 2},${centerY} ${centerX + letterWidth / 2},${
        centerY + letterHeight / 2
      } ${centerX - letterWidth / 3},${centerY + letterHeight / 2}`,
      T: `M${centerX - letterWidth / 2},${centerY - letterHeight / 2}
      L${centerX + letterWidth / 2},${centerY - letterHeight / 2}
      M${centerX},${centerY - letterHeight / 2}
      L${centerX},${centerY + letterHeight / 2}`,
      P: `M${centerX - letterWidth / 2},${centerY + letterHeight / 2}
      L${centerX - letterWidth / 2},${centerY - letterHeight / 2}
      C${centerX - letterWidth / 2},${centerY - letterHeight / 2} ${
        centerX + letterWidth / 2
      },${centerY - letterHeight / 2} ${centerX + letterWidth / 2},${centerY}
      C${centerX + letterWidth / 2},${centerY + letterHeight / 4} ${
        centerX - letterWidth / 2
      },${centerY + letterHeight / 4} ${centerX - letterWidth / 2},${centerY}`,
      I: `M${centerX - letterWidth / 4},${centerY - letterHeight / 2}
      L${centerX + letterWidth / 4},${centerY - letterHeight / 2}
      M${centerX},${centerY - letterHeight / 2}
      L${centerX},${centerY + letterHeight / 2}
      M${centerX - letterWidth / 4},${centerY + letterHeight / 2}
      L${centerX + letterWidth / 4},${centerY + letterHeight / 2}`,
      N: `M${centerX - letterWidth / 2},${centerY + letterHeight / 2}
      L${centerX - letterWidth / 2},${centerY - letterHeight / 2}
      L${centerX + letterWidth / 2},${centerY + letterHeight / 2}
      L${centerX + letterWidth / 2},${centerY - letterHeight / 2}`,
    };
  }, []);

  useEffect(() => {
    const segments = letterPaths[letter].split(/(?=[ML])/).flatMap((cmd) => {
      const [, x, y] = cmd.match(/[ML]?\s*([\d.]+),\s*([\d.]+)/) || [];
      return x && y ? [{ x: parseFloat(x), y: parseFloat(y) }] : [];
    });
    letterSegmentsRef.current = segments;
  }, [letter, letterPaths]);

  const validateTracing = () => {
    let tracedSegments = 0;
    const totalSegments = letterSegmentsRef.current.length - 1;

    for (let i = 0; i < totalSegments; i++) {
      const start = letterSegmentsRef.current[i];
      const end = letterSegmentsRef.current[i + 1];
      if (isSegmentTraced(start, end)) {
        tracedSegments++;
      }
    }

    const newCompletionPercentage = Math.round(
      (tracedSegments / totalSegments) * 100
    );
    setCompletionPercentage(newCompletionPercentage);

    if (newCompletionPercentage === 100 && !isLetterTraced) {
      setIsLetterTraced(true);
    }
  };

  const isSegmentTraced = (start: Point, end: Point): boolean => {
    const segmentLength = distance(start, end);
    let tracedLength = 0;

    for (const path of paths) {
      const points = path.split(/(?=[ML])/).flatMap((cmd) => {
        const [, x, y] = cmd.match(/[ML]?\s*([\d.]+),\s*([\d.]+)/) || [];
        return x && y ? [{ x: parseFloat(x), y: parseFloat(y) }] : [];
      });

      for (let i = 1; i < points.length; i++) {
        const prevPoint = points[i - 1];
        const currentPoint = points[i];

        if (
          isPointNearLine(prevPoint, start, end) &&
          isPointNearLine(currentPoint, start, end)
        ) {
          tracedLength += distance(prevPoint, currentPoint);
        }
      }
    }

    return tracedLength >= segmentLength * 0.8;
  };

  const isPointNearLine = (
    point: Point,
    lineStart: Point,
    lineEnd: Point
  ): boolean => {
    const d1 = distance(lineStart, point);
    const d2 = distance(lineEnd, point);
    const lineLength = distance(lineStart, lineEnd);
    const buffer = TRACING_TOLERANCE;
    return Math.abs(d1 + d2 - lineLength) < buffer;
  };

  const distance = (point1: Point, point2: Point): number => {
    return Math.sqrt(
      Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
    );
  };

  useEffect(() => {
    setPaths([]);
    setCurrentPath("");
    setCompletionPercentage(0);
    setIsLetterTraced(false);
  }, [letter]);

  console.log({ isLetterTraced });

  return (
    <View {...panResponder.panHandlers}>
      <Svg height={HEIGHT} width={WIDTH}>
        <Path
          d={letterPaths[letter]}
          fill="none"
          stroke={strokeColor}
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {paths.map((path, index) => (
          <Path
            key={index}
            d={path}
            fill="none"
            stroke={activeColor}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
        {currentPath && (
          <Path
            d={currentPath}
            fill="none"
            stroke={activeColor}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </Svg>
    </View>
  );
};

export default AlphabetTracing;
