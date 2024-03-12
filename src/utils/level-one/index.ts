/**
 * 1. shuffle the options available
 * 2. pick 3 of them and add the correct answer at the end,
 * 3. shuffle the options again
 */

export const getOptionsToRender = (
  options: IOption[],
  _correctAnswer: IOption
): IOption[] => {
  const shuffledOptions = options.sort(() => Math.random() - 0.5);
  const _shuffledOptionsWithCorrectAnswer = [
    ...shuffledOptions.slice(0, 3),
    _correctAnswer,
  ].sort(() => Math.random() - 0.5);
  return _shuffledOptionsWithCorrectAnswer;
};
