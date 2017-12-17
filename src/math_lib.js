export const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const isEven = x => x % 2 === 0;

export const greatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return greatestCommonDivisor(b, a % b);
};

export const termOfArithmeticProgression = (initialTerm, commonDifference, termNumber) =>
  initialTerm + (commonDifference * (termNumber - 1));

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

export const isPrime = (x) => {
  if (x < 2) {
    return false;
  }
  for (let i = 2, edge = Math.sqrt(x); i <= edge; i += 1) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};
