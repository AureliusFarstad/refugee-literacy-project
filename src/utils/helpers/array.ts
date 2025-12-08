/**
 * Shuffles an array in place.
 * @param array The array to shuffle.
 * @returns The shuffled array.
 */
export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Generates a specified number of unique random options for a multiple choice question.
 *
 * @param allOptions - An array of all possible options.
 * @param correctAnswer - The correct answer that must be included in the options.
 * @param optionsCount - The total number of options to generate.
 * @returns An array of options including the correct answer, shuffled.
 */
export function generateMultipleChoiceOptions(
  allOptions: string[],
  correctAnswer: string,
  optionsCount: number,
): string[] {
  // Filter out the correct answer to create a pool of incorrect options
  const incorrectOptions = allOptions.filter(
    (option) => option !== correctAnswer,
  );

  // Shuffle the incorrect options to randomize selection
  const shuffledIncorrectOptions = shuffleArray([...incorrectOptions]);

  // Select the required number of incorrect options
  const selectedIncorrectOptions = shuffledIncorrectOptions.slice(
    0,
    optionsCount - 1,
  );

  // Combine with the correct answer and shuffle again
  const finalOptions = shuffleArray([
    ...selectedIncorrectOptions,
    correctAnswer,
  ]);

  return finalOptions;
}
