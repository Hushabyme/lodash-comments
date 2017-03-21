import createRound from './.internal/createRound.js'

/**
 * 计算 `number` 向上舍入到 `precision`
 *
 * @since 3.10.0
 * @category Math
 * @param {number} number 要向上舍入的数字
 * @param {number} [precision=0] 向上舍入的精度
 * @returns {number} 返回向上舍入的数字
 * @example
 *
 * ceil(4.006)
 * // => 5
 *
 * ceil(6.004, 2)
 * // => 6.01
 *
 * ceil(6040, -2)
 * // => 6100
 */
const ceil = createRound('ceil');

export default ceil
