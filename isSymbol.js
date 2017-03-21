import getTag from './.internal/getTag.js'

/**
 * 检查 `value` 是否被分类为 `Symbol` 基本类型或对象
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 是 symbol 则返回 `true`，否则返回 `false`
 *
 */
function isSymbol(value) {
  const type = typeof value;
  return type == 'symbol' || (type == 'object' && value != null && getTag(value) == '[object Symbol]');
}

export default isSymbol;

/**
*
* Test
*
* */

// 上面的函数需要一个 getTag() 方法，我们可以看到这个方法很长，有一些是我们不需要的
// 我们现在来重构一下，以满足我们自己的定制需求

function isSymbol1(value) {
  const type = typeof value;
  const getTag = Object.prototype.toString.call(this, value);
  return type === 'symbol' || (type === 'object' && value !== null && getTag(value) === '[object Symbol]');
}

// test
console.log(isSymbol1(Symbol.iterator));  // true
console.log(isSymbol1(Symbol('a')));  // true
console.log(isSymbol1('a'));  // false

const symbol = Symbol('a');
console.log(Object.prototype.toString.call(symbol));  // [object Symbol]

// 经过测试，没有问题
