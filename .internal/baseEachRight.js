import baseForOwnRight from './baseForOwnRight.js'  // TODO 该功能尚未完成
import isArrayLike from '../isArrayLike.js'

/**
 * The base implementation of `forEachRight`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
function baseEachRight(collection, iteratee) {
  if (collection == null) {
    return collection
  }
  if (!isArrayLike(collection)) {
    return baseForOwnRight(collection, iteratee)
  }
  const iterable = Object(collection)
  let length = collection.length

  while (length--) {
    if (iteratee(iterable[length], length, iterable) === false) {
      break
    }
  }
  return collection
}

export default baseEachRight
