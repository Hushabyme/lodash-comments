import createCaseFirst from './.internal/createCaseFirst.js'

/**
 * 将 `string` 的第一个字符转换为大写
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] 要转换的字符串
 * @returns {string} 返回转换后的字符串
 * @see camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase
 * @example
 *
 * upperFirst('fred')
 * // => 'Fred'
 *
 * upperFirst('FRED')
 * // => 'FRED'
 */
const upperFirst = createCaseFirst('toUpperCase');

export default upperFirst
