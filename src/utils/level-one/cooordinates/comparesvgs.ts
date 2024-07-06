// @ts-nocheck
// CoordinateArrayComparison.ts

class CoordinateArrayComparison {
  private static readonly TOLERANCE = 200;

  /**
   * Compares two arrays of coordinate arrays using integer values.
   * Coordinates are considered equal if their difference is less than 150.
   * @param coords1 First array of coordinates
   * @param coords2 Second array of coordinates
   * @returns boolean indicating whether the coordinate arrays are considered equal
   */
  public static compareCoordinateArrays(
    coords1: number[][],
    coords2: number[][]
  ): boolean {
    if (coords1.length !== coords2.length) {
      return false;
    }

    for (let i = 0; i < coords1.length; i++) {
      if (coords1[i].length !== coords2[i].length) {
        return false;
      }

      for (let j = 0; j < coords1[i].length; j++) {
        const intDiff = Math.abs(
          Math.round(coords1[i][j]) - Math.round(coords2[i][j])
        );
        if (intDiff >= this.TOLERANCE) {
          return false;
        }
      }
    }

    return true;
  }

  /**
   * Calculates the maximum integer difference between two coordinate arrays.
   * @param coords1 First array of coordinates
   * @param coords2 Second array of coordinates
   * @returns Maximum integer difference found, or null if arrays are incomparable
   */
  public static getMaxDifference(
    coords1: number[][],
    coords2: number[][]
  ): number | null {
    if (coords1.length !== coords2.length) {
      return null;
    }

    let maxDiff = 0;

    for (let i = 0; i < coords1.length; i++) {
      if (coords1[i].length !== coords2[i].length) {
        return null;
      }

      for (let j = 0; j < coords1[i].length; j++) {
        const intDiff = Math.abs(
          Math.round(coords1[i][j]) - Math.round(coords2[i][j])
        );
        if (intDiff > maxDiff) {
          maxDiff = intDiff;
        }
      }
    }

    return maxDiff;
  }

  /**
   * Finds all coordinates that differ by 150 or more, using integer values.
   * @param coords1 First array of coordinates
   * @param coords2 Second array of coordinates
   * @returns Array of objects containing the differing coordinates and their indices
   */
  public static findDifferences(
    coords1: number[][],
    coords2: number[][]
  ): { index: number; coord1: number[]; coord2: number[] }[] {
    const differences = [];

    if (coords1.length !== coords2.length) {
      return differences;
    }

    for (let i = 0; i < coords1.length; i++) {
      if (coords1[i].length !== coords2[i].length) {
        continue;
      }

      let diffFound = false;
      for (let j = 0; j < coords1[i].length; j++) {
        const intDiff = Math.abs(
          Math.round(coords1[i][j]) - Math.round(coords2[i][j])
        );
        if (intDiff >= this.TOLERANCE) {
          diffFound = true;
          break;
        }
      }

      if (diffFound) {
        differences.push({
          index: i,
          coord1: coords1[i].map(Math.round),
          coord2: coords2[i].map(Math.round),
        });
      }
    }

    return differences;
  }
}

export default CoordinateArrayComparison;
