import greeting, { randomInt, greatestCommonDivisor, game } from '..';

export default () => {
  let firstArg;
  let secondArg;

  const questionGenerator = () => {
    const base = randomInt(0, 30);
    firstArg = base * randomInt(0, 50);
    secondArg = base * randomInt(0, 50);
    return `${firstArg} ${secondArg}`;
  };

  const isCorrectAnswer = (question, answer) => {
    const correctAnswer = greatestCommonDivisor(firstArg, secondArg).toString();

    if (answer === correctAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  };

  const username = greeting('\nFind the greatest common divisor of given numbers.');
  const maxAttempts = 3;
  game(questionGenerator, isCorrectAnswer, maxAttempts, username);
};
