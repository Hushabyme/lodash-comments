import createMathOperation from './.internal/createMathOperation.js'

/**
 * 将两个数相加
 *
 * @since 3.4.0
 * @category Math
 * @param {number} augend 添加中的第一个数字
 * @param {number} addend 添加中的第二个数字
 * @returns {number} 返回和
 * @example
 *
 * add(6, 4)
 * // => 10
 */

const add = createMathOperation((augend, addend) => augend + addend, 0);

export default add;


/*
*
* 思考：
*
* 我很好奇，为什么一个 add 方法需要这样写一个函数呢？任何一个初学者都是可以写出 a + b 这样的函数
* 看完了这一部分源码后，觉得有一点不可思议
*
*/


