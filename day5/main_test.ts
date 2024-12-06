import { assertEquals } from "@std/assert";
import { sortPages, part1, part2 } from "./main.ts";

const INPUT = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;

Deno.test("part1", () => {
  assertEquals(part1(INPUT), 143);
});

Deno.test("Process Part 1", async () => {
  const input = await Deno.readTextFile("input.txt");
  console.log(`Result: ${part1(input)}`);
});

Deno.test("part2", () => {
  assertEquals(part2(INPUT), 123);
});

Deno.test("Re-Order", () => {

  const updateNums = [75, 97, 47, 61, 53];
  const [rules] = INPUT.split("\n\n");
  const ruleMap = new Map<number, Set<number>>();

  rules.split("\n").forEach(rule => {
    const [before, after] = rule.split('|').map(Number);
    if (!ruleMap.has(before)) {
      ruleMap.set(before, new Set());
    }
    ruleMap.get(before)?.add(after);
  });

  console.log(sortPages(ruleMap, updateNums));

  assertEquals(sortPages(ruleMap, updateNums), [97, 75, 47, 61, 53]);

});

Deno.test("Test Part 2", () => {

});

Deno.test("Process Part 2", async () => {
  const input = await Deno.readTextFile("input.txt");
  console.log(`Result: ${part2(input)}`);
});