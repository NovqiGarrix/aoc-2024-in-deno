import { assertEquals } from "@std/assert";
import { processPart1, processPart2 } from "./main.ts";

Deno.test("testPart1", () => {

  assertEquals(processPart1(`xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`), 161);

});

Deno.test("Process Part 1", async () => {

  const input = await Deno.readTextFile('input.txt');
  console.log("Result part 1:", processPart1(input));

});

Deno.test("testPart2", () => {
  assertEquals(processPart2(`xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`), 48);
});

Deno.test("Process Part 2", async () => {

  const input = await Deno.readTextFile('input.txt');
  console.log("Result part 1:", processPart2(input));

});