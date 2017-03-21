import isStrictComparable from './isStrictComparable.js'
import keys from '../keys.js'

/**
 * 获取 `object` 的属性名称、值和比较标志
 *
 * @private
 * @param {Object} object 要查询的对象
 * @returns {Array} 返回 `object` 匹配的数据
 */
function getMatchData(object) {
  const result = keys(object);
  let length = result.length;

  while (length--) {
    const key = result[length];
    const value = object[key];
    result[length] = [key, value, isStrictComparable(value)]
  }
  return result;
}

export default getMatchData;


/**
*
* Test
*
* */

function matchData(obj) {
  const result = Object.keys(obj);
  let length = result.length;

  while (length--) {
    const key = result[length];
    const value = obj[key];
    result[length] = [key, value];
  }

  return result;
}

const obj = {
  a: 1,
  b: 2
};
console.log(matchData(obj));  // [ [ 'a', 1 ], [ 'b', 2 ] ]

// 此时我们可以看到 test 的结果是什么，如果我们想要实现这样的样式，将对象转换成一个数组来表示，那么就可以这样来写



