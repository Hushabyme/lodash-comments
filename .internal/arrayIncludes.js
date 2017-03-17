import baseIndexOf from './baseIndexOf.js'

/**
 * 对于不支持指定要从中进行搜索的索引的数组的 `includes` 的专用版本
 *
 * @private
 * @param {Array} [array] 要迭代的数组
 * @param {*} target 要搜索的值
 * @returns {boolean} 如果 `target` 被找到则返回 `true`，否则返回 `false`
 */

function arrayIncludes(array, value) {
  const length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

export default arrayIncludes;
