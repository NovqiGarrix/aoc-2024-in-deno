function parseInput(input: string) {

  const [rules, updates] = input.split("\n\n");

  return {
    rules: new Set(rules.split("\n")),
    updates: updates.split("\n")
  }

}

export function part1(input: string) {

  const { rules, updates } = parseInput(input);

  let countedMiddle = 0;

  for (const update of updates) {
    const updateNums = update.split(",").map(Number);

    let isInRightOrder = true;

    for (let index = 0; index < updateNums.length; index++) {
      const num = updateNums[index];

      if (index === updateNums.length - 1) {
        break;
      }

      if (!rules.has(`${num}|${updateNums[index + 1]}`)) {
        isInRightOrder = false;
      }
    }

    if (isInRightOrder) {
      const middleIndex = (updateNums.length - 1) / 2;
      const middle = updateNums[middleIndex];

      countedMiddle += middle;
    }

  }

  return countedMiddle;

}

export function sortPages(ruleMap: Map<number, Set<number>>, pages: number[]): number[] {
  return pages.sort((a, b) => {
    if (ruleMap.has(a) && ruleMap.get(a)?.has(b)) {
      return -1;
    } else if (ruleMap.has(b) && ruleMap.get(b)?.has(a)) {
      return 1;
    } else {
      return 0;
    }
  });
}

function reorderUpdates(updates: string[], rules: string[]): number[][] {
  const ruleMap = new Map<number, Set<number>>();

  rules.forEach(rule => {
    const [before, after] = rule.split('|').map(Number);
    if (!ruleMap.has(before)) {
      ruleMap.set(before, new Set());
    }
    ruleMap.get(before)?.add(after);
  });

  const reorderedUpdates: number[][] = [];

  updates.forEach((update) => {
    const pages = update.split(",").map(Number);

    // Just include any incorrectly ordered pages
    if (!isOrdered(pages, ruleMap)) {
      // reorder the pages
      const reorderedPages = sortPages(ruleMap, pages);
      reorderedUpdates.push(reorderedPages);
    }
  });

  return reorderedUpdates;
}

function isOrdered(pages: number[], ruleMap: Map<number, Set<number>>): boolean {
  for (let i = 0; i < pages.length - 1; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      if (ruleMap.has(pages[j]) && ruleMap.get(pages[j])?.has(pages[i])) {
        return false;
      }
    }
  }
  return true;
}

export function part2(input: string) {
  const { rules, updates } = parseInput(input);

  const orderedPages = reorderUpdates(updates, [...rules]);

  let countedMiddle = 0;

  for (let index = 0; index < orderedPages.length; index++) {
    const updates = orderedPages[index];

    const middleIndex = (updates.length - 1) / 2;
    const middle = updates[middleIndex];

    countedMiddle += middle;
  }

  return countedMiddle;
}