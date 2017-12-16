import gameEngine, { randomInt } from '..';

export default () => {
  const questionAndAnswerGenerator = () => {
    const question = randomInt(0, 100);

    const isEven = x => x % 2 === 0;
    const answer = isEven(question) ? 'yes' : 'no';

    return [question, answer];
  };

  gameEngine('\nAnswer "yes" if number even otherwise answer "no".', questionAndAnswerGenerator);
};
