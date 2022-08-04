import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const rounds = 3;

  for (let i = 1; i <= rounds; i += 1) {
    const number = getRandomNumber(1, 99);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isEven = (num) => num % 2 === 0;
    const rightAnswer = (isEven(number) ? 'yes' : 'no');

    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default evenGame;
