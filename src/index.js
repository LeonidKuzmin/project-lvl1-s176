import readlineSync from 'readline-sync';

export const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default (rules = '', questionAndAnswerGenerator = undefined) => {
  console.log(`Welcome to the Brain Games!${rules}`);

  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);

  if (questionAndAnswerGenerator === undefined) {
    return;
  }

  const maxAttempts = 3;
  for (let i = 0; i < maxAttempts; i += 1) {
    const qa = questionAndAnswerGenerator();
    const question = qa[0];
    const correctAnswer = qa[1];
    const usersAnswer = readlineSync.question(`Question: ${question}\nYour answer: `).trim();

    if (usersAnswer !== correctAnswer) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};
