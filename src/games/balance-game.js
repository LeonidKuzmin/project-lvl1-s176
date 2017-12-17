import gameEngine from '..';
import { randomInt, balanceNumber } from '../math_lib';

export default () => {
  const questionAndAnswerGenerator = () => {
    const question = randomInt(0, 10000).toString();
    const answer = balanceNumber(question);
    return [question, answer];
  };

  gameEngine('Balance the given number.', questionAndAnswerGenerator);
};
