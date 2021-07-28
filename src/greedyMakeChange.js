function greedyMakeChange(
  amount,
  currency = [100, 50, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]
) {
  // Create a result array the same length as the currency Array
  let res = new Array(currency.length).fill(0);
  for (var i = 0; i < currency.length; i++) {
    res[i] = Math.floor(amount / currency[i]);
    amount -= currency[i] * res[i];
    // Break if change already made
    if (amount === 0) break;
  }
  return res;
}
