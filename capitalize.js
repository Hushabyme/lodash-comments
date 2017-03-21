import upperFirst from './upperFirst.js'

/**
 * 将 `string` 的第一个字符转换为大写，将其余字符转换为小写
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] 要大写的字符串.
 * @returns {string} 返回经过大写处理后的字符串
 * @example
 *
 * capitalize('FRED')
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(string.toLowerCase())
}

export default capitalize
