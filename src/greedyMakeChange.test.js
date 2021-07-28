const greedyMakeChange = require("./greedyMakeChange");

describe("Greedy Change Making", () => {
  test("20 dollars", () => {
    expect(greedyMakeChange(20)).toEqual([0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
  });
  test("21 dollars", () => {
    expect(greedyMakeChange(21)).toEqual([0, 0, 1, 0, 0, 1, 0, 0, 0, 0]);
  });
  test("21.26 dollars", () => {
    expect(greedyMakeChange(21.26)).toEqual([0, 0, 1, 0, 0, 1, 1, 0, 0, 1]);
  });
  test("121.26 dollars", () => {
    expect(greedyMakeChange(121.26)).toEqual([1, 0, 1, 0, 0, 1, 1, 0, 0, 1]);
  });
  test("101.26 dollars", () => {
    expect(greedyMakeChange(101.26)).toEqual([1, 0, 0, 0, 0, 1, 1, 0, 0, 1]);
  });
});
