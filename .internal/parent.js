import baseGet from './baseGet.js'
import baseSlice from './baseSlice.js'

/**
 * 获取 `object` 的 `path` 的父级的值
 *
 * @private
 * @param {Object} object 要查询的对象
 * @param {Array} path 获取父值的路径
 * @returns {*} 返回父级的值
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

export default parent;
