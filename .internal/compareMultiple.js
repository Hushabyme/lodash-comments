import compareAscending from './compareAscending.js'

/**
 * 由 `orderBy` 使用来将值的多个属性与另一个值进行比较，并对它们进行稳定排序
 *
 * 如果 `orders` 未指定，所有值按升序排序。否则，为相应值的升序排序顺序指定降序的 `desc` 顺序或 `asc` 顺序
 *
 * @private
 * @param {Object} object 要比较的对象
 * @param {Object} other 要比较的其它对象
 * @param {boolean[]|string[]} orders 按属性排序的顺序
 * @returns {number} 返回 `object` 的排序顺序指示符
 */
function compareMultiple(object, other, orders) {
  let index = -1;
  const objCriteria = object.criteria;
  const othCriteria = other.criteria;
  const length = objCriteria.length;
  const ordersLength = orders.length;

  while (++index < length) {
    const result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      const order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

export default compareMultiple;
