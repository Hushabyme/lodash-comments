import SetCache from './SetCache.js'
import arrayIncludes from './arrayIncludes.js'
import arrayIncludesWith from './arrayIncludesWith.js'
import arrayMap from './arrayMap.js'
import cacheHas from './cacheHas.js'

const nativeMin = Math.min;

/**
 * 像 `intersection` 方法一样的基本实现，接收要检查的数组中的数组
 *
 * @private
 * @param {Array} arrays 指定的数组
 * @param {Function} [iteratee] 每一个元素调用的迭代器
 * @param {Function} [comparator] 每一个元素调用的比较器
 * @returns {Array} 返回新的 shared 的数组的值
 */
function baseIntersection(arrays, iteratee, comparator) {
  const includes = comparator ? arrayIncludesWith : arrayIncludes
  const length = arrays[0].length;
  const othLength = arrays.length;
  const caches = new Array(othLength);
  const result = [];

  let array;
  let maxLength = Infinity;
  let othIndex = othLength;

  while (othIndex--) {
    array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, (value) => iteratee(value))
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined
  }
  array = arrays[0];

  let index = -1;
  const seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    let value = array[index];
    const computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        const cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

export default baseIntersection;
