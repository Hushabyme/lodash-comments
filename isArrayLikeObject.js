import isArrayLike from './isArrayLike.js'
import isObjectLike from './isObjectLike.js'

/**
 * 这个方法就像 `isArrayLike`，除了它也检查 `value` 是否是一个对象
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 是一个数组类对象，返回 `true`，否则返回 `false`
 *
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value)
}

export default isArrayLikeObject;

/*
*
* Test
*
* */

// test
console.log(isArrayLikeObject({}));  // false
console.log(isArrayLikeObject({a: 1}));  // false
console.log(isArrayLikeObject([1, 2, 3]));  // true
console.log(isArrayLikeObject('ABC'));  // false
