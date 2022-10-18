const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function isNumeric(num) {
  return !isNaN(num);
}

function transform(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  let arrNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      (typeof arr[i] === "number") |
      (typeof arr[i] === "object") |
      (typeof arr[i] === "boolean") |
      isNumeric(arr[i])
    ) {
      arrNum.push(arr[i]);
    } /*else if (arr[i] === "--double-next") {
      arrNum.push(arr[i + 1]);
    } else if (arr[i] === "--double-prev") {
      arrNum.push(arr[i - 1]);
    } else if (arr[i] === "--discard-next") {
      i += 1; //2
    } else if (arr[i] === "--discard-prev") {
      //--i;
      //arr[i] = String(arr[i] + "qwe");

    }*/
  }
  return arrNum;
}

transform([1, 2, 3, "--double-next", 1337, "--discard-prev", 4, 5]); //=> [1, 2, 3, 4, 4, 5]
module.exports = {
  transform,
};

//throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
