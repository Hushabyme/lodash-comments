import baseGetTag from './.internal/baseGetTag.js'
import isObjectLike from './isObjectLike.js'

/** 用于解析反编译的函数源 */
const funcToString = Function.prototype.toString;

/** 用于检查对象的自身属性 */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/** 用于测量 `Object` 构造函数 */
const objectCtorString = funcToString.call(Object);

/**
 * 检查 `value` 是否是一个普通对象，也就是由 `Object` 构造函数或者一个带有 `null' 的 `[[Prototype]]`
 *
 * @since 0.8.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 是一个普通对象，返回 `true`，否则为 `false`
 * @example
 *
 * function Foo() {
 *   this.a = 1
 * }
 *
 * isPlainObject(new Foo)
 * // => false
 *
 * isPlainObject([1, 2, 3])
 * // => false
 *
 * isPlainObject({ 'x': 0, 'y': 0 })
 * // => true
 *
 * isPlainObject(Object.create(null))
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != '[object Object]') {
    return false
  }
  const proto = Object.getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString
}

export default isPlainObject;

/**
*
* Test
*
* */

// test1
const obj = {
  a: 1
};

const obj1 = Object.create(obj, {
  b: {
    value: 1
  }
});

console.log(Object.getPrototypeOf(obj1));  // {a: 1}
console.log(Object.getPrototypeOf(obj));  // Object

// 我们这里加深了 Object.getPrototypeOf 这个方法的使用
