function isSafe(numbers: Array<number>) {
  if (numbers.some(x => Math.abs(x) > 3)) {
    return false;
  }
  return numbers.every(x => x > 0) || numbers.every(x => x < 0);
}

function canBeMadeSafe(numbers: Array<number>) {
  for (let index = 0; index < numbers.length; index++) {
    const left = numbers.slice(0, index); // Elements before the current index
    const right = numbers.slice(index + 1); // Elements after the current index
    const combined = [...left, ...right];
    const windows = combined.slice(0, -1).map((value, index) => combined[index + 1] - value);

    if (isSafe(windows)) {
      return true;
    }
  }

  return false;
}

export function processPart1(input: string): number {

  return input.split("\n")
    .map((line) => {
      const numbers = line.split(" ").map((s) => Number(s));
      const windows = numbers.slice(0, -1).map((num, index) => numbers[index + 1] - num);
      return isSafe(windows);
    }).filter(Boolean)
    .length;

}

export function processPart2(input: string): number {

  return input.split("\n")
    .map((line) => {
      const numbers = line.split(" ").map((s) => Number(s));
      return canBeMadeSafe(numbers);
    }).filter(Boolean)
    .length;

}