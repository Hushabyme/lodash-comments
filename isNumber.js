// import baseGetTag from './.internal/baseGetTag.js'
// import isObjectLike from './isObjectLike.js'

/**
 * 检查 `value` 是否类属于 `Number` 基础类型或者为 object
 *
 * **注意:** 不包括 `Infinity`, `-Infinity`, 以及 `NaN`,
 * 它们虽然属于 numbers，但要使用 `Number.isFinite` 方法
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 返回 `true` 如果 `value` 是 number，否则返回 `false`
 * @see isInteger, toInteger, toNumber
 * @example
 *
 * isNumber(3)
 * // => true
 *
 * isNumber(Number.MIN_VALUE)
 * // => true
 *
 * isNumber(Infinity)
 * // => true
 *
 * isNumber('3')
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == '[object Number]')
}

// export default isNumber

/*
*
* 思考：
*
* 我觉得来测试一下 Number.isFinite 这个方法好一点
* Number.isFinite 方法用于检测传入的值是否为一个有限数值
*
* */

console.log(Number.isFinite(Infinity));  // false
console.log(Number.isFinite(-Infinity));  // false
console.log(Number.isFinite(NaN));  // false
console.log(Number.isFinite(Math.pow(2, 53) - 1));  // true
