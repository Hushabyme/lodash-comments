import arrayEvery from './.internal/arrayEvery.js'
import baseEvery from './.internal/baseEvery.js'

/**
 * 检查 `predicate` 是否为 `all` 元素返回 `true`
 * 一旦 `predicate` 返回 false，就停止
 * 谓词被调用三个参数：（value，index | key，collection）。
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection 要迭代的集合
 * @param {Function} predicate 每一次迭代调用的函数
 * @returns {boolean} 如果所有元素都通过谓词检查，否则返回 `true`，否则返回 `false`
 * @example
 *
 * every([true, 1, null, 'yes'], Boolean)
 * // => false
 */
function every(collection, predicate) {
  const func = Array.isArray(collection) ? arrayEvery : baseEvery
  return func(collection, predicate)
}

export default every

/*
*
* 思考：
*
* 这个方法很像原生的 Array.prototype.every() 方法
*
* */
