/**
 * 用于值的转换
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 *
 */
const nativeObjectToString = Object.prototype.toString;

/**
 * 使用 `Object.prototype.toString` 将 `value` 转换为字符串
 *
 * @private
 * @param {*} value 要转换的值
 * @returns {string} 返回转换的字符串
 */
function objectToString(value) {
  return nativeObjectToString.call(value)
}

export default objectToString;
