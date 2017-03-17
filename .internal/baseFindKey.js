/**
 * 类似于 `findKey` and `findLastKey` 方法的基本实现，使用 `eachFunc` 迭代 `collection`
 *
 * @private
 * @param {Array|Object} collection 指定的 collection
 * @param {Function} predicate 每一次迭代调用的函数
 * @param {Function} eachFunc 迭代 `collection` 的函数
 * @returns {*} 返回找到的值或者键，否则返回 `undefined`
 */
function baseFindKey(collection, predicate, eachFunc) {
  let result;
  eachFunc(collection, (value, key, collection) => {
    if (predicate(value, key, collection)) {
      result = key;
      return false;
    }
  });
  return result;
}

export default baseFindKey;


