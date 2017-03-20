/**
 * `isNaN` 的基础实现，但不支持 number 对象
 *
 * @private
 * @param {*} value 要检查的 value
 * @returns {boolean} 如果 `value` 是 `NaN` 返回 `true`， 否则返回 `false`
 */
function baseIsNaN(value) {
  return value !== value;
}

export default baseIsNaN;

// 何为 number 对象？也就是 Number() 的对象，而不是平时我们所创建的字面量形式

/**
*
* Test
*
* */

// 在我们平时的使用中，可以直接使用 isNaN 来判断一个是否为数值型

function isNaN(value) {
  return Number.isNaN(value);
}

// test
console.log(isNaN(1));  // true

// 注意我这里使用了 Number.isNaN() 而不是 isNaN() 方法
// 在 ES6 中，由于 isNaN() 是全局方法，这样不好，所以将其归类到了 Number 中
// 上面这样的写法 value !== value 也是没有问题的，但是，字符串也是可以使用它的，所以需要看情况使用
