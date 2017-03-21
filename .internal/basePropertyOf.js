/**
 * `propertyOf` 的基本实现不支持深层路径
 *
 * @private
 * @param {Object} object 要查询的对象
 * @returns {Function} 返回新的访问器函数
 */
function basePropertyOf(object) {
  return (key) => object == null ? undefined : object[key];
}

export default basePropertyOf;
