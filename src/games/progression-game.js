import gameEngine, { randomInt } from '..';

export default () => {
  const questionAndAnswerGenerator = () => {
    let question = '';
    let answer = '';

    const initialTermValue = randomInt(0, 20);
    const commonDifference = randomInt(1, 10);
    const progressionLength = 10;
    const gapPosition = randomInt(0, progressionLength);

    for (let i = 0; i < progressionLength; i += 1) {
      const currentTermValue = initialTermValue + (i * commonDifference);
      if (i === gapPosition) {
        question = `${question}.. `;
        answer = currentTermValue.toString();
      } else {
        question = `${question}${currentTermValue} `;
      }
    }

    return [question, answer];
  };

  gameEngine('\nWhat number is missing in this progression?', questionAndAnswerGenerator);
};
