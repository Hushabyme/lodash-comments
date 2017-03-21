/*
*
* 该方法应该是已经被废弃
*
* */

import createWrap from './.internal/createWrap.js'

/** 用于组合函数元数据的位掩码 */
const WRAP_ARY_FLAG = 128;

/**
 * Creates a function that invokes `func`, with up to `n` arguments,
 * ignoring any additional arguments.
 *
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @param {number} [n=func.length] The arity cap.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * map(['6', '8', '10'], ary(parseInt, 1))
 * // => [6, 8, 10]
 */
function ary(func, n) {
  n = (func && n == null) ? func.length : n
  return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n)
}

export default ary


