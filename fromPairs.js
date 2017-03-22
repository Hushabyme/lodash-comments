/**
 * `toPairs` 方法的返回一个由键值 `pair` 组成的对象
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * fromPairs([['a', 1], ['b', 2]])
 * // => { 'a': 1, 'b': 2 }
 */
function fromPairs(pairs) {
  let index = -1
  const length = pairs == null ? 0 : pairs.length
  const result = {}

  while (++index < length) {
    const pair = pairs[index]
    result[pair[0]] = pair[1]
  }
  return result
}

export default fromPairs

/*
*
* 思考：
*
* 目前为止，还没有想到过这个
*
* */

const arr = [['a', 1]];
console.log(arr[0][0]);  // a

// 经过这样的测试，我觉得可以自己来创建一个这样的函数

function pairs(array) {
  let index = -1;
  const length = array.length;
  const obj = {};

  while (++index < length) {
    obj[array[index][0]] = array[index][1];
  }

  return obj;
}

const arr1 = [['a', 1], ['b', 2], ['c', 3]];
console.log(pairs(arr1));  // { a: 1, b: 2, c: 3 }

// 可以看得出来，还是不难的对吧，当你认真的分析过 `lodash` 的源码后，这样的函数你也能写出来
