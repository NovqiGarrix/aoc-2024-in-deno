import { assertEquals } from "@std/assert";
import { processPart1, processPart2 } from "./main.ts";

const INPUT = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

Deno.test("testPart1", () => {
  assertEquals(processPart1(INPUT), 2);
});

Deno.test("testPart2", () => {
  assertEquals(processPart2(INPUT), 4);
});

Deno.test("proccessPart1", async () => {
  const input = await Deno.readTextFile('input.txt');
  console.log("Result: ", processPart1(input));
});

Deno.test("proccessPart2", async () => {
  const input = await Deno.readTextFile('input.txt');
  console.log("Result: ", processPart2(input));
});