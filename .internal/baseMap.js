import baseEach from './baseEach.js'
import isArrayLike from '../isArrayLike.js'

/**
 * `map` 方法的基础实现
 *
 * @private
 * @param {Array|Object} collection 迭代的集合
 * @param {Function} iteratee 每一次迭代调用的函数
 * @returns {Array} 返回新的 mapped 过的数组
 */
function baseMap(collection, iteratee) {
  let index = -1;
  const result = isArrayLike(collection) ? new Array(collection.length) : [];

  baseEach(collection, (value, key, collection) => {
    result[++index] = iteratee(value, key, collection)
  });
  return result;
}

export default baseMap;
