const LCS = require("./LCS");
describe("Longest Common Substring", () => {
  test("ABBA compared to ACCA", () => {
    expect(LCS("ABBA", "ACCA")).toEqual(2);
  });
  test("DFFGF compared to TFGT", () => {
    expect(LCS("DFFGF", "TFGT")).toEqual(2);
  });
  test("A compared to B", () => {
    expect(LCS("A", "B")).toEqual(0);
  });
  test("A compared to A", () => {
    expect(LCS("A", "A")).toEqual(1);
  });
  test("ABBA compared ABBA", () => {
    expect(LCS("ABBA", "ABBA")).toEqual(4);
  });
  test("ABBAF compared to ABAF", () => {
    expect(LCS("ABBAF", "ABAF")).toEqual(4);
  });
  test("TCGCTA compared to GTGCA", () => {
    expect(LCS("GTGCA", "TCGCTA")).toEqual(4);
  });
});
