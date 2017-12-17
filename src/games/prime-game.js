import gameEngine from '..';
import { randomInt, isPrime } from '../math_lib';

export default () => {
  const questionAndAnswerGenerator = () => {
    const question = randomInt(1, 200);
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, answer];
  };

  gameEngine('Is this number prime?', questionAndAnswerGenerator);
};
