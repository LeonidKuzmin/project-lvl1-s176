import gameEngine from '..';
import { randomInt, termOfArithmeticProgression } from '../math_lib';

export default () => {
  const questionAndAnswerGenerator = () => {
    let question = '';
    let answer = '';

    const initialTermValue = randomInt(0, 20);
    const commonDifference = randomInt(1, 10);
    const progressionLength = 10;
    const gapPosition = randomInt(0, progressionLength);

    for (let i = 0; i < progressionLength; i += 1) {
      const termValue = termOfArithmeticProgression(initialTermValue, commonDifference, i + 1);
      if (i === gapPosition) {
        question = `${question}.. `;
        answer = termValue.toString();
      } else {
        question = `${question}${termValue} `;
      }
    }

    return [question, answer];
  };

  gameEngine('What number is missing in this progression?', questionAndAnswerGenerator);
};
