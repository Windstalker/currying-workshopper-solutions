function curry(fn) {
  let arity = fn.length;

  return function curried(...args) {
    if (args.length < arity) {
      return (...nextArgs) =>
        curried(...args, ...nextArgs);
    }

    return fn(...args)
  };
}

module.exports = curry;
