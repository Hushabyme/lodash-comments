import baseEach from './baseEach.js'

/**
 * `some` 的基本实现
 *
 * @private
 * @param {Array|Object} collection 迭代的集合
 * @param {Function} predicate 每次迭代调用该函数
 * @returns {boolean} 如果任何元素通过谓词检查，返回 `true`，否则返回 `false`
 */
function baseSome(collection, predicate) {
  let result;

  baseEach(collection, (value, index, collection) => {
    result = predicate(value, index, collection);
    return !result
  });
  return !!result;
}

export default baseSome;
