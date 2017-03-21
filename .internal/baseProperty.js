/**
 * `property` 的基本实现，不支持深层路径
 *
 * @private
 * @param {string} key 获得属性的 key
 * @returns {Function} 返回新的访问器函数
 */
function baseProperty(key) {
  return (object) => object == null ? undefined : object[key];
}

export default baseProperty;
