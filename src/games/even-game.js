import gameEngine from '..';
import { randomInt, isEven } from '../math_lib';

export default () => {
  const questionAndAnswerGenerator = () => {
    const question = randomInt(0, 100);

    const answer = isEven(question) ? 'yes' : 'no';

    return [question, answer];
  };

  gameEngine('Answer "yes" if number even otherwise answer "no".', questionAndAnswerGenerator);
};
