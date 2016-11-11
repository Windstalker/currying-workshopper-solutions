module.exports = (() => {
  let total = 0;
  return function sum(arg) {
    if (arguments.length < 1) {
      return total;
    }
    total += arg;
    return sum;
  }
})();
