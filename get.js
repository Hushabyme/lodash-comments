import baseGet from './.internal/baseGet.js'

/**
 * 获取 `object` 的 `path` 的值。如果解析的值是 `undefined`，则会返回 `defaultValue`
 *
 * @since 3.7.0
 * @category Object
 * @param {Object} object 要查询的对象
 * @param {Array|string} path 获取属性的路径
 * @param {*} [defaultValue] 为 `undefined` 返回的值解析值.
 * @returns {*} 返回解析后的值
 * @see has, hasIn, set, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * get(object, 'a[0].b.c')
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c'])
 * // => 3
 *
 * get(object, 'a.b.c', 'default')
 * // => 'default'
 */
function get(object, path, defaultValue) {
  const result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

export default get;
