/**
 * 该函数很像 `Object.keys`，除了他包括继承而来的可枚举的对象
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 *
 * @private
 * @param {Object} object 要查询的对象
 * @returns {Array} 返回由属性名组成的数组
 */
function nativeKeysIn(object) {
  const result = [];
  if (object != null) {
    for (const key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

export default nativeKeysIn;

// 如果你还记得 Object.key() 和 in 操作符的区别，那么你就学会了，可以跳过这里了
