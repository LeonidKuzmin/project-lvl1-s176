import greeting, { randomInt, isEven, game } from '..';

export default () => {
  const questionGenerator = () => randomInt(0, 100);

  const isCorrectAnswer = (question, answer, answerWhenEven = 'yes', answerWhenOdd = 'no') => {
    if (isEven(question)) {
      if (answer === answerWhenEven) {
        console.log('Correct!');
        return true;
      }
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerWhenEven}'.`);
      return false;
    }

    if (answer === answerWhenOdd) {
      console.log('Correct!');
      return true;
    }

    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerWhenOdd}'.`);
    return false;
  };

  const username = greeting('\nAnswer "yes" if number even otherwise answer "no".');
  const maxAttempts = 3;
  game(questionGenerator, isCorrectAnswer, maxAttempts, username);
};
