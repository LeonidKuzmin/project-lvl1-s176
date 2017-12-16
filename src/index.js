import readlineSync from 'readline-sync';

const writeAndReadline = prompt => readlineSync.question(prompt);

const greeting = (instruction) => {
  console.log(`Welcome to the Brain Games!${instruction}`);
  const username = writeAndReadline('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};
export default greeting;

export const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const isEven = x => x % 2 === 0;

export const greatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return greatestCommonDivisor(b, a % b);
};

export const balanceNumber = (sNumber) => {
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

export const game = (questionGenerator, answerChecker, repeats, name) => {
  for (let i = 0; i < repeats; i += 1) {
    const question = questionGenerator();
    const answer = writeAndReadline(`Question: ${question}\nYour answer: `).trim();
    if (!answerChecker(question, answer)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
