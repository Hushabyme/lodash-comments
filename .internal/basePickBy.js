import baseGet from './baseGet.js'
import baseSet from './baseSet.js'
import castPath from './castPath.js'

/**
 * `pickBy`的基础实现
 *
 * @private
 * @param {Object} object 源对象
 * @param {string[]} paths 要选择的属性路径
 * @param {Function} predicate 每个属性调用该函数
 * @returns {Object} 返回新的对象
 */
function basePickBy(object, paths, predicate) {
  let index = -1;
  const length = paths.length;
  const result = {};

  while (++index < length) {
    const path = paths[index];
    const value = baseGet(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

export default basePickBy;
