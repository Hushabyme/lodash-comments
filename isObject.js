/**
 * 检查 `value` 是否为 `Object`(例如：arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 是一个对象则返回 `true`，否则返回 `false`
 *
 */

function isObject(value) {
  const type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

export default isObject;

// 这里我们需要注意的是 regExp 它是一个对象，虽然我们平时都是使用字面量构建，就像这样： //
// 而实际上，当我们不知道要匹配或者测试的是什么字符串，或者说，需要动态匹配的话，就需要使用 new Regexp() 来创建
