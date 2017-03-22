import createRound from './.internal/createRound.js'

/**
 * 计算 `number` 向下舍入为 `precision`
 *
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round down.
 * @param {number} [precision=0] The precision to round down to.
 * @returns {number} Returns the rounded down number.
 * @example
 *
 * floor(4.006)
 * // => 4
 *
 * floor(0.046, 2)
 * // => 0.04
 *
 * floor(4060, -2)
 * // => 4000
 */
const floor = createRound('floor')

export default floor

/*
*
* 思考：
*
* 我们可以自己使用 Math.floor() 来代替它
* 为什么 `lodash` 要有这个方法呢？目的就是为了一致性！而不是看起来很简单，所以没有必要
*
* */
