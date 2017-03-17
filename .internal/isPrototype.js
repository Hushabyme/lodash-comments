/** 使用的内置方法 */
const objectProto = Object.prototype;

/**
 * 检查 `value` 是否可能是一个原型对象
 *
 * @private
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 是原型返回 `true`，否则返回 `false`
 */

function isPrototype(value) {
  // 这里的 Ctor 是 constructor(构造函数) 的缩写
  const Ctor = value && value.constructor;
  const proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

export default isPrototype

/**
 *
 * Test
 *
 */

// test1
const a = {a: 1};
const b = [1, 2];
const c = function (a, b) {
  return a + b;
};

console.log(a.constructor);  // [Function: Object]
console.log(b.constructor);  // [Function: Array]
console.log(c.constructor);  // [Function: Function]

// 经测试，在浏览器中的显示结果形式为：function Object() { [native code] }
// 不过这并不重要，意思是一样的

// 重点：也就是说，我们的 constructor 最终是以函数的形式表示的
// 这也就是为什么，上面要使用 typeof x === 'function' 的原因

