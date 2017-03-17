/**
 * `findIndex` 和 `findLastIndex` 方法的基本实现
 *
 * @private
 * @param {Array} array 指定的数组
 * @param {Function} predicate 每一次迭代调用的数组
 * @param {number} fromIndex 从该索引值处起搜索
 * @param {boolean} [fromRight] 指定迭代方向为从右到左
 * @returns {number} 返回匹配的值的索引值，若未找到则返回 `-1`
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  const { length } = array;
  let index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

export default baseFindIndex;

/**
*
* Test
*
* */

// 这个方法就是我们用到的 findIndex() 或者 indexOf()
// 目前我更加推荐 indexOf() 和 lastIndexOf() 方法，可是我们看到了，这里的函数是可以传入 fromIndex 和 fromRight 的
// 那我们动手来实现吧


function find(array, value, fromRight) {
  const right = fromRight;

  if(right) return array.lastIndexOf(value);

  return array.indexOf(value);
}

const arr = ['a', 'b', 'a', 'd'];
console.log(find(arr, 'a'));  // 0
console.log(find(arr, 'a', true));  // 2
console.log(find(arr, 'c'));  // -1

// 这样，我们也就封装了一个小函数，实现了从左往右以及从右向左的寻找索引值
