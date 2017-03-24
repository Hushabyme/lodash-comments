import createCaseFirst from './.internal/createCaseFirst.js'

/**
 * 将 `string` 的第一个字符转换为小写
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] 要转换的字符串
 * @returns {string} 返回转换后的字符串
 * @example
 *
 * lowerFirst('Fred')
 * // => 'fred'
 *
 * lowerFirst('FRED')
 * // => 'fRED'
 */
const lowerFirst = createCaseFirst('toLowerCase')

export default lowerFirst
