import arrayMap from './arrayMap.js'
import baseMap from './baseMap.js'
import baseSortBy from './baseSortBy.js'
import compareMultiple from './compareMultiple.js'

/**
 * `orderBy`的基本实现，但没有参数保护
 *
 * @private
 * @param {Array|Object} collection 迭代的集合
 * @param {Function[]|Object[]|string[]} iteratees 迭代排序
 * @param {string[]} orders `iteratees`的排序顺序
 * @returns {Array} 返回新的排序数组
 */
function baseOrderBy(collection, iteratees, orders) {
  let index = -1;
  iteratees = iteratees.length ? iteratees : [(value) => value];

  const result = baseMap(collection, (value, key, collection) => {
    const criteria = arrayMap(iteratees, (iteratee) => iteratee(value));
    return { 'criteria': criteria, 'index': ++index, 'value': value }
  });

  return baseSortBy(result, (object, other) => compareMultiple(object, other, orders));
}

export default baseOrderBy;
