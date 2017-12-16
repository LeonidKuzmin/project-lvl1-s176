import greeting, { randomInt, game } from '..';

export default () => {
  const codeOperAdd = 0;
  const codeOperSub = 1;
  const codeOperMul = 2;

  let firstArg;
  let secondArg;
  let codeOper;
  let correctAnswer;

  const questionGenerator = () => {
    firstArg = randomInt(0, 100);
    secondArg = randomInt(0, 100);
    codeOper = randomInt(0, 3);
    if (codeOper === codeOperAdd) {
      correctAnswer = firstArg + secondArg;
      return `${firstArg} + ${secondArg}`;
    }
    if (codeOper === codeOperSub) {
      correctAnswer = firstArg - secondArg;
      return `${firstArg} - ${secondArg}`;
    }
    if (codeOper === codeOperMul) {
      correctAnswer = firstArg * secondArg;
      return `${firstArg} * ${secondArg}`;
    }
    return 'Error: unsupported code of operation!';
  };

  const isCorrectAnswer = (question, answer) => {
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  };

  const username = greeting('\nWhat is the result of the expression?');
  const maxAttempts = 3;
  game(questionGenerator, isCorrectAnswer, maxAttempts, username);
};
