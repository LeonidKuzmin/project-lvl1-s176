import gameEngine, { randomInt } from '..';

export default () => {
  const questionAndAnswerGenerator = () => {
    const balanceNumber = (sNumber) => {
      const sumOfDigits = s => s.split('').reduce((a, b) => +a + +b);

      const sum = sumOfDigits(sNumber);
      const baseDigit = Math.floor(sum / sNumber.length);
      const edge = sNumber.length - (sum % sNumber.length);

      let result = '';
      for (let i = 0; i < sNumber.length; i += 1) {
        const nextDigit = i < edge ? baseDigit : baseDigit + 1;
        result = `${result}${nextDigit}`;
      }
      return result;
    };

    const question = randomInt(0, 10000).toString();
    const answer = balanceNumber(question);
    return [question, answer];
  };

  gameEngine('\nBalance the given number.', questionAndAnswerGenerator);
};
