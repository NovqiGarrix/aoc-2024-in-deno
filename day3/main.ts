const mulRegex = /mul\(\d+,\d+\)/g;

export function processPart1(input: string): number {
  const matches = input.match(mulRegex);
  if (!matches) return 0;

  let total = 0;

  for (const mul of matches) {
    const [digitX, digitY] = mul.match(/\d+/g)?.map(Number) ?? [0, 0];
    total += digitX * digitY;
  }

  return total;
}

const mulWithDoAndDontInstructionRegex = /mul\(\d+,\d+\)|do\(\)|don\'t\(\)/g;

export function processPart2(input: string): number {
  const matches = input.match(mulWithDoAndDontInstructionRegex);
  if (!matches) return 0;

  let total = 0;

  const doMatches: Array<string> = [];

  for (let index = 0; index < matches.length; index++) {
    const curr = matches[index];

    if (curr.startsWith("don")) {
      const nearestDoIndex = matches.slice(index).findIndex((match) => match.startsWith("do()"));

      // There is no upcoming do()
      if (nearestDoIndex === -1) {
        break;
      }

      index = nearestDoIndex + index;
    } else {
      if (curr.startsWith("do()")) continue;
      doMatches.push(curr);
    }

  }

  for (const mul of doMatches) {
    const [digitX, digitY] = mul.match(/\d+/g)?.map(Number) ?? [0, 0];
    total += digitX * digitY;
  }

  return total;
}