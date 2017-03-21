import castPath from './castPath.js'
import last from '../last.js'
import parent from './parent.js'
import toKey from './toKey.js'

/**
 * `unset` 的基本实现
 *
 * @private
 * @param {Object} object 要修改的对象
 * @param {Array|string} path 要设置的属性路径
 * @returns {boolean} 如果属性被删除，返回 `true`，否则返回 `false`
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

export default baseUnset;
