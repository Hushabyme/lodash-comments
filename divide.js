import createMathOperation from './.internal/createMathOperation.js'

/**
 * 分离两个数字
 *
 * @since 4.7.0
 * @category Math
 * @param {number} dividend 一部分的第一个数字
 * @param {number} divisor 一部分的第二个数字
 * @returns {number} 返回商
 * @example
 *
 * divide(6, 4)
 * // => 1.5
 */
const divide = createMathOperation((dividend, divisor) => dividend / divisor, 1)

export default divide

/*
*
* 思考：
*
* 看到这个函数，我不知道该说什么了...
* 这个函数的作用是用于求商？
*
* */
