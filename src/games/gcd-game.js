import gameEngine, { randomInt } from '..';

export default () => {
  const questionAndAnswerGenerator = () => {
    const greatestCommonDivisor = (a, b) => {
      if (b === 0) {
        return Math.abs(a);
      }
      return greatestCommonDivisor(b, a % b);
    };

    const base = randomInt(0, 30);
    const firstArg = base * randomInt(0, 50);
    const secondArg = base * randomInt(0, 50);

    const question = `${firstArg} ${secondArg}`;
    const answer = greatestCommonDivisor(firstArg, secondArg).toString();
    return [question, answer];
  };

  gameEngine('\nFind the greatest common divisor of given numbers.', questionAndAnswerGenerator);
};
