import castPath from './castPath.js'
import toKey from './toKey.js'

/**
 * `get` 的基本实现，但不支持默认值
 *
 * @private
 * @param {Object} object 要查询的对象
 * @param {Array|string} path 要获取的 key 的路径
 * @returns {*} 返回完成的值
 */

function baseGet(object, path) {
  path = castPath(path, object);

  let index = 0;
  const length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])]
  }
  return (index && index == length) ? object : undefined
}

export default baseGet;
