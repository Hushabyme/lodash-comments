/**
 * 检查 `path` 是否是 `object` 的直接或继承属性
 *
 * @since 4.0.0
 * @category Object
 * @param {Object} object 要检查的对象
 * @param {string} key 要检查的键
 * @returns {boolean} 如果 `key` 存在，返回 `true`，否则返回 `false`
 * @see has, hasPath, hasPathIn
 * @example
 *
 * const object = create({ 'a': create({ 'b': 2 }) })
 *
 * hasIn(object, 'a')
 * // => true
 *
 * hasIn(object, 'b')
 * // => false
 */
function hasIn(object, key) {
  return object != null && key in Object(object);
}

export default hasIn;
