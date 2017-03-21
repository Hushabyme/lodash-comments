import baseAt from './.internal/baseAt.js'

/**
 * 创建与 `object` 的 `path` 对应的值的数组
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object 要迭代的对象
 * @param {...(string|string[])} [paths] 要选择的属性路径.
 * @returns {Array} 返回所选值
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
 *
 * at(object, ['a[0].b.c', 'a[1]'])
 * // => [3, 4]
 */
function at(...paths) {
  return baseAt(paths)
}

export default at
