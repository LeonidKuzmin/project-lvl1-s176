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

export const game = (questionGenerator, answerChecker, repeats, name) => {
  for (let i = 0; i < repeats; i += 1) {
    const question = questionGenerator();
    const answer = writeAndReadline(`Question: ${question}\nYour answer: `);
    if (!answerChecker(question, answer)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
