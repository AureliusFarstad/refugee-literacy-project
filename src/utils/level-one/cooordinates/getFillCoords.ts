// @ts-nocheck
import getCoordsMax from "./getCoordsMax";
import inside from "./inside";

export default function getFillCoords(flatCoords, numPoints) {
  const pointsInShape = [];
  let insidePoints;

  const xMax = getCoordsMax(flatCoords, 0);
  const yMax = getCoordsMax(flatCoords, 1);

  while (pointsInShape.length < numPoints) {
    let points = [Math.random() * xMax, Math.random() * yMax];
    insidePoints = inside(points, flatCoords);
    if (insidePoints) {
      pointsInShape.push(points);
    }
  }
  return pointsInShape;
}
