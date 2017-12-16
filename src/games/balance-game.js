import greeting, { randomInt, balanceNumber, game } from '..';

export default () => {
  const questionGenerator = () => randomInt(10, 10000).toString();

  const isCorrectAnswer = (question, answer) => {
    const correctAnswer = balanceNumber(question);

    if (answer === correctAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  };

  const username = greeting('\nBalance the given number.');
  const maxAttempts = 3;
  game(questionGenerator, isCorrectAnswer, maxAttempts, username);
};
