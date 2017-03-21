/**
 * `reduce` 和 `reduceRight` 的基本实现，它们使用 `eachFunc` 来遍历 `collection`
 *
 * @private
 * @param {Array|Object} collection 迭代的集合
 * @param {Function} iteratee 每次迭代调用该函数
 * @param {*} accumulator 初始值
 * @param {boolean} initAccum 使用 `collection` 的第一个或最后一个元素作为初始值
 * @param {Function} eachFunc 该函数在 `collection` 上进行迭代
 * @returns {*} 返回累加的值
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, (value, index, collection) => {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection)
  });
  return accumulator;
}

export default baseReduce;
