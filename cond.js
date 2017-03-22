import arrayMap from './.internal/arrayMap.js'

/**
 * 创建一个迭代对的函数，并调用第一个谓词的相应函数来返回 true
 * 谓词函数对用 `this` 绑定和创建的函数的参数调用。
 *
 * @since 4.0.0
 * @category Util
 * @param {Array} pairs 谓词函数对
 * @returns {Function} 返回新的复合函数
 * @example
 *
 * const func = cond([
 *   [matches({ 'a': 1 }),         constant('matches A')],
 *   [conforms({ 'b': isNumber }), constant('matches B')],
 *   [stubTrue,                    constant('no match')]
 * ])
 *
 * func({ 'a': 1, 'b': 2 })
 * // => 'matches A'
 *
 * func({ 'a': 0, 'b': 1 })
 * // => 'matches B'
 *
 * func({ 'a': '1', 'b': '2' })
 * // => 'no match'
 */
function cond(pairs) {
  const length = pairs == null ? 0 : pairs.length

  pairs = !length ? [] : arrayMap(pairs, (pair) => {
    if (typeof pair[1] != 'function') {
      throw new TypeError('Expected a function')
    }
    return [pair[0], pair[1]]
  })

  return (...args) => {
    let index = -1
    while (++index < length) {
      const pair = pairs[index]
      if (pair[0].apply(this, args)) {
        return pair[1].apply(this, args)
      }
    }
  }
}

export default cond
