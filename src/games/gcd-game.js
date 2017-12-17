import gameEngine from '..';
import { randomInt, greatestCommonDivisor } from '../math_lib';

export default () => {
  const questionAndAnswerGenerator = () => {
    const base = randomInt(0, 30);
    const firstArg = base * randomInt(0, 50);
    const secondArg = base * randomInt(0, 50);

    const question = `${firstArg} ${secondArg}`;
    const answer = greatestCommonDivisor(firstArg, secondArg).toString();
    return [question, answer];
  };

  gameEngine('Find the greatest common divisor of given numbers.', questionAndAnswerGenerator);
};
