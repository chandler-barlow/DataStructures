function Huffman() {}
Huffman.prototype.findCharacterFrequencies = (s) => {
  let res = {};
  for (var i = 0; i < s.length; i++) {
    if (res[s[i]]) {
      res[s[i]]++;
    } else {
      res[s[i]] = 1;
    }
  }
  return res;
};

module.exports = Huffman;
