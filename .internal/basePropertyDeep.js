import baseGet from './baseGet.js'

/**
 * `baseProperty` 的专门版本，支持深层路径
 *
 * @private
 * @param {Array|string} path 获取属性的路径
 * @returns {Function} 返回新的访问器函数
 */
function basePropertyDeep(path) {
  return (object) => baseGet(object, path)
}

export default basePropertyDeep;
