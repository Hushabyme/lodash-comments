import arrayLikeKeys from './.internal/arrayLikeKeys.js'
import baseKeys from './.internal/baseKeys.js'
import isArrayLike from './isArrayLike.js'

/**
 * 创建一个自身的可枚举属性名为 `object` 的数组
 *
 * **注释:** 非对象值强制转换为对象，参考以下链接
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object 要查询的对象
 * @returns {Array} 返回属性名组成的数组
 * @see values, valuesIn
 *
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

export default keys


/**
 *
 * 在这里我们要学习到 Object.key() 方法，这个方法是：返回一个由给定对象的自身可枚举属性组成的数组
 * 它与 for-in 的最大区别就在于：for-in 会遍历到其原型链上课枚举的对象
 *
 * 那么什么是可枚举的对象？可枚举的对象就是指对象的 enumerable 属性设置为 true 的值
 *
 * 例如：Object.defineProperty({}, 'a', {value: 1, enumerable: true})
 *
 *
 *
 **/


/**
 *
 * Test
 *
*/

const keys1 = function (object) {
  return Object.keys(object);
};

// test1
console.log(keys1({a: 1, b: 2}));  // [ 'a', 'b' ]

// test2
const fn = function () {
  this.a = 1;
  this.b = 2;
};

const fn1 = new fn();
console.log(keys1(fn1));  // [ 'a', 'b' ]

// 总结：也就是说，本方法 keys 就是用来重写了 Object.keys() 方法，我们平时在写的时候使用这个函数就可以了
