function LCS(s1, s2) {
  const max = (a, b) => (a > b ? a : b);
  let cache = new Array(s1.length + 1)
    .fill(0)
    .map(() => new Array(s2.length + 1).fill(0));
  for (var i = 0; i <= s1.length; i++) {
    for (var j = 0; j <= s2.length; j++) {
      if (i != 0 && j != 0) {
        if (s1[i - 1] === s2[j - 1]) {
          cache[i][j] = cache[i - 1][j - 1] + 1;
        } else {
          cache[i][j] = max(cache[i - 1][j], cache[i][j - 1]);
        }
      }
    }
  }
  return cache[s1.length][s2.length];
}
module.exports = LCS;
