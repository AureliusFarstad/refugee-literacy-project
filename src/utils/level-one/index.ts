/**
 * 1. shuffle the options available
 * 2. pick 2 of them and adds the correct answer at the end,
 * 3. shuffle the options again
 */

/**
input
 [
  {"id": "optionA", "title": "A"},
  {"id": "optionT", "title": "T"},
  {"id": "optionP", "title": "P"},
  {"id": "optionI", "title": "I"},
  {"id": "optionN", "title": "N"}
]
  and

correctAnswer {"id": "optionS", "title": "S"}

output

[
{"id": "optionA", "title": "A"},
{"id": "optionT", "title": "T"},
{"id": "optionS", "title": "S"}
]


*/
export const getOptionsToRender = (
  options: IOption[],
  _correctAnswer: IOption
): IOption[] => {
  const shuffledOptions = options.sort(() => Math.random() - 0.5);
  const _shuffledOptionsWithCorrectAnswer = [
    ...shuffledOptions.slice(0, 2),
    _correctAnswer,
  ].sort(() => Math.random() - 0.5);
  return _shuffledOptionsWithCorrectAnswer;
};

/**
 * Shuffle letters
 */

export const shuffleLetters = (letters: string[]) => {
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters;
};
