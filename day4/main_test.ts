import { assertEquals } from "@std/assert";
import { part1, part2 } from "./main.ts";

const INPUT = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

Deno.test("Test Part 1", () => {
  const grid = INPUT.split("\n").map((line) => line.split(""));
  assertEquals(part1(grid), 18);
});

Deno.test("Process Part 1", async () => {
  const input = await Deno.readTextFile("input.txt");
  const grid = input.split("\n").map((line) => line.split(""));
  console.log(`Part 1: ${part1(grid)}`);
})

Deno.test("Test Part 2", () => {
  const grid = INPUT.split("\n").map((line) => line.split(""));
  assertEquals(part2(grid), 9);
});

Deno.test("Process Part 2", async () => {
  const input = await Deno.readTextFile("input.txt");
  const grid = input.split("\n").map((line) => line.split(""));
  console.log(`Part 2: ${part2(grid)}`);
});