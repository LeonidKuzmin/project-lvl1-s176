import gameEngine, { randomInt } from '..';

export default () => {
  const questionAndAnswerGenerator = () => {
    let question;
    let answer;

    const firstArg = randomInt(0, 100);
    const secondArg = randomInt(0, 100);

    const codeOperAdd = 0;
    const codeOperSub = 1;
    const codeOper = randomInt(0, 3);

    switch (codeOper) {
      case codeOperAdd:
        question = `${firstArg} + ${secondArg}`;
        answer = firstArg + secondArg;
        break;
      case codeOperSub:
        question = `${firstArg} - ${secondArg}`;
        answer = firstArg - secondArg;
        break;
      default:
        question = `${firstArg} * ${secondArg}`;
        answer = firstArg * secondArg;
    }

    return [question, answer.toString()];
  };

  gameEngine('\nWhat is the result of the expression?', questionAndAnswerGenerator);
};
