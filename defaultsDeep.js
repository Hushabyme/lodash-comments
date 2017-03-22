import customDefaultsMerge from './.internal/customDefaultsMerge.js'
import mergeWith from './mergeWith.js'

/**
 * 这个方法就像 `defaults`，除了它递归地分配默认属性
 *
 * **注意:** 该方法改变了 `object`
 *
 * @since 3.10.0
 * @category Object
 * @param {Object} object 目标对象
 * @param {...Object} [sources] 源对象
 * @returns {Object} 返回 `object`
 * @see defaults
 * @example
 *
 * defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } })
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
function defaultsDeep(...args) {
  args.push(undefined, customDefaultsMerge)
  return mergeWith.apply(undefined, args)
}

export default defaultsDeep
