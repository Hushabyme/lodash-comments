import baseMean from './meanBy.js'

/**
 * 计算 `array` 中的值的平均值
 *
 * @since 4.0.0
 * @category Math
 * @param {Array} array 要迭代的数组
 * @returns {number} 返回平均值
 * @example
 *
 * mean([4, 2, 8, 6])
 * // => 5
 */
function mean(array) {
  return baseMean(array, (value) => value)
}

export default mean

/*
* 思考：
*
* 如果为了求平均值，应该还不至于构建这么多方法吧？我们自己动手来一个
* 当然，如果说为了构建一个健壮的算法，那应该将很多因素考虑进来，这里就不做了
*
* */

function arrayMean(array) {
  const total = array.reduce((a, b) => a + b, 0);
  const length = array.length;
  return total / length;
}

console.log(arrayMean([4, 2, 8, 6]));  // 5
console.log(arrayMean([1, 2, 3, 4, 5]));  // 3
