import get from '../get.js'

/**
 * 作为 `at` 的基本实现，只是不支持单个路径
 *
 * @private
 * @param {Object} object 要迭代的对象
 * @param {string[]} paths 要选择的属性的路径
 * @returns {Array} 返回挑选的元素
 */

function baseAt(object, paths) {
  let index = -1;
  const length = paths.length;
  const result = new Array(length);
  const skip = object == null;

  while (++index < length) {
    result[index] = skip ? undefined : get(object, paths[index]);
  }
  return result;
}

export default baseAt;
