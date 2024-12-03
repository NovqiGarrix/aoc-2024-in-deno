import { assertEquals } from "@std/assert";
import { processTask1, processTask2 } from "./main.ts";

const INPUT = `3   4
4   3
2   5
1   3
3   9
3   3`;

Deno.test("task1", () => {
  assertEquals(processTask1(INPUT), 11);
})

Deno.test("task2", () => {
  assertEquals(processTask2(INPUT), 31);
})

Deno.test("processTask1WithInput", () => {
  const input = Deno.readTextFileSync("input.txt");
  console.log(processTask1(input));
})

Deno.test("processTask2WithInput", () => {
  const input = Deno.readTextFileSync("input.txt");
  console.log(processTask2(input));
});