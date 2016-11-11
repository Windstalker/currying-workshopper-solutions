module.exports = {
  caller: function (obj, fn, ...args) {
    return fn.call(obj, ...args);
  },
  applier: function (obj, fn, args) {
    return fn.apply(obj, args);
  }
};
