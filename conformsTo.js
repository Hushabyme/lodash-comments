import baseConformsTo from './.internal/baseConformsTo.js'
import keys from './keys.js'

/**
 * 通过调用 `source` 的谓词属性与 `object` 对应的属性值，检查 `object` 是否符合 `source'
 *
 * **注意:** 部分应用 `source` 时，此方法等效于 `conforms`
 *
 * @since 4.14.0
 * @category Lang
 * @param {Object} object 要检查的对象
 * @param {Object} source 属性的对象是符合的
 * @returns {boolean} 如果对象符合，返回 `true`，否则返回 `false`
 * @example
 *
 * const object = { 'a': 1, 'b': 2 }
 *
 * conformsTo(object, { 'b': function(n) { return n > 1 } })
 * // => true
 *
 * conformsTo(object, { 'b': function(n) { return n > 2 } })
 * // => false
 */
function conformsTo(object, source) {
  return source == null || baseConformsTo(object, source, keys(source))
}

export default conformsTo
