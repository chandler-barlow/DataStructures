const Huffman = require("./huffman");

describe("Huffman tests", () => {
  test("Character frequency of aaa", () => {
    const huff = new Huffman();
    expect(huff.findCharacterFrequencies("aaa")).toMatchObject({ a: 3 });
  });
  test("Character frequency of aba", () => {
    const huff = new Huffman();
    expect(huff.findCharacterFrequencies("aab")).toMatchObject({ a: 2, b: 1 });
  });
  test("Character frequency of abc1", () => {
    const huff = new Huffman();
    expect(huff.findCharacterFrequencies("abc1")).toMatchObject({
      a: 1,
      b: 1,
      c: 1,
      1: 1,
    });
  });
});
